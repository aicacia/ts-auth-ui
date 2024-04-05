import { derived, get } from 'svelte/store';
import { localstorageWritable } from 'svelte-localstorage-writable';
import { isOnline } from './online';
import {
	authConfiguration,
	currentUserApi,
	getAuthToken,
	registerApi,
	setAuthToken,
	tokenApi,
	userApi,
	userEmailApi
} from '$lib/openapi';
import { type Token, type UserWithPermissions } from '$lib/openapi/auth';
import EventEmitter from 'eventemitter3';
import { goto, invalidateAll } from '$app/navigation';
import { base } from '$app/paths';

const tokenWritable = localstorageWritable<Token | null>('token', null);
const userWritable = localstorageWritable<UserWithPermissions | null>('user', null);

export const user = derived(userWritable, (user) => user);
export const signedIn = derived(userWritable, (user) => !!user);
export const admin = derived(userWritable, (user) => user?.permissions.includes('admin') === true);

export const userEmitter = new EventEmitter<{
	user(user: UserWithPermissions): void;
	signOut(): void;
}>();

export function waitForUser() {
	const user = get(userWritable);
	if (getAuthToken() && user) {
		return Promise.resolve(user);
	} else {
		return new Promise<UserWithPermissions>((resolve) => userEmitter.once('user', resolve));
	}
}

export function isSignedIn() {
	return get(signedIn);
}

export function getUser() {
	return get(user);
}

export async function signIn(usernameOrEmail: string, password: string) {
	const token = await tokenApi.tokenPost({
		grant_type: 'password',
		username: usernameOrEmail,
		password
	});
	return signInWithToken(token);
}

export async function signUp(
	username: string,
	password: string,
	passwordConfirmation: string,
	email: string
) {
	const token = await registerApi.registerPost({
		username,
		password,
		password_confirmation: passwordConfirmation
	});
	return signInWithToken(token);
}

async function signInWithToken(token: Token) {
	setAuthToken(token);
	const user = await currentUserApi.userGet();
	userWritable.set(user);
	tokenWritable.set(token);
	userEmitter.emit('user', user);
	return user;
}

export async function changeUsername(username: string) {
	await userApi.usersIdPatch(get(user)!.id, { username });
	userWritable.update((user) => (user ? { ...user, username } : null));
	await invalidateAll();
}

export async function setPrimaryEmail(emailId: number) {
	await userEmailApi.usersUserIdEmailsIdSetPrimaryPatch(get(user)?.id as number, emailId);
	userWritable.update((user) => {
		if (user) {
			const emailIndex = user.emails.findIndex((e) => e.id === emailId);
			if (emailIndex !== -1) {
				const newEmails = user.emails.slice();
				const newEmail = newEmails[emailIndex];
				if (user.email) {
					newEmails[emailIndex] = user.email;
				} else {
					newEmails.splice(emailIndex, 1);
				}
				return { ...user, email: newEmail, emails: newEmails };
			}
		}
		return user;
	});
	await invalidateAll();
}

export async function deleteEmail(emailId: number) {
	await userEmailApi.usersUserIdEmailsIdDelete(get(user)?.id as number, emailId);
	userWritable.update((user) => {
		if (user) {
			const emailIndex = user.emails.findIndex((e) => e.id === emailId);
			if (emailIndex !== -1) {
				const newEmails = user.emails.slice();
				newEmails.splice(emailIndex, 1);
				return { ...user, emails: newEmails };
			}
		}
		return user;
	});
	await invalidateAll();
}

export async function sendConfirmationToEmail(emailId: number) {
	await userEmailApi.usersUserIdEmailsIdSendConfirmationPatch(get(user)?.id as number, emailId);
}

export async function confirmEmail(emailId: number, confirmationToken: string) {
	await userEmailApi.usersUserIdEmailsIdConfirmPatch(get(user)?.id as number, emailId, {
		token: confirmationToken
	});
	userWritable.update((user) => {
		if (user) {
			if (user.email?.id === emailId) {
				return { ...user, email: { ...user.email, confirmed: true } };
			}
			const emailIndex = user.emails.findIndex((e) => e.id === emailId);
			if (emailIndex !== -1) {
				const newEmails = user.emails.slice();
				newEmails[emailIndex] = { ...newEmails[emailIndex], confirmed: true };
				return { ...user, emails: newEmails };
			}
		}
		return user;
	});
	await invalidateAll();
}

export async function createEmail(email: string) {
	const newEmail = await userEmailApi.usersUserIdEmailsPost(get(user)?.id as number, { email });
	userWritable.update((user) => {
		if (user) {
			const newEmails = user.emails.slice();
			newEmails.push(newEmail);
			return { ...user, emails: newEmails };
		}
		return user;
	});
	await invalidateAll();
}

export function signOut() {
	userWritable.set(null);
	tokenWritable.set(null);
	setAuthToken(undefined);
	userEmitter.emit('signOut');
}

let initialCall = true;
export async function getCurrentUser() {
	try {
		let user = get(userWritable);
		if (initialCall) {
			if (isOnline()) {
				const token = get(tokenWritable);
				if (token) {
					setAuthToken(token);
					user = await currentUserApi.userGet();
					userWritable.set(user);
					userEmitter.emit('user', user);
				} else {
					signOut();
					user = null;
				}
			} else if (user) {
				userEmitter.emit('user', user);
			}
			initialCall = false;
		}
		return user;
	} catch (error) {
		console.error(error);
		signOut();
		return null;
	}
}

authConfiguration.middleware?.push({
	async post(context) {
		switch (context.response.status) {
			case 401:
				signOut();
				await goto(`${base}/signin`);
				break;
			case 503:
				await goto(`${base}/maintenance`);
		}
	}
});

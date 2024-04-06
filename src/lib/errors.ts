import { ResponseError, type Errors } from '$lib/openapi/auth';
import { createNotification } from './stores/notifications';

export async function handleError(error: unknown) {
	if (error instanceof ResponseError) {
		const errors = await error.response.json();
		if (errors) {
			notifyErrors(errors);
			return errors as Errors;
		}
	}
	console.error(error);
	createNotification('Application Error, if it presists please contact support.');
	throw error;
}

export async function notifyErrors(errors: Errors) {
	for (const [name, messages] of Object.entries(errors.errors)) {
		for (const message of messages) {
			createNotification(`${name}.${message.error}: ${message.parameters}`);
		}
	}
}

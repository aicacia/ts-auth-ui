import {
	Configuration,
	UserApi,
	TokenApi,
	WellKnownApi,
	type ConfigurationParameters,
	ApplicationApi,
	RegisterApi,
	type Token
} from './auth';
import { PUBLIC_AUTH_API_URL, PUBLIC_TENENT_ID } from '$env/static/public';

let authToken: Token | undefined;

const defaultConfiguration: ConfigurationParameters = {
	middleware: [
		{
			pre: async (context) => ({ ...context, init: { ...context.init, mode: 'cors' } })
		}
	],
	apiKey(name: string) {
		switch (name) {
			case 'Tenent-Id':
				return PUBLIC_TENENT_ID;
			default:
				return `${authToken?.token_type} ${authToken?.access_token}`;
		}
	},
	credentials: 'same-origin'
};

const defaultAuthConfiguration: ConfigurationParameters = {
	...defaultConfiguration,
	basePath: typeof __DEV_AUTH_API_URL__ !== 'undefined' ? __DEV_AUTH_API_URL__ : PUBLIC_AUTH_API_URL
};

export const authConfiguration = new Configuration(defaultAuthConfiguration);

export const userApi = new UserApi(authConfiguration);
export const tokenApi = new TokenApi(authConfiguration);
export const registerApi = new RegisterApi(authConfiguration);
export const applicationApi = new ApplicationApi(authConfiguration);
export const wellKnownApi = new WellKnownApi(authConfiguration);

export function setAuthToken(newAuthToken?: Token) {
	authToken = newAuthToken;
}
export function getAuthToken() {
	return authToken;
}

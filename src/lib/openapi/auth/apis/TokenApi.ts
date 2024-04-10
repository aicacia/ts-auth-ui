/* tslint:disable */
/* eslint-disable */
/**
 * Auth API
 * Auth API API
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: nathanfaucett@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Errors,
  Token,
  TokenRequest,
} from '../models/index';
import {
    ErrorsFromJSON,
    ErrorsToJSON,
    TokenFromJSON,
    TokenToJSON,
    TokenRequestFromJSON,
    TokenRequestToJSON,
} from '../models/index';

export interface CreateTokenRequest {
    tokenRequest: TokenRequest;
}

/**
 * TokenApi - interface
 * 
 * @export
 * @interface TokenApiInterface
 */
export interface TokenApiInterface {
    /**
     * 
     * @summary Create JWT Token
     * @param {TokenRequest} tokenRequest token request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiInterface
     */
    createTokenRaw(requestParameters: CreateTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Token>>;

    /**
     * Create JWT Token
     */
    createToken(tokenRequest: TokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Token>;

}

/**
 * 
 */
export class TokenApi extends runtime.BaseAPI implements TokenApiInterface {

    /**
     * Create JWT Token
     */
    async createTokenRaw(requestParameters: CreateTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Token>> {
        if (requestParameters['tokenRequest'] == null) {
            throw new runtime.RequiredError(
                'tokenRequest',
                'Required parameter "tokenRequest" was null or undefined when calling createToken().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Tenent-Id"] = await this.configuration.apiKey("Tenent-Id"); // ApplicationTenentId authentication
        }

        const response = await this.request({
            path: `/token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TokenRequestToJSON(requestParameters['tokenRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenFromJSON(jsonValue));
    }

    /**
     * Create JWT Token
     */
    async createToken(tokenRequest: TokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Token> {
        const response = await this.createTokenRaw({ tokenRequest: tokenRequest }, initOverrides);
        return await response.value();
    }

}

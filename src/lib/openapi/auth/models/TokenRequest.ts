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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TokenRequest
 */
export interface TokenRequest {
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    actor_token?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    actor_token_type?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    assertion?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    audience?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    code_verifier?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    grant_type: string;
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    refresh_token?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    requested_token_type?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    resource?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    scope?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    secret?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    subject_token?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    subject_token_type?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    username?: string;
}

/**
 * Check if a given object implements the TokenRequest interface.
 */
export function instanceOfTokenRequest(value: object): boolean {
    if (!('grant_type' in value)) return false;
    return true;
}

export function TokenRequestFromJSON(json: any): TokenRequest {
    return TokenRequestFromJSONTyped(json, false);
}

export function TokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'actor_token': json['actor_token'] == null ? undefined : json['actor_token'],
        'actor_token_type': json['actor_token_type'] == null ? undefined : json['actor_token_type'],
        'assertion': json['assertion'] == null ? undefined : json['assertion'],
        'audience': json['audience'] == null ? undefined : json['audience'],
        'code': json['code'] == null ? undefined : json['code'],
        'code_verifier': json['code_verifier'] == null ? undefined : json['code_verifier'],
        'grant_type': json['grant_type'],
        'key': json['key'] == null ? undefined : json['key'],
        'password': json['password'] == null ? undefined : json['password'],
        'refresh_token': json['refresh_token'] == null ? undefined : json['refresh_token'],
        'requested_token_type': json['requested_token_type'] == null ? undefined : json['requested_token_type'],
        'resource': json['resource'] == null ? undefined : json['resource'],
        'scope': json['scope'] == null ? undefined : json['scope'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'subject_token': json['subject_token'] == null ? undefined : json['subject_token'],
        'subject_token_type': json['subject_token_type'] == null ? undefined : json['subject_token_type'],
        'username': json['username'] == null ? undefined : json['username'],
    };
}

export function TokenRequestToJSON(value?: TokenRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'actor_token': value['actor_token'],
        'actor_token_type': value['actor_token_type'],
        'assertion': value['assertion'],
        'audience': value['audience'],
        'code': value['code'],
        'code_verifier': value['code_verifier'],
        'grant_type': value['grant_type'],
        'key': value['key'],
        'password': value['password'],
        'refresh_token': value['refresh_token'],
        'requested_token_type': value['requested_token_type'],
        'resource': value['resource'],
        'scope': value['scope'],
        'secret': value['secret'],
        'subject_token': value['subject_token'],
        'subject_token_type': value['subject_token_type'],
        'username': value['username'],
    };
}


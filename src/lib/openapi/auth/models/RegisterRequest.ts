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
 * @interface RegisterRequest
 */
export interface RegisterRequest {
    /**
     * 
     * @type {string}
     * @memberof RegisterRequest
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequest
     */
    password_confirmation?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequest
     */
    username?: string;
}

/**
 * Check if a given object implements the RegisterRequest interface.
 */
export function instanceOfRegisterRequest(value: object): boolean {
    return true;
}

export function RegisterRequestFromJSON(json: any): RegisterRequest {
    return RegisterRequestFromJSONTyped(json, false);
}

export function RegisterRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'password': json['password'] == null ? undefined : json['password'],
        'password_confirmation': json['password_confirmation'] == null ? undefined : json['password_confirmation'],
        'username': json['username'] == null ? undefined : json['username'],
    };
}

export function RegisterRequestToJSON(value?: RegisterRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'password': value['password'],
        'password_confirmation': value['password_confirmation'],
        'username': value['username'],
    };
}


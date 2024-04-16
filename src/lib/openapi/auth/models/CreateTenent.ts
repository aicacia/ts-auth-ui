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
 * @interface CreateTenent
 */
export interface CreateTenent {
    /**
     * 
     * @type {string}
     * @memberof CreateTenent
     */
    algorithm?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTenent
     */
    client_id?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTenent
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof CreateTenent
     */
    expires_in_seconds?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateTenent
     */
    private_key?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTenent
     */
    public_key?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateTenent
     */
    refresh_expires_in_seconds?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateTenent
     */
    uri: string;
}

/**
 * Check if a given object implements the CreateTenent interface.
 */
export function instanceOfCreateTenent(value: object): boolean {
    if (!('description' in value)) return false;
    if (!('uri' in value)) return false;
    return true;
}

export function CreateTenentFromJSON(json: any): CreateTenent {
    return CreateTenentFromJSONTyped(json, false);
}

export function CreateTenentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTenent {
    if (json == null) {
        return json;
    }
    return {
        
        'algorithm': json['algorithm'] == null ? undefined : json['algorithm'],
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'description': json['description'],
        'expires_in_seconds': json['expires_in_seconds'] == null ? undefined : json['expires_in_seconds'],
        'private_key': json['private_key'] == null ? undefined : json['private_key'],
        'public_key': json['public_key'] == null ? undefined : json['public_key'],
        'refresh_expires_in_seconds': json['refresh_expires_in_seconds'] == null ? undefined : json['refresh_expires_in_seconds'],
        'uri': json['uri'],
    };
}

export function CreateTenentToJSON(value?: CreateTenent | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'algorithm': value['algorithm'],
        'client_id': value['client_id'],
        'description': value['description'],
        'expires_in_seconds': value['expires_in_seconds'],
        'private_key': value['private_key'],
        'public_key': value['public_key'],
        'refresh_expires_in_seconds': value['refresh_expires_in_seconds'],
        'uri': value['uri'],
    };
}

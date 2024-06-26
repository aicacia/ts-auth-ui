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
 * @interface Permission
 */
export interface Permission {
    /**
     * 
     * @type {number}
     * @memberof Permission
     */
    application_id: number;
    /**
     * 
     * @type {Date}
     * @memberof Permission
     */
    created_at: Date;
    /**
     * 
     * @type {string}
     * @memberof Permission
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof Permission
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof Permission
     */
    updated_at: Date;
    /**
     * 
     * @type {string}
     * @memberof Permission
     */
    uri: string;
}

/**
 * Check if a given object implements the Permission interface.
 */
export function instanceOfPermission(value: object): boolean {
    if (!('application_id' in value)) return false;
    if (!('created_at' in value)) return false;
    if (!('description' in value)) return false;
    if (!('id' in value)) return false;
    if (!('updated_at' in value)) return false;
    if (!('uri' in value)) return false;
    return true;
}

export function PermissionFromJSON(json: any): Permission {
    return PermissionFromJSONTyped(json, false);
}

export function PermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Permission {
    if (json == null) {
        return json;
    }
    return {
        
        'application_id': json['application_id'],
        'created_at': (new Date(json['created_at'])),
        'description': json['description'],
        'id': json['id'],
        'updated_at': (new Date(json['updated_at'])),
        'uri': json['uri'],
    };
}

export function PermissionToJSON(value?: Permission | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'application_id': value['application_id'],
        'created_at': ((value['created_at']).toISOString()),
        'description': value['description'],
        'id': value['id'],
        'updated_at': ((value['updated_at']).toISOString()),
        'uri': value['uri'],
    };
}


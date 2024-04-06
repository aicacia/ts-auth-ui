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

import { exists, mapValues } from '../runtime';
import type { Email } from './Email';
import {
    EmailFromJSON,
    EmailFromJSONTyped,
    EmailToJSON,
} from './Email';
import type { PhoneNumber } from './PhoneNumber';
import {
    PhoneNumberFromJSON,
    PhoneNumberFromJSONTyped,
    PhoneNumberToJSON,
} from './PhoneNumber';

/**
 * 
 * @export
 * @interface UserWithPermissions
 */
export interface UserWithPermissions {
    /**
     * 
     * @type {Date}
     * @memberof UserWithPermissions
     */
    created_at: Date;
    /**
     * 
     * @type {Email}
     * @memberof UserWithPermissions
     */
    email?: Email;
    /**
     * 
     * @type {Array<Email>}
     * @memberof UserWithPermissions
     */
    emails: Array<Email>;
    /**
     * 
     * @type {number}
     * @memberof UserWithPermissions
     */
    id: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserWithPermissions
     */
    permissions: Array<string>;
    /**
     * 
     * @type {PhoneNumber}
     * @memberof UserWithPermissions
     */
    phone_number?: PhoneNumber;
    /**
     * 
     * @type {Array<PhoneNumber>}
     * @memberof UserWithPermissions
     */
    phone_numbers: Array<PhoneNumber>;
    /**
     * 
     * @type {Date}
     * @memberof UserWithPermissions
     */
    updated_at: Date;
    /**
     * 
     * @type {string}
     * @memberof UserWithPermissions
     */
    username: string;
}

/**
 * Check if a given object implements the UserWithPermissions interface.
 */
export function instanceOfUserWithPermissions(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "created_at" in value;
    isInstance = isInstance && "emails" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "permissions" in value;
    isInstance = isInstance && "phone_numbers" in value;
    isInstance = isInstance && "updated_at" in value;
    isInstance = isInstance && "username" in value;

    return isInstance;
}

export function UserWithPermissionsFromJSON(json: any): UserWithPermissions {
    return UserWithPermissionsFromJSONTyped(json, false);
}

export function UserWithPermissionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserWithPermissions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created_at': (new Date(json['created_at'])),
        'email': !exists(json, 'email') ? undefined : EmailFromJSON(json['email']),
        'emails': ((json['emails'] as Array<any>).map(EmailFromJSON)),
        'id': json['id'],
        'permissions': json['permissions'],
        'phone_number': !exists(json, 'phone_number') ? undefined : PhoneNumberFromJSON(json['phone_number']),
        'phone_numbers': ((json['phone_numbers'] as Array<any>).map(PhoneNumberFromJSON)),
        'updated_at': (new Date(json['updated_at'])),
        'username': json['username'],
    };
}

export function UserWithPermissionsToJSON(value?: UserWithPermissions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': (value.created_at.toISOString()),
        'email': EmailToJSON(value.email),
        'emails': ((value.emails as Array<any>).map(EmailToJSON)),
        'id': value.id,
        'permissions': value.permissions,
        'phone_number': PhoneNumberToJSON(value.phone_number),
        'phone_numbers': ((value.phone_numbers as Array<any>).map(PhoneNumberToJSON)),
        'updated_at': (value.updated_at.toISOString()),
        'username': value.username,
    };
}

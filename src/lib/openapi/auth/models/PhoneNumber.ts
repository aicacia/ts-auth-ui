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
/**
 * 
 * @export
 * @interface PhoneNumber
 */
export interface PhoneNumber {
    /**
     * 
     * @type {boolean}
     * @memberof PhoneNumber
     */
    confirmed: boolean;
    /**
     * 
     * @type {Date}
     * @memberof PhoneNumber
     */
    created_at: Date;
    /**
     * 
     * @type {number}
     * @memberof PhoneNumber
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof PhoneNumber
     */
    phone_number: string;
    /**
     * 
     * @type {Date}
     * @memberof PhoneNumber
     */
    updated_at: Date;
}

/**
 * Check if a given object implements the PhoneNumber interface.
 */
export function instanceOfPhoneNumber(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "confirmed" in value;
    isInstance = isInstance && "created_at" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "phone_number" in value;
    isInstance = isInstance && "updated_at" in value;

    return isInstance;
}

export function PhoneNumberFromJSON(json: any): PhoneNumber {
    return PhoneNumberFromJSONTyped(json, false);
}

export function PhoneNumberFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhoneNumber {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'confirmed': json['confirmed'],
        'created_at': (new Date(json['created_at'])),
        'id': json['id'],
        'phone_number': json['phone_number'],
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function PhoneNumberToJSON(value?: PhoneNumber | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'confirmed': value.confirmed,
        'created_at': (value.created_at.toISOString()),
        'id': value.id,
        'phone_number': value.phone_number,
        'updated_at': (value.updated_at.toISOString()),
    };
}

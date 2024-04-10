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
 * @interface UserInfoAddress
 */
export interface UserInfoAddress {
    /**
     * 
     * @type {string}
     * @memberof UserInfoAddress
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof UserInfoAddress
     */
    locality?: string;
    /**
     * 
     * @type {string}
     * @memberof UserInfoAddress
     */
    postal_code?: string;
    /**
     * 
     * @type {string}
     * @memberof UserInfoAddress
     */
    region?: string;
    /**
     * 
     * @type {string}
     * @memberof UserInfoAddress
     */
    street_address?: string;
}

/**
 * Check if a given object implements the UserInfoAddress interface.
 */
export function instanceOfUserInfoAddress(value: object): boolean {
    return true;
}

export function UserInfoAddressFromJSON(json: any): UserInfoAddress {
    return UserInfoAddressFromJSONTyped(json, false);
}

export function UserInfoAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInfoAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'country': json['country'] == null ? undefined : json['country'],
        'locality': json['locality'] == null ? undefined : json['locality'],
        'postal_code': json['postal_code'] == null ? undefined : json['postal_code'],
        'region': json['region'] == null ? undefined : json['region'],
        'street_address': json['street_address'] == null ? undefined : json['street_address'],
    };
}

export function UserInfoAddressToJSON(value?: UserInfoAddress | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'country': value['country'],
        'locality': value['locality'],
        'postal_code': value['postal_code'],
        'region': value['region'],
        'street_address': value['street_address'],
    };
}


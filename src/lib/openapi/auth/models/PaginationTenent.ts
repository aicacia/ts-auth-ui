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
import type { Tenent } from './Tenent';
import {
    TenentFromJSON,
    TenentFromJSONTyped,
    TenentToJSON,
} from './Tenent';

/**
 * 
 * @export
 * @interface PaginationTenent
 */
export interface PaginationTenent {
    /**
     * 
     * @type {boolean}
     * @memberof PaginationTenent
     */
    has_more: boolean;
    /**
     * 
     * @type {Array<Tenent>}
     * @memberof PaginationTenent
     */
    items: Array<Tenent>;
}

/**
 * Check if a given object implements the PaginationTenent interface.
 */
export function instanceOfPaginationTenent(value: object): boolean {
    if (!('has_more' in value)) return false;
    if (!('items' in value)) return false;
    return true;
}

export function PaginationTenentFromJSON(json: any): PaginationTenent {
    return PaginationTenentFromJSONTyped(json, false);
}

export function PaginationTenentFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginationTenent {
    if (json == null) {
        return json;
    }
    return {
        
        'has_more': json['has_more'],
        'items': ((json['items'] as Array<any>).map(TenentFromJSON)),
    };
}

export function PaginationTenentToJSON(value?: PaginationTenent | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'has_more': value['has_more'],
        'items': ((value['items'] as Array<any>).map(TenentToJSON)),
    };
}


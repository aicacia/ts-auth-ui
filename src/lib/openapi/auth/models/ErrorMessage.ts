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
 * @interface ErrorMessage
 */
export interface ErrorMessage {
    /**
     * 
     * @type {string}
     * @memberof ErrorMessage
     */
    error: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof ErrorMessage
     */
    parameters: Array<object>;
}

/**
 * Check if a given object implements the ErrorMessage interface.
 */
export function instanceOfErrorMessage(value: object): boolean {
    if (!('error' in value)) return false;
    if (!('parameters' in value)) return false;
    return true;
}

export function ErrorMessageFromJSON(json: any): ErrorMessage {
    return ErrorMessageFromJSONTyped(json, false);
}

export function ErrorMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorMessage {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'],
        'parameters': json['parameters'],
    };
}

export function ErrorMessageToJSON(value?: ErrorMessage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'error': value['error'],
        'parameters': value['parameters'],
    };
}


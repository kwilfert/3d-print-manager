/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    email?: string;
}

/**
 * Check if a given object implements the Order interface.
 */
export function instanceOfOrder(value: object): value is Order {
    return true;
}

export function OrderFromJSON(json: any): Order {
    return OrderFromJSONTyped(json, false);
}

export function OrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Order {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'address': json['address'] == null ? undefined : json['address'],
        'city': json['city'] == null ? undefined : json['city'],
        'postcode': json['postcode'] == null ? undefined : json['postcode'],
        'phone': json['phone'] == null ? undefined : json['phone'],
        'email': json['email'] == null ? undefined : json['email'],
    };
}

export function OrderToJSON(value?: Order | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'address': value['address'],
        'city': value['city'],
        'postcode': value['postcode'],
        'phone': value['phone'],
        'email': value['email'],
    };
}

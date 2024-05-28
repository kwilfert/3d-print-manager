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
 * @interface Material
 */
export interface Material {
    /**
     * 
     * @type {number}
     * @memberof Material
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Material
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Material
     */
    attributes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Material
     */
    thumbnailPath?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Material
     */
    resin?: boolean;
}

/**
 * Check if a given object implements the Material interface.
 */
export function instanceOfMaterial(value: object): value is Material {
    return true;
}

export function MaterialFromJSON(json: any): Material {
    return MaterialFromJSONTyped(json, false);
}

export function MaterialFromJSONTyped(json: any, ignoreDiscriminator: boolean): Material {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'attributes': json['attributes'] == null ? undefined : json['attributes'],
        'thumbnailPath': json['thumbnailPath'] == null ? undefined : json['thumbnailPath'],
        'resin': json['resin'] == null ? undefined : json['resin'],
    };
}

export function MaterialToJSON(value?: Material | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'attributes': value['attributes'],
        'thumbnailPath': value['thumbnailPath'],
        'resin': value['resin'],
    };
}


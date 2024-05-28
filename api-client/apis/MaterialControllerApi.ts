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


import * as runtime from '../runtime';
import type {
  Material,
} from '../models/index';
import {
    MaterialFromJSON,
    MaterialToJSON,
} from '../models/index';

export interface CreateMaterialRequest {
    name: string;
    attributes: Array<string>;
    isResin: boolean;
    image: Blob;
}

export interface DeleteMaterialRequest {
    id: number;
}

export interface GetAllMaterialsRequest {
    isResin?: boolean;
}

export interface GetMaterialByIdRequest {
    id: number;
}

export interface UpdateMaterialRequest {
    id: number;
    name: string;
    attributes: Array<string>;
    isResin: boolean;
    image?: Blob;
}

/**
 * 
 */
export class MaterialControllerApi extends runtime.BaseAPI {

    /**
     */
    async createMaterialRaw(requestParameters: CreateMaterialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Material>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling createMaterial().'
            );
        }

        if (requestParameters['attributes'] == null) {
            throw new runtime.RequiredError(
                'attributes',
                'Required parameter "attributes" was null or undefined when calling createMaterial().'
            );
        }

        if (requestParameters['isResin'] == null) {
            throw new runtime.RequiredError(
                'isResin',
                'Required parameter "isResin" was null or undefined when calling createMaterial().'
            );
        }

        if (requestParameters['image'] == null) {
            throw new runtime.RequiredError(
                'image',
                'Required parameter "image" was null or undefined when calling createMaterial().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }

        if (requestParameters['attributes'] != null) {
            queryParameters['attributes'] = requestParameters['attributes'];
        }

        if (requestParameters['isResin'] != null) {
            queryParameters['isResin'] = requestParameters['isResin'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['image'] != null) {
            formParams.append('image', requestParameters['image'] as any);
        }

        const response = await this.request({
            path: `/materials`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaterialFromJSON(jsonValue));
    }

    /**
     */
    async createMaterial(requestParameters: CreateMaterialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Material> {
        const response = await this.createMaterialRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteMaterialRaw(requestParameters: DeleteMaterialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteMaterial().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/materials/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteMaterial(requestParameters: DeleteMaterialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteMaterialRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getAllMaterialsRaw(requestParameters: GetAllMaterialsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Material>>> {
        const queryParameters: any = {};

        if (requestParameters['isResin'] != null) {
            queryParameters['isResin'] = requestParameters['isResin'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/materials`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MaterialFromJSON));
    }

    /**
     */
    async getAllMaterials(requestParameters: GetAllMaterialsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Material>> {
        const response = await this.getAllMaterialsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getMaterialByIdRaw(requestParameters: GetMaterialByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Material>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getMaterialById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/materials/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaterialFromJSON(jsonValue));
    }

    /**
     */
    async getMaterialById(requestParameters: GetMaterialByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Material> {
        const response = await this.getMaterialByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateMaterialRaw(requestParameters: UpdateMaterialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Material>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateMaterial().'
            );
        }

        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling updateMaterial().'
            );
        }

        if (requestParameters['attributes'] == null) {
            throw new runtime.RequiredError(
                'attributes',
                'Required parameter "attributes" was null or undefined when calling updateMaterial().'
            );
        }

        if (requestParameters['isResin'] == null) {
            throw new runtime.RequiredError(
                'isResin',
                'Required parameter "isResin" was null or undefined when calling updateMaterial().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }

        if (requestParameters['attributes'] != null) {
            queryParameters['attributes'] = requestParameters['attributes'];
        }

        if (requestParameters['isResin'] != null) {
            queryParameters['isResin'] = requestParameters['isResin'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['image'] != null) {
            formParams.append('image', requestParameters['image'] as any);
        }

        const response = await this.request({
            path: `/materials/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MaterialFromJSON(jsonValue));
    }

    /**
     */
    async updateMaterial(requestParameters: UpdateMaterialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Material> {
        const response = await this.updateMaterialRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

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
  Model,
} from '../models/index';
import {
    ModelFromJSON,
    ModelToJSON,
} from '../models/index';

export interface CreateModelRequest {
    creator: string;
    name: string;
    price: number;
    description: string;
    tags: Array<number>;
    thumbnail: Blob;
    modelFiles: Array<Blob>;
    creatorSocials?: string;
    images?: Array<Blob>;
}

export interface DeleteModelRequest {
    id: number;
}

export interface GetAllModelsRequest {
    page?: number;
    size?: number;
    orderBy?: Array<string>;
    order?: Array<string>;
    search?: string;
}

export interface GetModelByIdRequest {
    id: number;
}

export interface UpdateModelRequest {
    id: number;
    name: string;
    price: number;
    description: string;
    images?: Array<Blob>;
    thumbnail?: Blob;
}

/**
 * 
 */
export class ModelControllerApi extends runtime.BaseAPI {

    /**
     */
    async createModelRaw(requestParameters: CreateModelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Model>> {
        if (requestParameters['creator'] == null) {
            throw new runtime.RequiredError(
                'creator',
                'Required parameter "creator" was null or undefined when calling createModel().'
            );
        }

        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling createModel().'
            );
        }

        if (requestParameters['price'] == null) {
            throw new runtime.RequiredError(
                'price',
                'Required parameter "price" was null or undefined when calling createModel().'
            );
        }

        if (requestParameters['description'] == null) {
            throw new runtime.RequiredError(
                'description',
                'Required parameter "description" was null or undefined when calling createModel().'
            );
        }

        if (requestParameters['tags'] == null) {
            throw new runtime.RequiredError(
                'tags',
                'Required parameter "tags" was null or undefined when calling createModel().'
            );
        }

        if (requestParameters['thumbnail'] == null) {
            throw new runtime.RequiredError(
                'thumbnail',
                'Required parameter "thumbnail" was null or undefined when calling createModel().'
            );
        }

        if (requestParameters['modelFiles'] == null) {
            throw new runtime.RequiredError(
                'modelFiles',
                'Required parameter "modelFiles" was null or undefined when calling createModel().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['creator'] != null) {
            queryParameters['creator'] = requestParameters['creator'];
        }

        if (requestParameters['creatorSocials'] != null) {
            queryParameters['creator_socials'] = requestParameters['creatorSocials'];
        }

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }

        if (requestParameters['price'] != null) {
            queryParameters['price'] = requestParameters['price'];
        }

        if (requestParameters['description'] != null) {
            queryParameters['description'] = requestParameters['description'];
        }

        if (requestParameters['tags'] != null) {
            queryParameters['tags'] = requestParameters['tags'];
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
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['thumbnail'] != null) {
            formParams.append('thumbnail', requestParameters['thumbnail'] as any);
        }

        if (requestParameters['images'] != null) {
            requestParameters['images'].forEach((element) => {
                formParams.append('images', element as any);
            })
        }

        if (requestParameters['modelFiles'] != null) {
            requestParameters['modelFiles'].forEach((element) => {
                formParams.append('model_files', element as any);
            })
        }

        const response = await this.request({
            path: `/models`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelFromJSON(jsonValue));
    }

    /**
     */
    async createModel(requestParameters: CreateModelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Model> {
        const response = await this.createModelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteModelRaw(requestParameters: DeleteModelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteModel().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/models/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteModel(requestParameters: DeleteModelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteModelRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getAllModelsRaw(requestParameters: GetAllModelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Model>>> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['size'] != null) {
            queryParameters['size'] = requestParameters['size'];
        }

        if (requestParameters['orderBy'] != null) {
            queryParameters['orderBy'] = requestParameters['orderBy'];
        }

        if (requestParameters['order'] != null) {
            queryParameters['order'] = requestParameters['order'];
        }

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/models`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelFromJSON));
    }

    /**
     */
    async getAllModels(requestParameters: GetAllModelsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Model>> {
        const response = await this.getAllModelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getModelByIdRaw(requestParameters: GetModelByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Model>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getModelById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/models/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelFromJSON(jsonValue));
    }

    /**
     */
    async getModelById(requestParameters: GetModelByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Model> {
        const response = await this.getModelByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateModelRaw(requestParameters: UpdateModelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Model>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateModel().'
            );
        }

        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling updateModel().'
            );
        }

        if (requestParameters['price'] == null) {
            throw new runtime.RequiredError(
                'price',
                'Required parameter "price" was null or undefined when calling updateModel().'
            );
        }

        if (requestParameters['description'] == null) {
            throw new runtime.RequiredError(
                'description',
                'Required parameter "description" was null or undefined when calling updateModel().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['images'] != null) {
            queryParameters['images'] = requestParameters['images'];
        }

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }

        if (requestParameters['price'] != null) {
            queryParameters['price'] = requestParameters['price'];
        }

        if (requestParameters['description'] != null) {
            queryParameters['description'] = requestParameters['description'];
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

        if (requestParameters['thumbnail'] != null) {
            formParams.append('thumbnail', requestParameters['thumbnail'] as any);
        }

        const response = await this.request({
            path: `/models/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelFromJSON(jsonValue));
    }

    /**
     */
    async updateModel(requestParameters: UpdateModelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Model> {
        const response = await this.updateModelRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

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


import * as runtime from '../runtime';
import type {
  ApplicationPermission,
  CreateApplicationPermission,
  UpdateApplicationPermission,
} from '../models/index';
import {
    ApplicationPermissionFromJSON,
    ApplicationPermissionToJSON,
    CreateApplicationPermissionFromJSON,
    CreateApplicationPermissionToJSON,
    UpdateApplicationPermissionFromJSON,
    UpdateApplicationPermissionToJSON,
} from '../models/index';

export interface ApplicationsApplicationIdPermissionsGetRequest {
    applicationId: number;
}

export interface ApplicationsApplicationIdPermissionsIdAddUserUserIdPatchRequest {
    applicationId: number;
    id: number;
    userId: number;
}

export interface ApplicationsApplicationIdPermissionsIdDeleteRequest {
    applicationId: number;
    id: string;
}

export interface ApplicationsApplicationIdPermissionsIdGetRequest {
    applicationId: number;
    id: string;
}

export interface ApplicationsApplicationIdPermissionsIdPatchRequest {
    applicationId: number;
    id: number;
    application: UpdateApplicationPermission;
}

export interface ApplicationsApplicationIdPermissionsIdRemoveUserUserIdDeleteRequest {
    applicationId: number;
    id: number;
    userId: number;
}

export interface ApplicationsApplicationIdPermissionsPostRequest {
    applicationId: number;
    application: CreateApplicationPermission;
}

/**
 * ApplicationPermissionApi - interface
 * 
 * @export
 * @interface ApplicationPermissionApiInterface
 */
export interface ApplicationPermissionApiInterface {
    /**
     * 
     * @summary Get application permissions
     * @param {number} applicationId application id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationPermissionApiInterface
     */
    applicationsApplicationIdPermissionsGetRaw(requestParameters: ApplicationsApplicationIdPermissionsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApplicationPermission>>>;

    /**
     * Get application permissions
     */
    applicationsApplicationIdPermissionsGet(applicationId: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApplicationPermission>>;

    /**
     * 
     * @summary Add permission to user
     * @param {number} applicationId application id
     * @param {number} id application permission id
     * @param {number} userId user id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationPermissionApiInterface
     */
    applicationsApplicationIdPermissionsIdAddUserUserIdPatchRaw(requestParameters: ApplicationsApplicationIdPermissionsIdAddUserUserIdPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Add permission to user
     */
    applicationsApplicationIdPermissionsIdAddUserUserIdPatch(applicationId: number, id: number, userId: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Delete application permission
     * @param {number} applicationId application id
     * @param {string} id application permission id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationPermissionApiInterface
     */
    applicationsApplicationIdPermissionsIdDeleteRaw(requestParameters: ApplicationsApplicationIdPermissionsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete application permission
     */
    applicationsApplicationIdPermissionsIdDelete(applicationId: number, id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Get application permission by id
     * @param {number} applicationId application id
     * @param {string} id application permission id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationPermissionApiInterface
     */
    applicationsApplicationIdPermissionsIdGetRaw(requestParameters: ApplicationsApplicationIdPermissionsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationPermission>>;

    /**
     * Get application permission by id
     */
    applicationsApplicationIdPermissionsIdGet(applicationId: number, id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationPermission>;

    /**
     * 
     * @summary Update application permission
     * @param {number} applicationId application id
     * @param {number} id application permission id
     * @param {UpdateApplicationPermission} application update application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationPermissionApiInterface
     */
    applicationsApplicationIdPermissionsIdPatchRaw(requestParameters: ApplicationsApplicationIdPermissionsIdPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationPermission>>;

    /**
     * Update application permission
     */
    applicationsApplicationIdPermissionsIdPatch(applicationId: number, id: number, application: UpdateApplicationPermission, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationPermission>;

    /**
     * 
     * @summary Remove permission from user
     * @param {number} applicationId application id
     * @param {number} id application permission id
     * @param {number} userId user id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationPermissionApiInterface
     */
    applicationsApplicationIdPermissionsIdRemoveUserUserIdDeleteRaw(requestParameters: ApplicationsApplicationIdPermissionsIdRemoveUserUserIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Remove permission from user
     */
    applicationsApplicationIdPermissionsIdRemoveUserUserIdDelete(applicationId: number, id: number, userId: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Create application permission
     * @param {number} applicationId application id
     * @param {CreateApplicationPermission} application create application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationPermissionApiInterface
     */
    applicationsApplicationIdPermissionsPostRaw(requestParameters: ApplicationsApplicationIdPermissionsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationPermission>>;

    /**
     * Create application permission
     */
    applicationsApplicationIdPermissionsPost(applicationId: number, application: CreateApplicationPermission, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationPermission>;

}

/**
 * 
 */
export class ApplicationPermissionApi extends runtime.BaseAPI implements ApplicationPermissionApiInterface {

    /**
     * Get application permissions
     */
    async applicationsApplicationIdPermissionsGetRaw(requestParameters: ApplicationsApplicationIdPermissionsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApplicationPermission>>> {
        if (requestParameters.applicationId === null || requestParameters.applicationId === undefined) {
            throw new runtime.RequiredError('applicationId','Required parameter requestParameters.applicationId was null or undefined when calling applicationsApplicationIdPermissionsGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/applications/{applicationId}/permissions`.replace(`{${"applicationId"}}`, encodeURIComponent(String(requestParameters.applicationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ApplicationPermissionFromJSON));
    }

    /**
     * Get application permissions
     */
    async applicationsApplicationIdPermissionsGet(applicationId: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApplicationPermission>> {
        const response = await this.applicationsApplicationIdPermissionsGetRaw({ applicationId: applicationId }, initOverrides);
        return await response.value();
    }

    /**
     * Add permission to user
     */
    async applicationsApplicationIdPermissionsIdAddUserUserIdPatchRaw(requestParameters: ApplicationsApplicationIdPermissionsIdAddUserUserIdPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.applicationId === null || requestParameters.applicationId === undefined) {
            throw new runtime.RequiredError('applicationId','Required parameter requestParameters.applicationId was null or undefined when calling applicationsApplicationIdPermissionsIdAddUserUserIdPatch.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling applicationsApplicationIdPermissionsIdAddUserUserIdPatch.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling applicationsApplicationIdPermissionsIdAddUserUserIdPatch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/applications/{applicationId}/permissions/{id}/add-user/{userId}`.replace(`{${"applicationId"}}`, encodeURIComponent(String(requestParameters.applicationId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Add permission to user
     */
    async applicationsApplicationIdPermissionsIdAddUserUserIdPatch(applicationId: number, id: number, userId: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.applicationsApplicationIdPermissionsIdAddUserUserIdPatchRaw({ applicationId: applicationId, id: id, userId: userId }, initOverrides);
    }

    /**
     * Delete application permission
     */
    async applicationsApplicationIdPermissionsIdDeleteRaw(requestParameters: ApplicationsApplicationIdPermissionsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.applicationId === null || requestParameters.applicationId === undefined) {
            throw new runtime.RequiredError('applicationId','Required parameter requestParameters.applicationId was null or undefined when calling applicationsApplicationIdPermissionsIdDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling applicationsApplicationIdPermissionsIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/applications/{applicationId}/permissions/{id}`.replace(`{${"applicationId"}}`, encodeURIComponent(String(requestParameters.applicationId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete application permission
     */
    async applicationsApplicationIdPermissionsIdDelete(applicationId: number, id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.applicationsApplicationIdPermissionsIdDeleteRaw({ applicationId: applicationId, id: id }, initOverrides);
    }

    /**
     * Get application permission by id
     */
    async applicationsApplicationIdPermissionsIdGetRaw(requestParameters: ApplicationsApplicationIdPermissionsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationPermission>> {
        if (requestParameters.applicationId === null || requestParameters.applicationId === undefined) {
            throw new runtime.RequiredError('applicationId','Required parameter requestParameters.applicationId was null or undefined when calling applicationsApplicationIdPermissionsIdGet.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling applicationsApplicationIdPermissionsIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/applications/{applicationId}/permissions/{id}`.replace(`{${"applicationId"}}`, encodeURIComponent(String(requestParameters.applicationId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationPermissionFromJSON(jsonValue));
    }

    /**
     * Get application permission by id
     */
    async applicationsApplicationIdPermissionsIdGet(applicationId: number, id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationPermission> {
        const response = await this.applicationsApplicationIdPermissionsIdGetRaw({ applicationId: applicationId, id: id }, initOverrides);
        return await response.value();
    }

    /**
     * Update application permission
     */
    async applicationsApplicationIdPermissionsIdPatchRaw(requestParameters: ApplicationsApplicationIdPermissionsIdPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationPermission>> {
        if (requestParameters.applicationId === null || requestParameters.applicationId === undefined) {
            throw new runtime.RequiredError('applicationId','Required parameter requestParameters.applicationId was null or undefined when calling applicationsApplicationIdPermissionsIdPatch.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling applicationsApplicationIdPermissionsIdPatch.');
        }

        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling applicationsApplicationIdPermissionsIdPatch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/applications/{applicationId}/permissions/{id}`.replace(`{${"applicationId"}}`, encodeURIComponent(String(requestParameters.applicationId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateApplicationPermissionToJSON(requestParameters.application),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationPermissionFromJSON(jsonValue));
    }

    /**
     * Update application permission
     */
    async applicationsApplicationIdPermissionsIdPatch(applicationId: number, id: number, application: UpdateApplicationPermission, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationPermission> {
        const response = await this.applicationsApplicationIdPermissionsIdPatchRaw({ applicationId: applicationId, id: id, application: application }, initOverrides);
        return await response.value();
    }

    /**
     * Remove permission from user
     */
    async applicationsApplicationIdPermissionsIdRemoveUserUserIdDeleteRaw(requestParameters: ApplicationsApplicationIdPermissionsIdRemoveUserUserIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.applicationId === null || requestParameters.applicationId === undefined) {
            throw new runtime.RequiredError('applicationId','Required parameter requestParameters.applicationId was null or undefined when calling applicationsApplicationIdPermissionsIdRemoveUserUserIdDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling applicationsApplicationIdPermissionsIdRemoveUserUserIdDelete.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling applicationsApplicationIdPermissionsIdRemoveUserUserIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/applications/{applicationId}/permissions/{id}/remove-user/{userId}`.replace(`{${"applicationId"}}`, encodeURIComponent(String(requestParameters.applicationId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove permission from user
     */
    async applicationsApplicationIdPermissionsIdRemoveUserUserIdDelete(applicationId: number, id: number, userId: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.applicationsApplicationIdPermissionsIdRemoveUserUserIdDeleteRaw({ applicationId: applicationId, id: id, userId: userId }, initOverrides);
    }

    /**
     * Create application permission
     */
    async applicationsApplicationIdPermissionsPostRaw(requestParameters: ApplicationsApplicationIdPermissionsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationPermission>> {
        if (requestParameters.applicationId === null || requestParameters.applicationId === undefined) {
            throw new runtime.RequiredError('applicationId','Required parameter requestParameters.applicationId was null or undefined when calling applicationsApplicationIdPermissionsPost.');
        }

        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling applicationsApplicationIdPermissionsPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/applications/{applicationId}/permissions`.replace(`{${"applicationId"}}`, encodeURIComponent(String(requestParameters.applicationId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateApplicationPermissionToJSON(requestParameters.application),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationPermissionFromJSON(jsonValue));
    }

    /**
     * Create application permission
     */
    async applicationsApplicationIdPermissionsPost(applicationId: number, application: CreateApplicationPermission, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationPermission> {
        const response = await this.applicationsApplicationIdPermissionsPostRaw({ applicationId: applicationId, application: application }, initOverrides);
        return await response.value();
    }

}

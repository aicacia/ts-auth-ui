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
  Errors,
  ResetPassword,
  UpdateUserInfoRequest,
  UserInfo,
  UserWithPermissions,
} from '../models/index';
import {
    ErrorsFromJSON,
    ErrorsToJSON,
    ResetPasswordFromJSON,
    ResetPasswordToJSON,
    UpdateUserInfoRequestFromJSON,
    UpdateUserInfoRequestToJSON,
    UserInfoFromJSON,
    UserInfoToJSON,
    UserWithPermissionsFromJSON,
    UserWithPermissionsToJSON,
} from '../models/index';

export interface ResetPasswordRequest {
    resetPassword: ResetPassword;
}

export interface UpdateUserInfoOperationRequest {
    userinfoUpdates: UpdateUserInfoRequest;
}

/**
 * CurrentUserApi - interface
 * 
 * @export
 * @interface CurrentUserApiInterface
 */
export interface CurrentUserApiInterface {
    /**
     * 
     * @summary Get current user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CurrentUserApiInterface
     */
    currentUserRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserWithPermissions>>;

    /**
     * Get current user
     */
    currentUser(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserWithPermissions>;

    /**
     * 
     * @summary Get user info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CurrentUserApiInterface
     */
    getUserInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserInfo>>;

    /**
     * Get user info
     */
    getUserInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserInfo>;

    /**
     * 
     * @summary Resets a user\'s password
     * @param {ResetPassword} resetPassword reset user\&#39;s password
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CurrentUserApiInterface
     */
    resetPasswordRaw(requestParameters: ResetPasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Resets a user\'s password
     */
    resetPassword(resetPassword: ResetPassword, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Updates the user\'s info
     * @param {UpdateUserInfoRequest} userinfoUpdates User info updates
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CurrentUserApiInterface
     */
    updateUserInfoRaw(requestParameters: UpdateUserInfoOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserInfo>>;

    /**
     * Updates the user\'s info
     */
    updateUserInfo(userinfoUpdates: UpdateUserInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserInfo>;

}

/**
 * 
 */
export class CurrentUserApi extends runtime.BaseAPI implements CurrentUserApiInterface {

    /**
     * Get current user
     */
    async currentUserRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserWithPermissions>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserWithPermissionsFromJSON(jsonValue));
    }

    /**
     * Get current user
     */
    async currentUser(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserWithPermissions> {
        const response = await this.currentUserRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get user info
     */
    async getUserInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserInfo>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/user/info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserInfoFromJSON(jsonValue));
    }

    /**
     * Get user info
     */
    async getUserInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserInfo> {
        const response = await this.getUserInfoRaw(initOverrides);
        return await response.value();
    }

    /**
     * Resets a user\'s password
     */
    async resetPasswordRaw(requestParameters: ResetPasswordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['resetPassword'] == null) {
            throw new runtime.RequiredError(
                'resetPassword',
                'Required parameter "resetPassword" was null or undefined when calling resetPassword().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/user/reset-password`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ResetPasswordToJSON(requestParameters['resetPassword']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Resets a user\'s password
     */
    async resetPassword(resetPassword: ResetPassword, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.resetPasswordRaw({ resetPassword: resetPassword }, initOverrides);
    }

    /**
     * Updates the user\'s info
     */
    async updateUserInfoRaw(requestParameters: UpdateUserInfoOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserInfo>> {
        if (requestParameters['userinfoUpdates'] == null) {
            throw new runtime.RequiredError(
                'userinfoUpdates',
                'Required parameter "userinfoUpdates" was null or undefined when calling updateUserInfo().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Authorization authentication
        }

        const response = await this.request({
            path: `/user/info`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateUserInfoRequestToJSON(requestParameters['userinfoUpdates']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserInfoFromJSON(jsonValue));
    }

    /**
     * Updates the user\'s info
     */
    async updateUserInfo(userinfoUpdates: UpdateUserInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserInfo> {
        const response = await this.updateUserInfoRaw({ userinfoUpdates: userinfoUpdates }, initOverrides);
        return await response.value();
    }

}

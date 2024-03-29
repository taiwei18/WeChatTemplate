/* tslint:disable */
/* eslint-disable */
/**
 * 恒瑞代谢公众号
 * 恒瑞代谢相关公众号接口
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AdminResultLoginOutput } from '../models';
import { AdminResultObject } from '../models';
import { AdminResultUserInfoOutput } from '../models';
import { MetAuthBindingInput } from '../models';
import { SignatureInput } from '../models';
/**
 * MetAuthApi - axios parameter creator
 * @export
 */
export const MetAuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 用户绑定
         * @param {MetAuthBindingInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMetAuthBindingPost: async (body?: MetAuthBindingInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/metAuth/binding`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 用户登录
         * @param {string} wxid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMetAuthLoginWxidPost: async (wxid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'wxid' is not null or undefined
            if (wxid === null || wxid === undefined) {
                throw new RequiredError('wxid','Required parameter wxid was null or undefined when calling apiMetAuthLoginWxidPost.');
            }
            const localVarPath = `/api/metAuth/login/{wxid}`
                .replace(`{${"wxid"}}`, encodeURIComponent(String(wxid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 发送短信
         * @param {string} phoneNumber 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMetAuthSendSmsPhoneNumberPost: async (phoneNumber: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'phoneNumber' is not null or undefined
            if (phoneNumber === null || phoneNumber === undefined) {
                throw new RequiredError('phoneNumber','Required parameter phoneNumber was null or undefined when calling apiMetAuthSendSmsPhoneNumberPost.');
            }
            const localVarPath = `/api/metAuth/sendSms/{phoneNumber}`
                .replace(`{${"phoneNumber"}}`, encodeURIComponent(String(phoneNumber)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取用户信息
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMetAuthUserInfoPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/metAuth/userInfo`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 微信jssdk
         * @param {SignatureInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMetAuthWxJssdkPost: async (body?: SignatureInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/metAuth/wxJssdk`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 微信用户授权回调
         * @param {string} redirecturl 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        metauthCallbackwxGet: async (redirecturl: string, code: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'redirecturl' is not null or undefined
            if (redirecturl === null || redirecturl === undefined) {
                throw new RequiredError('redirecturl','Required parameter redirecturl was null or undefined when calling metauthCallbackwxGet.');
            }
            // verify required parameter 'code' is not null or undefined
            if (code === null || code === undefined) {
                throw new RequiredError('code','Required parameter code was null or undefined when calling metauthCallbackwxGet.');
            }
            const localVarPath = `/metauth/callbackwx`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            if (redirecturl !== undefined) {
                localVarQueryParameter['redirecturl'] = redirecturl;
            }

            if (code !== undefined) {
                localVarQueryParameter['code'] = code;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 微信用户授权
         * @param {string} [redirecturl] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        metauthRedirectwxGet: async (redirecturl?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/metauth/redirectwx`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            if (redirecturl !== undefined) {
                localVarQueryParameter['redirecturl'] = redirecturl;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MetAuthApi - functional programming interface
 * @export
 */
export const MetAuthApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 用户绑定
         * @param {MetAuthBindingInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetAuthBindingPost(body?: MetAuthBindingInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultLoginOutput>>> {
            const localVarAxiosArgs = await MetAuthApiAxiosParamCreator(configuration).apiMetAuthBindingPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 用户登录
         * @param {string} wxid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetAuthLoginWxidPost(wxid: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultLoginOutput>>> {
            const localVarAxiosArgs = await MetAuthApiAxiosParamCreator(configuration).apiMetAuthLoginWxidPost(wxid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 发送短信
         * @param {string} phoneNumber 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetAuthSendSmsPhoneNumberPost(phoneNumber: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await MetAuthApiAxiosParamCreator(configuration).apiMetAuthSendSmsPhoneNumberPost(phoneNumber, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取用户信息
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetAuthUserInfoPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultUserInfoOutput>>> {
            const localVarAxiosArgs = await MetAuthApiAxiosParamCreator(configuration).apiMetAuthUserInfoPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 微信jssdk
         * @param {SignatureInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetAuthWxJssdkPost(body?: SignatureInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await MetAuthApiAxiosParamCreator(configuration).apiMetAuthWxJssdkPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 微信用户授权回调
         * @param {string} redirecturl 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async metauthCallbackwxGet(redirecturl: string, code: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await MetAuthApiAxiosParamCreator(configuration).metauthCallbackwxGet(redirecturl, code, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 微信用户授权
         * @param {string} [redirecturl] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async metauthRedirectwxGet(redirecturl?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await MetAuthApiAxiosParamCreator(configuration).metauthRedirectwxGet(redirecturl, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MetAuthApi - factory interface
 * @export
 */
export const MetAuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 用户绑定
         * @param {MetAuthBindingInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetAuthBindingPost(body?: MetAuthBindingInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultLoginOutput>> {
            return MetAuthApiFp(configuration).apiMetAuthBindingPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 用户登录
         * @param {string} wxid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetAuthLoginWxidPost(wxid: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultLoginOutput>> {
            return MetAuthApiFp(configuration).apiMetAuthLoginWxidPost(wxid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 发送短信
         * @param {string} phoneNumber 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetAuthSendSmsPhoneNumberPost(phoneNumber: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return MetAuthApiFp(configuration).apiMetAuthSendSmsPhoneNumberPost(phoneNumber, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取用户信息
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetAuthUserInfoPost(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultUserInfoOutput>> {
            return MetAuthApiFp(configuration).apiMetAuthUserInfoPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 微信jssdk
         * @param {SignatureInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetAuthWxJssdkPost(body?: SignatureInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return MetAuthApiFp(configuration).apiMetAuthWxJssdkPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 微信用户授权回调
         * @param {string} redirecturl 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async metauthCallbackwxGet(redirecturl: string, code: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return MetAuthApiFp(configuration).metauthCallbackwxGet(redirecturl, code, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 微信用户授权
         * @param {string} [redirecturl] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async metauthRedirectwxGet(redirecturl?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return MetAuthApiFp(configuration).metauthRedirectwxGet(redirecturl, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MetAuthApi - object-oriented interface
 * @export
 * @class MetAuthApi
 * @extends {BaseAPI}
 */
export class MetAuthApi extends BaseAPI {
    /**
     * 
     * @summary 用户绑定
     * @param {MetAuthBindingInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetAuthApi
     */
    public async apiMetAuthBindingPost(body?: MetAuthBindingInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultLoginOutput>> {
        return MetAuthApiFp(this.configuration).apiMetAuthBindingPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 用户登录
     * @param {string} wxid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetAuthApi
     */
    public async apiMetAuthLoginWxidPost(wxid: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultLoginOutput>> {
        return MetAuthApiFp(this.configuration).apiMetAuthLoginWxidPost(wxid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 发送短信
     * @param {string} phoneNumber 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetAuthApi
     */
    public async apiMetAuthSendSmsPhoneNumberPost(phoneNumber: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return MetAuthApiFp(this.configuration).apiMetAuthSendSmsPhoneNumberPost(phoneNumber, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取用户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetAuthApi
     */
    public async apiMetAuthUserInfoPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultUserInfoOutput>> {
        return MetAuthApiFp(this.configuration).apiMetAuthUserInfoPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 微信jssdk
     * @param {SignatureInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetAuthApi
     */
    public async apiMetAuthWxJssdkPost(body?: SignatureInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return MetAuthApiFp(this.configuration).apiMetAuthWxJssdkPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 微信用户授权回调
     * @param {string} redirecturl 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetAuthApi
     */
    public async metauthCallbackwxGet(redirecturl: string, code: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return MetAuthApiFp(this.configuration).metauthCallbackwxGet(redirecturl, code, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 微信用户授权
     * @param {string} [redirecturl] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetAuthApi
     */
    public async metauthRedirectwxGet(redirecturl?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return MetAuthApiFp(this.configuration).metauthRedirectwxGet(redirecturl, options).then((request) => request(this.axios, this.basePath));
    }
}

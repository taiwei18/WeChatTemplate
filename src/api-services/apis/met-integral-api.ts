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
import { AdminResultBoolean } from '../models';
import { AdminResultListMetIntegralRecord } from '../models';
/**
 * MetIntegralApi - axios parameter creator
 * @export
 */
export const MetIntegralApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 判断是否完成积分获取
         * @param {string} integralCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMetIntegralCheckIntegralIntegralCodeGet: async (integralCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'integralCode' is not null or undefined
            if (integralCode === null || integralCode === undefined) {
                throw new RequiredError('integralCode','Required parameter integralCode was null or undefined when calling apiMetIntegralCheckIntegralIntegralCodeGet.');
            }
            const localVarPath = `/api/metIntegral/checkIntegral/{integralCode}`
                .replace(`{${"integralCode"}}`, encodeURIComponent(String(integralCode)));
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
         * @summary 查询积分核销记录
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMetIntegralGetIntegralWriteOffRecordGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/metIntegral/getIntegralWriteOffRecord`;
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
         * @summary 记录积分获取
         * @param {string} integralCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMetIntegralSetIntegralIntegralCodePost: async (integralCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'integralCode' is not null or undefined
            if (integralCode === null || integralCode === undefined) {
                throw new RequiredError('integralCode','Required parameter integralCode was null or undefined when calling apiMetIntegralSetIntegralIntegralCodePost.');
            }
            const localVarPath = `/api/metIntegral/setIntegral/{integralCode}`
                .replace(`{${"integralCode"}}`, encodeURIComponent(String(integralCode)));
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
         * @summary 积分记录核销
         * @param {string} giftCode 
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMetIntegralSetIntegralWriteOffGiftCodeUserIdPost: async (giftCode: string, userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'giftCode' is not null or undefined
            if (giftCode === null || giftCode === undefined) {
                throw new RequiredError('giftCode','Required parameter giftCode was null or undefined when calling apiMetIntegralSetIntegralWriteOffGiftCodeUserIdPost.');
            }
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling apiMetIntegralSetIntegralWriteOffGiftCodeUserIdPost.');
            }
            const localVarPath = `/api/metIntegral/setIntegralWriteOff/{giftCode}/{userId}`
                .replace(`{${"giftCode"}}`, encodeURIComponent(String(giftCode)))
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
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
    }
};

/**
 * MetIntegralApi - functional programming interface
 * @export
 */
export const MetIntegralApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 判断是否完成积分获取
         * @param {string} integralCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetIntegralCheckIntegralIntegralCodeGet(integralCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultBoolean>>> {
            const localVarAxiosArgs = await MetIntegralApiAxiosParamCreator(configuration).apiMetIntegralCheckIntegralIntegralCodeGet(integralCode, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 查询积分核销记录
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetIntegralGetIntegralWriteOffRecordGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListMetIntegralRecord>>> {
            const localVarAxiosArgs = await MetIntegralApiAxiosParamCreator(configuration).apiMetIntegralGetIntegralWriteOffRecordGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 记录积分获取
         * @param {string} integralCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetIntegralSetIntegralIntegralCodePost(integralCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await MetIntegralApiAxiosParamCreator(configuration).apiMetIntegralSetIntegralIntegralCodePost(integralCode, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 积分记录核销
         * @param {string} giftCode 
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetIntegralSetIntegralWriteOffGiftCodeUserIdPost(giftCode: string, userId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await MetIntegralApiAxiosParamCreator(configuration).apiMetIntegralSetIntegralWriteOffGiftCodeUserIdPost(giftCode, userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MetIntegralApi - factory interface
 * @export
 */
export const MetIntegralApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 判断是否完成积分获取
         * @param {string} integralCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetIntegralCheckIntegralIntegralCodeGet(integralCode: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultBoolean>> {
            return MetIntegralApiFp(configuration).apiMetIntegralCheckIntegralIntegralCodeGet(integralCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 查询积分核销记录
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetIntegralGetIntegralWriteOffRecordGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListMetIntegralRecord>> {
            return MetIntegralApiFp(configuration).apiMetIntegralGetIntegralWriteOffRecordGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 记录积分获取
         * @param {string} integralCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetIntegralSetIntegralIntegralCodePost(integralCode: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return MetIntegralApiFp(configuration).apiMetIntegralSetIntegralIntegralCodePost(integralCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 积分记录核销
         * @param {string} giftCode 
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetIntegralSetIntegralWriteOffGiftCodeUserIdPost(giftCode: string, userId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return MetIntegralApiFp(configuration).apiMetIntegralSetIntegralWriteOffGiftCodeUserIdPost(giftCode, userId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MetIntegralApi - object-oriented interface
 * @export
 * @class MetIntegralApi
 * @extends {BaseAPI}
 */
export class MetIntegralApi extends BaseAPI {
    /**
     * 
     * @summary 判断是否完成积分获取
     * @param {string} integralCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetIntegralApi
     */
    public async apiMetIntegralCheckIntegralIntegralCodeGet(integralCode: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultBoolean>> {
        return MetIntegralApiFp(this.configuration).apiMetIntegralCheckIntegralIntegralCodeGet(integralCode, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 查询积分核销记录
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetIntegralApi
     */
    public async apiMetIntegralGetIntegralWriteOffRecordGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListMetIntegralRecord>> {
        return MetIntegralApiFp(this.configuration).apiMetIntegralGetIntegralWriteOffRecordGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 记录积分获取
     * @param {string} integralCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetIntegralApi
     */
    public async apiMetIntegralSetIntegralIntegralCodePost(integralCode: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return MetIntegralApiFp(this.configuration).apiMetIntegralSetIntegralIntegralCodePost(integralCode, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 积分记录核销
     * @param {string} giftCode 
     * @param {number} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetIntegralApi
     */
    public async apiMetIntegralSetIntegralWriteOffGiftCodeUserIdPost(giftCode: string, userId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return MetIntegralApiFp(this.configuration).apiMetIntegralSetIntegralWriteOffGiftCodeUserIdPost(giftCode, userId, options).then((request) => request(this.axios, this.basePath));
    }
}
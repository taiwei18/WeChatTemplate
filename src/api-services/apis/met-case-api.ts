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
import { AdminResultListMetCase } from '../models';
import { AdminResultMetCase } from '../models';
import { MetCaseInput } from '../models';
/**
 * MetCaseApi - axios parameter creator
 * @export
 */
export const MetCaseApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 更具ID获取病例详情
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMetCaseGetIdGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiMetCaseGetIdGet.');
            }
            const localVarPath = `/api/metCase/get/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * @summary 获取互动病例清单
         * @param {MetCaseInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMetCaseGetListPost: async (body?: MetCaseInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/metCase/getList`;
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
         * @summary 获取互动病例推荐清单
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMetCaseGetSuggestListPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/metCase/getSuggestList`;
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
 * MetCaseApi - functional programming interface
 * @export
 */
export const MetCaseApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 更具ID获取病例详情
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetCaseGetIdGet(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultMetCase>>> {
            const localVarAxiosArgs = await MetCaseApiAxiosParamCreator(configuration).apiMetCaseGetIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取互动病例清单
         * @param {MetCaseInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetCaseGetListPost(body?: MetCaseInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListMetCase>>> {
            const localVarAxiosArgs = await MetCaseApiAxiosParamCreator(configuration).apiMetCaseGetListPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取互动病例推荐清单
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetCaseGetSuggestListPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListMetCase>>> {
            const localVarAxiosArgs = await MetCaseApiAxiosParamCreator(configuration).apiMetCaseGetSuggestListPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MetCaseApi - factory interface
 * @export
 */
export const MetCaseApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 更具ID获取病例详情
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetCaseGetIdGet(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultMetCase>> {
            return MetCaseApiFp(configuration).apiMetCaseGetIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取互动病例清单
         * @param {MetCaseInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetCaseGetListPost(body?: MetCaseInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListMetCase>> {
            return MetCaseApiFp(configuration).apiMetCaseGetListPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取互动病例推荐清单
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetCaseGetSuggestListPost(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListMetCase>> {
            return MetCaseApiFp(configuration).apiMetCaseGetSuggestListPost(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MetCaseApi - object-oriented interface
 * @export
 * @class MetCaseApi
 * @extends {BaseAPI}
 */
export class MetCaseApi extends BaseAPI {
    /**
     * 
     * @summary 更具ID获取病例详情
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetCaseApi
     */
    public async apiMetCaseGetIdGet(id: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultMetCase>> {
        return MetCaseApiFp(this.configuration).apiMetCaseGetIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取互动病例清单
     * @param {MetCaseInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetCaseApi
     */
    public async apiMetCaseGetListPost(body?: MetCaseInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListMetCase>> {
        return MetCaseApiFp(this.configuration).apiMetCaseGetListPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取互动病例推荐清单
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetCaseApi
     */
    public async apiMetCaseGetSuggestListPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListMetCase>> {
        return MetCaseApiFp(this.configuration).apiMetCaseGetSuggestListPost(options).then((request) => request(this.axios, this.basePath));
    }
}

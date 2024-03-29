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
import { AdminResultInt32 } from '../models';
import { AdminResultMetMeetRecord } from '../models';
import { SetUserMetMeetRecordInput } from '../models';
/**
 * MetMeetRecordApi - axios parameter creator
 * @export
 */
export const MetMeetRecordApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 记录用户观看直播时间
         * @param {SetUserMetMeetRecordInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMetMeetRecordSetPost: async (body?: SetUserMetMeetRecordInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/metMeetRecord/set`;
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
         * @summary 记录用户回放时间
         * @param {SetUserMetMeetRecordInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMetMeetRecordSetReviewPost: async (body?: SetUserMetMeetRecordInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/metMeetRecord/setReview`;
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
         * @summary 记录用户观看记录(不包含记录时间)
         * @param {SetUserMetMeetRecordInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMetMeetRecordSetStartPost: async (body?: SetUserMetMeetRecordInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/metMeetRecord/setStart`;
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
    }
};

/**
 * MetMeetRecordApi - functional programming interface
 * @export
 */
export const MetMeetRecordApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 记录用户观看直播时间
         * @param {SetUserMetMeetRecordInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetMeetRecordSetPost(body?: SetUserMetMeetRecordInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultInt32>>> {
            const localVarAxiosArgs = await MetMeetRecordApiAxiosParamCreator(configuration).apiMetMeetRecordSetPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 记录用户回放时间
         * @param {SetUserMetMeetRecordInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetMeetRecordSetReviewPost(body?: SetUserMetMeetRecordInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultInt32>>> {
            const localVarAxiosArgs = await MetMeetRecordApiAxiosParamCreator(configuration).apiMetMeetRecordSetReviewPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 记录用户观看记录(不包含记录时间)
         * @param {SetUserMetMeetRecordInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetMeetRecordSetStartPost(body?: SetUserMetMeetRecordInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultMetMeetRecord>>> {
            const localVarAxiosArgs = await MetMeetRecordApiAxiosParamCreator(configuration).apiMetMeetRecordSetStartPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MetMeetRecordApi - factory interface
 * @export
 */
export const MetMeetRecordApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 记录用户观看直播时间
         * @param {SetUserMetMeetRecordInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetMeetRecordSetPost(body?: SetUserMetMeetRecordInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultInt32>> {
            return MetMeetRecordApiFp(configuration).apiMetMeetRecordSetPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 记录用户回放时间
         * @param {SetUserMetMeetRecordInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetMeetRecordSetReviewPost(body?: SetUserMetMeetRecordInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultInt32>> {
            return MetMeetRecordApiFp(configuration).apiMetMeetRecordSetReviewPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 记录用户观看记录(不包含记录时间)
         * @param {SetUserMetMeetRecordInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetMeetRecordSetStartPost(body?: SetUserMetMeetRecordInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultMetMeetRecord>> {
            return MetMeetRecordApiFp(configuration).apiMetMeetRecordSetStartPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MetMeetRecordApi - object-oriented interface
 * @export
 * @class MetMeetRecordApi
 * @extends {BaseAPI}
 */
export class MetMeetRecordApi extends BaseAPI {
    /**
     * 
     * @summary 记录用户观看直播时间
     * @param {SetUserMetMeetRecordInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetMeetRecordApi
     */
    public async apiMetMeetRecordSetPost(body?: SetUserMetMeetRecordInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultInt32>> {
        return MetMeetRecordApiFp(this.configuration).apiMetMeetRecordSetPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 记录用户回放时间
     * @param {SetUserMetMeetRecordInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetMeetRecordApi
     */
    public async apiMetMeetRecordSetReviewPost(body?: SetUserMetMeetRecordInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultInt32>> {
        return MetMeetRecordApiFp(this.configuration).apiMetMeetRecordSetReviewPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 记录用户观看记录(不包含记录时间)
     * @param {SetUserMetMeetRecordInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetMeetRecordApi
     */
    public async apiMetMeetRecordSetStartPost(body?: SetUserMetMeetRecordInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultMetMeetRecord>> {
        return MetMeetRecordApiFp(this.configuration).apiMetMeetRecordSetStartPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}

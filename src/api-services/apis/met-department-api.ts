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
import { AdminResultListMetDepartment } from '../models';
/**
 * MetDepartmentApi - axios parameter creator
 * @export
 */
export const MetDepartmentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 根据名称获取科室清单
         * @param {string} [name] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMetDepartmentGetPost: async (name?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/metDepartment/get`;
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

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
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
 * MetDepartmentApi - functional programming interface
 * @export
 */
export const MetDepartmentApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 根据名称获取科室清单
         * @param {string} [name] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetDepartmentGetPost(name?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListMetDepartment>>> {
            const localVarAxiosArgs = await MetDepartmentApiAxiosParamCreator(configuration).apiMetDepartmentGetPost(name, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MetDepartmentApi - factory interface
 * @export
 */
export const MetDepartmentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 根据名称获取科室清单
         * @param {string} [name] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMetDepartmentGetPost(name?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListMetDepartment>> {
            return MetDepartmentApiFp(configuration).apiMetDepartmentGetPost(name, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MetDepartmentApi - object-oriented interface
 * @export
 * @class MetDepartmentApi
 * @extends {BaseAPI}
 */
export class MetDepartmentApi extends BaseAPI {
    /**
     * 
     * @summary 根据名称获取科室清单
     * @param {string} [name] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetDepartmentApi
     */
    public async apiMetDepartmentGetPost(name?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListMetDepartment>> {
        return MetDepartmentApiFp(this.configuration).apiMetDepartmentGetPost(name, options).then((request) => request(this.axios, this.basePath));
    }
}

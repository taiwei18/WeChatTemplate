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
/**
 * 用户登录结果
 * @export
 * @interface LoginOutput
 */
export interface LoginOutput {
    /**
     * 令牌Token
     * @type {string}
     * @memberof LoginOutput
     */
    accessToken?: string | null;
    /**
     * 刷新Token
     * @type {string}
     * @memberof LoginOutput
     */
    refreshToken?: string | null;
}

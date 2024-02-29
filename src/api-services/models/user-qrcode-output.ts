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
 * 用户公众号二维码
 * @export
 * @interface UserQrcodeOutput
 */
export interface UserQrcodeOutput {
    /**
     * 二维码ID
     * @type {number}
     * @memberof UserQrcodeOutput
     */
    qrcodeId?: number;
    /**
     * 二维码参数
     * @type {string}
     * @memberof UserQrcodeOutput
     */
    code?: string | null;
    /**
     * 二维码地址
     * @type {string}
     * @memberof UserQrcodeOutput
     */
    qrcodeSrc?: string | null;
}

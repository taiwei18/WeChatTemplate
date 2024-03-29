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
import { MetProduct } from './met-product';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultListMetProduct
 */
export interface AdminResultListMetProduct {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultListMetProduct
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultListMetProduct
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultListMetProduct
     */
    message?: string | null;
    /**
     * 数据
     * @type {Array<MetProduct>}
     * @memberof AdminResultListMetProduct
     */
    result?: Array<MetProduct> | null;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultListMetProduct
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultListMetProduct
     */
    time?: Date;
}

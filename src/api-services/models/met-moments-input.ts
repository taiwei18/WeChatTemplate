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
 * 
 * @export
 * @interface MetMomentsInput
 */
export interface MetMomentsInput {
    /**
     * 关键字查询
     * @type {string}
     * @memberof MetMomentsInput
     */
    searchKey?: string | null;
    /**
     * 产品名称
     * @type {string}
     * @memberof MetMomentsInput
     */
    name?: string | null;
    /**
     * 产品名称
     * @type {number}
     * @memberof MetMomentsInput
     */
    productId?: number | null;
    /**
     * 是否推荐
     * @type {boolean}
     * @memberof MetMomentsInput
     */
    isSuggest?: boolean | null;
}
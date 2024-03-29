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
import { MetTag } from './met-tag';
/**
 * 互动病例标签详情表
 * @export
 * @interface MetCaseTag
 */
export interface MetCaseTag {
    /**
     * 雪花Id
     * @type {number}
     * @memberof MetCaseTag
     */
    id?: number;
    /**
     * 病例ID
     * @type {number}
     * @memberof MetCaseTag
     */
    caseId?: number;
    /**
     * 标签ID
     * @type {number}
     * @memberof MetCaseTag
     */
    tagId?: number;
    /**
     * 
     * @type {MetTag}
     * @memberof MetCaseTag
     */
    tag?: MetTag;
}

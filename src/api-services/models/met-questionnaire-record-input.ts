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
import { AnswerInfo } from './answer-info';
/**
 * 
 * @export
 * @interface MetQuestionnaireRecordInput
 */
export interface MetQuestionnaireRecordInput {
    /**
     * 问卷Id
     * @type {number}
     * @memberof MetQuestionnaireRecordInput
     */
    questionnaireId?: number;
    /**
     * 答案集合
     * @type {Array<AnswerInfo>}
     * @memberof MetQuestionnaireRecordInput
     */
    answers?: Array<AnswerInfo> | null;
}

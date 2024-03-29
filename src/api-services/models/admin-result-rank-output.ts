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
import { RankOutput } from './rank-output';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultRankOutput
 */
export interface AdminResultRankOutput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultRankOutput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultRankOutput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultRankOutput
     */
    message?: string | null;
    /**
     * 
     * @type {RankOutput}
     * @memberof AdminResultRankOutput
     */
    result?: RankOutput;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultRankOutput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultRankOutput
     */
    time?: Date;
}

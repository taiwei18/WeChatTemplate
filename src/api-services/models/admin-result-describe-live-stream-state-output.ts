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
import { DescribeLiveStreamStateOutput } from './describe-live-stream-state-output';
/**
 * 全局返回结果
 * @export
 * @interface AdminResultDescribeLiveStreamStateOutput
 */
export interface AdminResultDescribeLiveStreamStateOutput {
    /**
     * 状态码
     * @type {number}
     * @memberof AdminResultDescribeLiveStreamStateOutput
     */
    code?: number;
    /**
     * 类型success、warning、error
     * @type {string}
     * @memberof AdminResultDescribeLiveStreamStateOutput
     */
    type?: string | null;
    /**
     * 错误信息
     * @type {string}
     * @memberof AdminResultDescribeLiveStreamStateOutput
     */
    message?: string | null;
    /**
     * 
     * @type {DescribeLiveStreamStateOutput}
     * @memberof AdminResultDescribeLiveStreamStateOutput
     */
    result?: DescribeLiveStreamStateOutput;
    /**
     * 附加数据
     * @type {any}
     * @memberof AdminResultDescribeLiveStreamStateOutput
     */
    extras?: any | null;
    /**
     * 时间
     * @type {Date}
     * @memberof AdminResultDescribeLiveStreamStateOutput
     */
    time?: Date;
}

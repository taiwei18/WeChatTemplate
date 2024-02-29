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
import { MetDoctor } from './met-doctor';
import { MetMeeting } from './met-meeting';
import { SysUser } from './sys-user';
/**
 * 会议观看记录表
 * @export
 * @interface MetMeetRecord
 */
export interface MetMeetRecord {
    /**
     * 雪花Id
     * @type {number}
     * @memberof MetMeetRecord
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof MetMeetRecord
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof MetMeetRecord
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof MetMeetRecord
     */
    createUserId?: number | null;
    /**
     * 创建者姓名
     * @type {string}
     * @memberof MetMeetRecord
     */
    createUserName?: string | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof MetMeetRecord
     */
    updateUserId?: number | null;
    /**
     * 修改者姓名
     * @type {string}
     * @memberof MetMeetRecord
     */
    updateUserName?: string | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof MetMeetRecord
     */
    isDelete?: boolean;
    /**
     * 用户ID
     * @type {number}
     * @memberof MetMeetRecord
     */
    userId?: number;
    /**
     * 
     * @type {SysUser}
     * @memberof MetMeetRecord
     */
    staff?: SysUser;
    /**
     * 
     * @type {MetDoctor}
     * @memberof MetMeetRecord
     */
    doctor?: MetDoctor;
    /**
     * 会议ID
     * @type {number}
     * @memberof MetMeetRecord
     */
    meetId?: number;
    /**
     * 
     * @type {MetMeeting}
     * @memberof MetMeetRecord
     */
    meeting?: MetMeeting;
    /**
     * 观看时长
     * @type {number}
     * @memberof MetMeetRecord
     */
    duration?: number;
    /**
     * 回看时长
     * @type {number}
     * @memberof MetMeetRecord
     */
    reviewDuration?: number;
    /**
     * 首次进入时间
     * @type {Date}
     * @memberof MetMeetRecord
     */
    joinTime?: Date;
}
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
import { UserIdentityEnum } from './user-identity-enum';
/**
 * 会议签到记录
 * @export
 * @interface MetMeetingSignInRecord
 */
export interface MetMeetingSignInRecord {
    /**
     * 雪花Id
     * @type {number}
     * @memberof MetMeetingSignInRecord
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof MetMeetingSignInRecord
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof MetMeetingSignInRecord
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof MetMeetingSignInRecord
     */
    createUserId?: number | null;
    /**
     * 创建者姓名
     * @type {string}
     * @memberof MetMeetingSignInRecord
     */
    createUserName?: string | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof MetMeetingSignInRecord
     */
    updateUserId?: number | null;
    /**
     * 修改者姓名
     * @type {string}
     * @memberof MetMeetingSignInRecord
     */
    updateUserName?: string | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof MetMeetingSignInRecord
     */
    isDelete?: boolean;
    /**
     * 用户ID
     * @type {number}
     * @memberof MetMeetingSignInRecord
     */
    userId?: number;
    /**
     * 
     * @type {UserIdentityEnum}
     * @memberof MetMeetingSignInRecord
     */
    userIdentity?: UserIdentityEnum;
    /**
     * 
     * @type {SysUser}
     * @memberof MetMeetingSignInRecord
     */
    staff?: SysUser;
    /**
     * 
     * @type {MetDoctor}
     * @memberof MetMeetingSignInRecord
     */
    doctor?: MetDoctor;
    /**
     * 会议ID
     * @type {number}
     * @memberof MetMeetingSignInRecord
     */
    meetingId?: number;
    /**
     * 
     * @type {MetMeeting}
     * @memberof MetMeetingSignInRecord
     */
    meetingInfo?: MetMeeting;
}

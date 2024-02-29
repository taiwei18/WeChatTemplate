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
import { MeetingTypeEnum } from './meeting-type-enum';
import { MetGroup } from './met-group';
import { MetMeetingGift } from './met-meeting-gift';
import { MetMeetingSignInRecord } from './met-meeting-sign-in-record';
import { MetPlayBack } from './met-play-back';
/**
 * 
 * @export
 * @interface MetAddMeetingInput
 */
export interface MetAddMeetingInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof MetAddMeetingInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof MetAddMeetingInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof MetAddMeetingInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof MetAddMeetingInput
     */
    createUserId?: number | null;
    /**
     * 创建者姓名
     * @type {string}
     * @memberof MetAddMeetingInput
     */
    createUserName?: string | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof MetAddMeetingInput
     */
    updateUserId?: number | null;
    /**
     * 修改者姓名
     * @type {string}
     * @memberof MetAddMeetingInput
     */
    updateUserName?: string | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof MetAddMeetingInput
     */
    isDelete?: boolean;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {string}
     * @memberof MetAddMeetingInput
     */
    mainImg?: string | null;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {string}
     * @memberof MetAddMeetingInput
     */
    poster?: string | null;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {number}
     * @memberof MetAddMeetingInput
     */
    visits?: number;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {Date}
     * @memberof MetAddMeetingInput
     */
    signStartTime?: Date | null;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {string}
     * @memberof MetAddMeetingInput
     */
    signUrl?: string | null;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {Date}
     * @memberof MetAddMeetingInput
     */
    signEndTime?: Date | null;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {string}
     * @memberof MetAddMeetingInput
     */
    streamName?: string | null;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {string}
     * @memberof MetAddMeetingInput
     */
    pullUrl?: string | null;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {string}
     * @memberof MetAddMeetingInput
     */
    notice?: string | null;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {boolean}
     * @memberof MetAddMeetingInput
     */
    isPlayBack?: boolean;
    /**
     * 回放详情
     * @type {Array<MetPlayBack>}
     * @memberof MetAddMeetingInput
     */
    metPlayBack?: Array<MetPlayBack> | null;
    /**
     * 
     * @type {MeetingTypeEnum}
     * @memberof MetAddMeetingInput
     */
    type?: MeetingTypeEnum;
    /**
     * 会议组别
     * @type {number}
     * @memberof MetAddMeetingInput
     */
    meetGroupId?: number;
    /**
     * 
     * @type {MetGroup}
     * @memberof MetAddMeetingInput
     */
    meetGroupInfo?: MetGroup;
    /**
     * 会议礼品
     * @type {Array<MetMeetingGift>}
     * @memberof MetAddMeetingInput
     */
    gifts?: Array<MetMeetingGift> | null;
    /**
     * 会议签到详情
     * @type {Array<MetMeetingSignInRecord>}
     * @memberof MetAddMeetingInput
     */
    signIns?: Array<MetMeetingSignInRecord> | null;
    /**
     * 会议介绍
     * @type {string}
     * @memberof MetAddMeetingInput
     */
    introduce?: string | null;
    /**
     * 会议标题
     * @type {string}
     * @memberof MetAddMeetingInput
     */
    name: string;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {Date}
     * @memberof MetAddMeetingInput
     */
    startTime: Date;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {Date}
     * @memberof MetAddMeetingInput
     */
    endTime: Date;
    /**
     * 礼品Id集合
     * @type {Array<number>}
     * @memberof MetAddMeetingInput
     */
    giftIdList?: Array<number> | null;
}
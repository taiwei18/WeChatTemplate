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
 * @interface MetUpdateMeetingInput
 */
export interface MetUpdateMeetingInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof MetUpdateMeetingInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof MetUpdateMeetingInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof MetUpdateMeetingInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof MetUpdateMeetingInput
     */
    createUserId?: number | null;
    /**
     * 创建者姓名
     * @type {string}
     * @memberof MetUpdateMeetingInput
     */
    createUserName?: string | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof MetUpdateMeetingInput
     */
    updateUserId?: number | null;
    /**
     * 修改者姓名
     * @type {string}
     * @memberof MetUpdateMeetingInput
     */
    updateUserName?: string | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof MetUpdateMeetingInput
     */
    isDelete?: boolean;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {string}
     * @memberof MetUpdateMeetingInput
     */
    mainImg?: string | null;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {string}
     * @memberof MetUpdateMeetingInput
     */
    poster?: string | null;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {number}
     * @memberof MetUpdateMeetingInput
     */
    visits?: number;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {Date}
     * @memberof MetUpdateMeetingInput
     */
    signStartTime?: Date | null;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {string}
     * @memberof MetUpdateMeetingInput
     */
    signUrl?: string | null;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {Date}
     * @memberof MetUpdateMeetingInput
     */
    signEndTime?: Date | null;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {string}
     * @memberof MetUpdateMeetingInput
     */
    streamName?: string | null;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {string}
     * @memberof MetUpdateMeetingInput
     */
    pullUrl?: string | null;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {string}
     * @memberof MetUpdateMeetingInput
     */
    notice?: string | null;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {boolean}
     * @memberof MetUpdateMeetingInput
     */
    isPlayBack?: boolean;
    /**
     * 回放详情
     * @type {Array<MetPlayBack>}
     * @memberof MetUpdateMeetingInput
     */
    metPlayBack?: Array<MetPlayBack> | null;
    /**
     * 
     * @type {MeetingTypeEnum}
     * @memberof MetUpdateMeetingInput
     */
    type?: MeetingTypeEnum;
    /**
     * 会议组别
     * @type {number}
     * @memberof MetUpdateMeetingInput
     */
    meetGroupId?: number;
    /**
     * 
     * @type {MetGroup}
     * @memberof MetUpdateMeetingInput
     */
    meetGroupInfo?: MetGroup;
    /**
     * 会议礼品
     * @type {Array<MetMeetingGift>}
     * @memberof MetUpdateMeetingInput
     */
    gifts?: Array<MetMeetingGift> | null;
    /**
     * 会议签到详情
     * @type {Array<MetMeetingSignInRecord>}
     * @memberof MetUpdateMeetingInput
     */
    signIns?: Array<MetMeetingSignInRecord> | null;
    /**
     * 会议介绍
     * @type {string}
     * @memberof MetUpdateMeetingInput
     */
    introduce?: string | null;
    /**
     * 会议标题
     * @type {string}
     * @memberof MetUpdateMeetingInput
     */
    name: string;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {Date}
     * @memberof MetUpdateMeetingInput
     */
    startTime: Date;
    /**
     * 描述 :    空值 : True  默认 :
     * @type {Date}
     * @memberof MetUpdateMeetingInput
     */
    endTime: Date;
    /**
     * 礼品Id集合
     * @type {Array<number>}
     * @memberof MetUpdateMeetingInput
     */
    giftIdList?: Array<number> | null;
}
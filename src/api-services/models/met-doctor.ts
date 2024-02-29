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
import { MetHospital } from './met-hospital';
import { SysWechatUser } from './sys-wechat-user';
/**
 * 医生信息表
 * @export
 * @interface MetDoctor
 */
export interface MetDoctor {
    /**
     * 雪花Id
     * @type {number}
     * @memberof MetDoctor
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof MetDoctor
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof MetDoctor
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof MetDoctor
     */
    createUserId?: number | null;
    /**
     * 创建者姓名
     * @type {string}
     * @memberof MetDoctor
     */
    createUserName?: string | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof MetDoctor
     */
    updateUserId?: number | null;
    /**
     * 修改者姓名
     * @type {string}
     * @memberof MetDoctor
     */
    updateUserName?: string | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof MetDoctor
     */
    isDelete?: boolean;
    /**
     * OpenId
     * @type {number}
     * @memberof MetDoctor
     */
    weChatUserId?: number | null;
    /**
     * 
     * @type {SysWechatUser}
     * @memberof MetDoctor
     */
    wechatUser?: SysWechatUser;
    /**
     * 描述 : 姓名   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    name?: string | null;
    /**
     * 描述 : 电话   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    phone?: string | null;
    /**
     * 描述 : 身份证号   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    idcard?: string | null;
    /**
     * 描述 : 医院ID   空值 : True  默认 :
     * @type {number}
     * @memberof MetDoctor
     */
    hospitalId?: number | null;
    /**
     * 
     * @type {MetHospital}
     * @memberof MetDoctor
     */
    hospital?: MetHospital;
    /**
     * 描述 : 职称   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    titles?: string | null;
    /**
     * 描述 : 科室   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    department?: string | null;
    /**
     * 描述 : 级别   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    rank?: string | null;
    /**
     * 描述 : 头像   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    headimg?: string | null;
    /**
     * 描述 : 简介   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    introduce?: string | null;
    /**
     * 描述 : 医师职业证（多张）   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    occupationimg?: string | null;
    /**
     * 描述 : 工作证明（多张）   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    jobimg?: string | null;
    /**
     * 描述 : 身份证正面   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    idcardzimg?: string | null;
    /**
     * 描述 : 身份证反面   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    idcardfimg?: string | null;
    /**
     * 描述 : 银行账号   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    bankaccount?: string | null;
    /**
     * 描述 : 银行卡照片   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    bankimg?: string | null;
    /**
     * 描述 : 开户行   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    openingbank?: string | null;
    /**
     * 描述 : 开户支行   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    openingbranch?: string | null;
    /**
     * 描述 : 开户省份   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    openingprovince?: string | null;
    /**
     * 描述 : 开户城市   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    openingcity?: string | null;
    /**
     * 描述 : 用户类型   空值 : True  默认 :
     * @type {string}
     * @memberof MetDoctor
     */
    type?: string | null;
    /**
     * 积分
     * @type {number}
     * @memberof MetDoctor
     */
    integral?: number;
}
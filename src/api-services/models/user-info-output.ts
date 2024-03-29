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
import { LoginOutput } from './login-output';
import { UserIdentityEnum } from './user-identity-enum';
/**
 * 
 * @export
 * @interface UserInfoOutput
 */
export interface UserInfoOutput {
    /**
     * 
     * @type {UserIdentityEnum}
     * @memberof UserInfoOutput
     */
    userIdentity?: UserIdentityEnum;
    /**
     * 描述 : 用户ID   空值 : True  默认 :
     * @type {number}
     * @memberof UserInfoOutput
     */
    id?: number;
    /**
     * 描述 : 姓名   空值 : True  默认 :
     * @type {string}
     * @memberof UserInfoOutput
     */
    name?: string | null;
    /**
     * 描述 : 头像   空值 : True  默认 :
     * @type {string}
     * @memberof UserInfoOutput
     */
    avatar?: string | null;
    /**
     * 直属机构
     * @type {string}
     * @memberof UserInfoOutput
     */
    userSysOrg?: string | null;
    /**
     * 医院信息
     * @type {string}
     * @memberof UserInfoOutput
     */
    userHospital?: string | null;
    /**
     * 描述 : 职称   空值 : True  默认 :
     * @type {string}
     * @memberof UserInfoOutput
     */
    titles?: string | null;
    /**
     * 描述 : 科室   空值 : True  默认 :
     * @type {string}
     * @memberof UserInfoOutput
     */
    department?: string | null;
    /**
     * 描述 : 积分   空值 : True  默认 :
     * @type {number}
     * @memberof UserInfoOutput
     */
    integral?: number;
    /**
     * 描述 : 邀请积分   空值 : True  默认 :
     * @type {number}
     * @memberof UserInfoOutput
     */
    inviteIntegral?: number;
    /**
     * 
     * @type {LoginOutput}
     * @memberof UserInfoOutput
     */
    loginToken?: LoginOutput;
}

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
/**
 * 科室清单表
 * @export
 * @interface MetDepartment
 */
export interface MetDepartment {
    /**
     * 雪花Id
     * @type {number}
     * @memberof MetDepartment
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof MetDepartment
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof MetDepartment
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof MetDepartment
     */
    createUserId?: number | null;
    /**
     * 创建者姓名
     * @type {string}
     * @memberof MetDepartment
     */
    createUserName?: string | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof MetDepartment
     */
    updateUserId?: number | null;
    /**
     * 修改者姓名
     * @type {string}
     * @memberof MetDepartment
     */
    updateUserName?: string | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof MetDepartment
     */
    isDelete?: boolean;
    /**
     * 描述 : 科室名称   空值 : True  默认 :
     * @type {string}
     * @memberof MetDepartment
     */
    name?: string | null;
}

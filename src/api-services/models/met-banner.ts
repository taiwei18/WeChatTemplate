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
import { MetBannerEnum } from './met-banner-enum';
/**
 * 轮播图片
 * @export
 * @interface MetBanner
 */
export interface MetBanner {
    /**
     * 雪花Id
     * @type {number}
     * @memberof MetBanner
     */
    id?: number;
    /**
     * 描述 : 图片地址   空值 : True  默认 :
     * @type {string}
     * @memberof MetBanner
     */
    imgUrl?: string | null;
    /**
     * 
     * @type {MetBannerEnum}
     * @memberof MetBanner
     */
    type?: MetBannerEnum;
    /**
     * 描述 : 点击后的地址   空值 : True  默认 :
     * @type {string}
     * @memberof MetBanner
     */
    link?: string | null;
    /**
     * 描述 : 备注   空值 : True  默认 :
     * @type {string}
     * @memberof MetBanner
     */
    remake?: string | null;
}

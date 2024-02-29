// 申明外部 npm 插件模块
declare module 'js-cookie';
declare module 'qs';

// 声明一个模块，防止引入文件时报错
declare module '*.json';
declare module '*.png';
declare module '*.jpg';
declare module '*.scss';
declare module '*.ts';
declare module '*.js';

// 声明文件，*.vue 后缀的文件交给 vue 模块来处理
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

//声明JWT
declare interface JWTModel {
    iss: string;
    aud: string;
    exp: number;
    nbf: number;
    iat: number;
    LoginMode: number;
    UserId: number;
    RealName: string;
    UserIdentity: number;
    WxUserId: number;
    UserRegPower: boolean;
    Subscribe: boolean;
}

//声明病例分享参数数据
declare interface CaseShareModel {
    UserId: number;
    UserIdentity: number;
    WxUserId: number;
    CaseId: number;
    TimesTamp: number;
}

// 声明文件，定义全局变量
/* eslint-disable */
declare interface Window {
    nextLoading: boolean;
    BMAP_SATELLITE_MAP: any;
    BMap: any;
    __env__: any;
}

// 声明路由当前项类型
declare type RouteItem<T = any> = {
    path: string;
    name?: string | symbol | undefined | null;
    redirect?: string;
    k?: T;
    meta?: {
        title?: string;
        isLink?: string;
        isHide?: boolean;
        isKeepAlive?: boolean;
        isAffix?: boolean;
        isIframe?: boolean;
        roles?: string[];
        icon?: string;
        isDynamic?: boolean;
        isDynamicPath?: string;
        isIframeOpen?: string;
        loading?: boolean;

    };
    children: T[];
    query?: { [key: string]: T };
    params?: { [key: string]: T };
    contextMenuClickId?: string | number;
    commonUrl?: string;
    isFnClick?: boolean;
    url?: string;
    transUrl?: string;
    title?: string;
    id?: string | number;
};

// 声明路由 to from
declare interface RouteToFrom<T = any> extends RouteItem {
    path?: string;
    children?: T[];
}

// 声明路由当前项类型集合
declare type RouteItems<T extends RouteItem = any> = T[];

// 声明 ref
declare type RefType<T = any> = T | null;

// 声明 HTMLElement
declare type HtmlType = HTMLElement | string | undefined | null;

// 申明 children 可选
declare type ChilType<T = any> = {
    children?: T[];
};

// 申明 数组
declare type EmptyArrayType<T = any> = T[];

// 申明 对象
declare type EmptyObjectType<T = any> = {
    [key: string]: T;
};

// 申明 select option
declare type SelectOptionType = {
    value: string | number;
    label: string | number;
};

// 鼠标滚轮滚动类型
declare interface WheelEventType extends WheelEvent {
    wheelDelta: number;
}

// table 数据格式公共类型
declare interface TableType<T = any> {
    total: number;
    loading: boolean;
    param: {
        pageNum: number;
        pageSize: number;
        [key: string]: T;
    };
}
// 文章接口 返回格式
declare interface ArticleType {
    articleGroupId: number;
    contentText: string;
    createTime: string;
    createUserId: number;
    createUserName: string;
    id: number;
    introduction: string | null;
    isDelete: boolean;
    isOnline: boolean;
    isSuggest: boolean;
    mainImgUrl: string;
    meetGroupInfo: string | null;
    name: string;
    orderNo: number;
    product: {
        createTime: string;
        createUserId: number;
        createUserName: string;
        icon: string;
        id: number;
        isDelete: boolean;
        name: string;
        updateTime: string;
        updateUserId: number;
        updateUserName: string;
    }
    productId: number;
    type: number;
    updateTime: string;
    updateUserId: number;
    updateUserName: string;
    visits: number;
}
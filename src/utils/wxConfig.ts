import wx from 'weixin-js-sdk';
import {getAPI} from '@/utils/axios-utils';
import {MetAuthApi} from '@/api-services';

const wxJsSdkConfig = async (resolve: any, reject: any) => {
    let url = window.location.href;
    //请求接口
    const res = await getAPI(MetAuthApi).apiMetAuthWxJssdkPost({url: url});
    console.log('res', res);
    //判断是否成功
    if (res.data.code == 200) {
        const resdata = res.data.result;
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: resdata.appId, // 必填，企业微信的corpID
            timestamp: resdata.timestamp, // 必填，生成签名的时间戳
            nonceStr: resdata.nonceStr, // 必填，生成签名的随机串
            signature: resdata.signature, // 必填，签名，见 附录-JS-SDK使用权限签名算法
            jsApiList: [
                "onMenuShareTimeline",
                "onMenuShareAppMessage",
                "onMenuShareQQ",
                "onMenuShareWeibo",
                "onMenuShareQZone",
                "updateAppMessageShareData",
                "updateTimelineShareData",
                "startRecord",
                "stopRecord",
                "onVoiceRecordEnd",
                "playVoice",
                "pauseVoice",
                "stopVoice",
                "onVoicePlayEnd",
                "uploadVoice",
                "downloadVoice",
                "chooseImage",
                "previewImage",
                "uploadImage",
                "downloadImage",
                "translateVoice",
                "getNetworkType",
                "openLocation",
                "getLocation",
                "hideOptionMenu",
                "showOptionMenu",
                "hideMenuItems",
                "showMenuItems",
                "hideAllNonBaseMenuItem",
                "showAllNonBaseMenuItem",
                "closeWindow",
                "scanQRCode",
                "chooseWXPay",
                "openProductSpecificView",
                "addCard",
                "chooseCard",
                "openCard"
            ],
            openTagList: [],
        });
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        wx.ready(() => {
            // 微信SDK准备就绪后执行的回调。
            wx.hideAllNonBaseMenuItem();
            resolve && resolve(wx);
        });
        wx.error(function (res) {
            console.info('error', res);
            reject && reject(res);
        });
    } else {
        console.log('微信配置错误！');
    }
};
export {wxJsSdkConfig};

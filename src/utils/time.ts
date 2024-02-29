import {Local} from "@/utils/storage";
import {getAPI} from "@/utils/axios-utils";
import {MetMeetRecordApi, SetUserMetMeetRecordInput} from "@/api-services";

let maxCount: number = 60;//标识记录时间的时间段
let interval: any = null;//时间循环器
let recordData = {} as SetUserMetMeetRecordInput;
//记录直播的时间
export const RecorderLiveTime = {
    //设置会议关键值和服务器时间
    initTime(meetId: number) {
        return new Promise(async (reject) => {
            recordData = {
                meetId: meetId,
                duration: 0,
            }
            const res = await getAPI(MetMeetRecordApi).apiMetMeetRecordSetStartPost(recordData);
            const datas = res.data.result ?? {};
            //key 一般为会议的ID
            Local.set("live_Key", datas.meetId);
            Local.set(`live_serverTime_${datas.meetId}`, datas.duration);
            reject(datas);
        });
    },
    startTime() {
        //初始化直播时间器
        return new Promise((resolve, reject) => {
            console.log("开始计时")
            if (interval != null) clearInterval(interval);
            //判断是否存在会议关键key
            const liveKey = Local.get("live_Key") ?? "";
            if (liveKey == "") {
                reject("未设置会议关键值!")
            } else {
                //console.log("开始")
                //记录开始记录时间的时间搓（为了解决请求的时间差值）
                let firstTime = parseInt(String(new Date().getTime() / 1000));
                //获取当前记录的时间（小于maxCount）
                let countTime = Local.get(`live_count_${liveKey}`) ?? 0;
                //获取当前记录时间的时间段
                let thisMaxCount: number = maxCount - parseInt(countTime);
                //开始循环
                interval = setInterval(async function () {
                    thisMaxCount--;
                    const thiscountTime = maxCount - thisMaxCount;
                    Local.set(`live_count_${liveKey}`, thiscountTime);
                    //console.log(`剩余上报时间:${thisMaxCount}缓存时间${thiscountTime}历史缓存时间${countTime}`)
                    if (thisMaxCount <= 0) {
                        //上报时间
                        //将剩余上报时间改为系统最大值
                        thisMaxCount = maxCount;
                        //现在的搓
                        const nowTime = parseInt(String(new Date().getTime() / 1000));
                        //获取错误上报的时间
                        const errorTime = Local.get(`live_errorTime_${liveKey}`) ?? 0;
                        //console.log("错误上报时间", errorTime);
                        const serverTime = Local.get(`live_serverTime_${liveKey}`) ?? 0;
                        //console.log("服务器时间", serverTime);
                        const upTime = (nowTime - firstTime) + countTime + serverTime + errorTime;
                        //console.log("上报成功", upTime);

                        recordData = {
                            meetId: liveKey,
                            duration: upTime,
                        }
                        //开始记录
                        const res = await getAPI(MetMeetRecordApi).apiMetMeetRecordSetPost(recordData);
                        switch (res.data.code) {
                            case 90001:
                            case 90002:
                            case 90003:
                                //console.log(res.data.message);
                                break;
                            case 90004:
                                //记录服务器时间
                                Local.set(`live_serverTime_${liveKey}`, parseInt(res.data.extras.duration));
                                Local.set(`live_errorTime_${liveKey}`, 0);
                                break;
                            case 200:
                                Local.set(`live_serverTime_${liveKey}`, parseInt(upTime));
                                Local.set(`live_errorTime_${liveKey}`, 0);
                                break;
                            default:
                                Local.set(`live_errorTime_${liveKey}`, (upTime - serverTime));
                                //将第一次请求的时间改为当前时间
                                break;
                        }
                        //将第一次请求的时间改为当前时间
                        firstTime = nowTime;
                        //重置当前缓存时间
                        Local.set(`live_count_${liveKey}`, 0);
                        countTime = 0;
                    }
                }, 1000);
            }
            //resolve("开始记录时间");
        });
    },
    reviewTime() {
        //回放时间
        return new Promise((resolve, reject) => {
            console.log("开始计时")
            if (interval != null) clearInterval(interval);
            interval = setInterval(async function () {
                //判断是否存在会议关键key
                const liveKey = Local.get("live_Key") ?? "";
                if (liveKey == "") {
                    reject("未设置会议关键值!")
                } else {
                    recordData = {
                        meetId: liveKey,
                        duration: maxCount,
                    }
                    //开始记录
                    await getAPI(MetMeetRecordApi).apiMetMeetRecordSetReviewPost(recordData);
                }
            }, maxCount * 1000);
        });
    },
    stopTime() {
        //手动停止记录时间
        if (interval != null) clearInterval(interval);
    }
};

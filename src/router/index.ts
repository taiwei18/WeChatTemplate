import {Local} from '@/utils/storage';
import {UserIdentityEnum} from '@/api-services';
import HomeView from '@/views/Home/indexView.vue';
import {decryptJWT, getJWTDate} from '@/utils/axios-utils';
import {closeToast, showDialog, showLoadingToast} from 'vant';
import {createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {
                keepAlive: false,
                public: true,
                nav: false,
                first: true, //判断是否为1级页面
                title: '首页',
            },
            component: HomeView,
        },
        // {
            // path: '/register/:power',
            // name: 'register',
            // meta: {
            //     keepAlive: false,//缓存页面
            //     public: false, //是否需要微信授权登录
            //     nav: false,//Nav开关
            //     title: '注册页面',//标题
            //     background: '#b00e00',//Nav背景色
            //     first: true, //判断是否为1级页面
            //     identity: 'doctor,staff', //可以访问页面的身份
            //     power: 0, //可以访问页面的身份的注册等级 1强注册  2 弱注册 0不注册
            // },
            // component: () => import('@/views/RegisterView.vue'),
        // },
    ],
});

//页面跳转到授权地址
const replaceAuthUrl = (path: string) => {
    //getAPI(MetAuthApi).metauthRedirectwxGet("").then(r => {})
    const redirecturl = window.__env__['VITE_API_URL'] + window.__env__['VITE_PUBLIC_PATH'] + window.__env__['VITE_LOGIN_URL'];
    const replaceurl = window.__env__['VITE_API_URL'] + window.__env__['VITE_WEIXIN_URL'] + encodeURIComponent(redirecturl);
    window.localStorage.clear();

    Local.set('redirect_uri', path);
    window.location.replace(replaceurl);
};

router.beforeEach(async (to, from, next) => {
    console.log('to', to);
    if (to.meta.public) {
        next();
        return;
    }
    showLoadingToast({
        message: '加载页面中...',
        forbidClick: true,
        overlay: true,
    });
    document.title = window.__env__['VITE_APP_TITLE'] as string;
    if (to.meta.first) document.title = (to.meta.title as string) || (window.__env__['VITE_APP_TITLE'] as string);
    //判断token是否有效
    const accessToken = Local.get('access-token');
    if (accessToken) {
        //判断是否有效
        const jwt = decryptJWT(accessToken);
        console.log('jwt', jwt);
        const exp = getJWTDate(jwt.exp);
        if (new Date() >= exp) {
            // 获取刷新 token
            console.log('过期');
            replaceAuthUrl(to.fullPath);
        } else {
            console.log('没过期');
            //判断是否去注册
            //周三大讲堂员工绑定
            //个人中心员工绑定和医生注册
            //获取注册强度
            const pageidentity: any = to.meta.identity;
            const pagepower: any = to.meta.power;
            console.log('UserIdentity', jwt.UserIdentity);
            console.log('pageidentity', pageidentity);
            console.log('pagepower', pagepower); //1强注册  2 弱注册 0不注册

            switch (jwt.UserIdentity) {
                case UserIdentityEnum.NUMBER_1: //员工
                    if (pageidentity.indexOf('staff') != -1) {
                        next();
                    } else {
                        //提示无权限
                        await showDialog({
                            title: '提示',
                            message: '您没有权限访问该页面',
                        }).then(() => {
                            WeixinJSBridge.call('closeWindow');
                        });
                        next(false);
                    }
                    break;
                case UserIdentityEnum.NUMBER_2: //医生
                    if (pageidentity.indexOf('doctor') != -1) {
                        //判断是否强注册
                        if (pagepower == 1 && !jwt.UserRegPower) {
                            //去强注册
                            Local.set('redirect_uri', to.fullPath);
                            next(`/register/${pagepower}`);
                        } else {
                            next();
                        }
                    } else {
                        //提示无权限
                        await showDialog({
                            title: '提示',
                            message: '您没有权限访问该页面',
                        }).then(() => {
                            WeixinJSBridge.call('closeWindow');
                        });
                        next(false);
                    }
                    break;
                case UserIdentityEnum.NUMBER_0: //其他
                    //其他没有注册的
                    if (pagepower == 0) {
                        next();
                    } else {
                        //需要注册
                        Local.set('redirect_uri', to.fullPath);
                        next(`/register/${pagepower}`);
                    }
                    break;
            }
        }
    } else {
        console.log('没有token');
        replaceAuthUrl(to.fullPath);
    }
    closeToast();
});
// 路由加载后
router.afterEach((to, from, failure) => {
    console.log('to', to);
    console.log('from', from);
    //设置标题
    //获取本地存储的路由地址
    let routes_path_list = Local.get('routes_path_list') || [];
    //如果没有头并且是第一级页面，清空存储的页面
    if (!to.meta.nav && to.meta.first) {
        routes_path_list = [];
        Local.remove('physicianParams');
        Local.remove('institutionParams');
    }
    //如果回到首页，清空存储的页面
    if (routes_path_list.indexOf(to.fullPath) === -1) {
        //不存在添加到数组中
        routes_path_list.push(to.fullPath);
    }
    // 返回需要使用的路由地址存储到本地
    Local.set('routes_path_list', routes_path_list);
    console.log('路由地址', routes_path_list);
    //设置当前路由地址
    Local.set('routes_path', to.fullPath);

    //如果是登录页面清空
    if (to.name == 'login') {
        Local.remove('physicianParams');
        Local.remove('institutionParams');
    }
});
export default router;

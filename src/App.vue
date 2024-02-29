<script setup lang="ts">
import {RouterView, useRouter} from 'vue-router';
import {Local} from '@/utils/storage';

// 手机端控制台
// import { getCurrentInstance } from 'vue/dist/vue';
// import VConsole from 'vconsole';
// new VConsole({theme: "light"});
const router = useRouter();
const onClickLeft = () => {
  const routes_path_list = Local.get('routes_path_list') || [];
  console.log('routes_path_list', routes_path_list);
  const routes_path = Local.get('routes_path');
  //判断routes_path在routes_path_list中的位置
  const index = routes_path_list.indexOf(routes_path);
  //移除index位置及后面的所有元素
  routes_path_list.splice(index, routes_path_list.length - index);
  //将routes_path_list存入localStorage
  Local.set('routes_path_list', routes_path_list);
  router.replace(index > 0 ? routes_path_list[index - 1] : '/');
};
const onClickRight = () => {
  const routes_path = Local.get('routes_path_list');
  router.replace(routes_path[0] ? routes_path[0] : '/');
};
</script>
<template>
  <div v-if="$route.meta.nav" class="van-nav-bar van-hairline--bottom thisnav" :style="'background-color: ' + $route.meta.background + ' !important;'">
    <div class="van-nav-bar__content">
      <div class="van-nav-bar__left van-haptics-feedback" @click="onClickLeft">
        <i class="van-badge__wrapper van-icon van-icon-arrow-left van-nav-bar__arrow" :style="'color: '+$route.meta.fontcolor"></i>
        <span class="van-nav-bar__text" :style="'color: '+$route.meta.fontcolor">返回</span>
      </div>
      <div class="van-nav-bar__title van-ellipsis" :style="'color: '+$route.meta.fontcolor">{{ $route.meta.title }}</div>
      <div class="van-nav-bar__right van-haptics-feedback" @click="onClickRight">
        <i class="van-badge__wrapper van-icon van-icon-wap-home" :style="'font-size: 25px;color: '+$route.meta.fontcolor"></i>
      </div>
    </div>
  </div>
  <RouterView v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.meta.title" v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <component :is="Component" :key="$route.meta.title" v-if="!$route.meta.keepAlive"/>
  </RouterView>
</template>
<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #efefef;
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
  -moz-text-size-adjust: 100% !important;
}

.gohome {
  width: 26px;
}

.van-nav-bar .van-icon {
  color: #ffffff;
}

.van-nav-bar__text {
  color: #ffffff;
}

.van-nav-bar__title {
  color: #ffffff;
}

/*完全居中*/
.vt_fullycenter {
  display: flex;
  align-items: center;
  justify-content: center;
}

/*垂直居中*/
.vt_aligncenter {
  display: flex;
  align-items: center;
}

.vt_justifycenter {
  display: flex;
  justify-content: center;
}

.grid_fullycenter {
  display: grid;
  align-content: center;
  justify-items: center;
}

[class*='van-hairline']::after {
  border: 0;
}
</style>

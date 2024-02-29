<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Local, Session } from '@/utils/storage';

const router = useRouter();

//判断当前是线上环境还是开发环境
const isDev = process.env.NODE_ENV === 'development';


const handleRemove = () => {
  Local.clear();
  Session.clear();
};
</script>

<template>
  <main class="mt-4 grid place-content-center gap-4">
    <van-button type="primary" @click="handleRemove">清除缓存</van-button>
    <template v-if="isDev">
      <!-- 开发环境 -->
    </template>
  </main>
</template>

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/css/icon.css';
import '@/assets/css/main.css';
import 'tailwindcss/tailwind.css';
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import 'vant/es/notify/style';
import 'vant/es/image-preview/style';
import 'vant/es/nav-bar/style';

import { wxJsSdkConfig } from '@/utils/wxConfig';

const app = createApp(App);
app.use(router);
app.config.globalProperties.$wxConfig = wxJsSdkConfig;
app.mount('#app');
console.log('createApp', app);

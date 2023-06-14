/*
 * @Author: gaozhanfei gaozhanfei@jryghq.com
 * @Date: 2023-03-20 15:48:19
 * @LastEditors: gaozhanfei gaozhanfei@jryghq.com
 * @LastEditTime: 2023-06-07 12:25:45
 * @FilePath: /miniprogram-pinxuan-vue3/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSSRApp } from "vue"
import to from 'await-to-js';

import { createPinia } from "pinia"
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App)
  // 使用config.globalProperties将to方法挂在到vue原型上
  // 页面使用 ： import { getCurrentInstance } from 'vue'
  // setup中  : const { proxy } = getCurrentInstance();  proxy.$to()
  // app.config.globalProperties.$to = to
  app.provide('$to', to)
  app.use(createPinia())
  return {
    app,
  };
}

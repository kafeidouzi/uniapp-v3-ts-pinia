/*
 * @Author: gaozhanfei gaozhanfei@jryghq.com
 * @Date: 2023-06-05 20:30:50
 * @LastEditors: gaozhanfei gaozhanfei@jryghq.com
 * @LastEditTime: 2023-06-05 20:32:23
 * @FilePath: /miniprogram-pinxuan-vue3/src/store/moudles/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'

const useUserStore = defineStore('globalUser', {
  // arrow function recommended for full type inference
  state: () => ({
    // all these properties will have their type inferred automatically
    count: 0
  }),
  getters: {
    isEven: (state) => state.count % 2 === 0
  },
  actions: {
    synIncrease() {
      this.count += 1
    },
    async asyncIncrease() {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      this.count += 1
    }
  }
})

export default useUserStore
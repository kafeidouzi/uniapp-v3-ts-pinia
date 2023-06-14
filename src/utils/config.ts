/*
 * @Author: gaozhanfei gaozhanfei@jryghq.com
 * @Date: 2023-06-07 15:27:55
 * @LastEditors: gaozhanfei gaozhanfei@jryghq.com
 * @LastEditTime: 2023-06-07 15:29:07
 * @FilePath: /uniapp-v3-ts-pinia/src/utils/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const config ={
  // #ifdef MP-WEIXIN
  request_useragent_pre: 'wechatapp',
  // #endif
  // #ifdef MP-ALIPAY
  // eslint-disable-next-line no-dupe-keys
  request_useragent_pre: 'alipayapp',
  // #endif
}
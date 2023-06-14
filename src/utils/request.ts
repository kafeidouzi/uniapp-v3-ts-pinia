/*
 * @Author: gaozhanfei gaozhanfei@jryghq.com
 * @Date: 2023-06-07 11:27:37
 * @LastEditors: gaozhanfei gaozhanfei@jryghq.com
 * @LastEditTime: 2023-06-07 17:02:39
 * @FilePath: /uniapp-v3-ts-pinia/src/utils/request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import to from 'await-to-js'

type IMethods = 'GET' | 'POST'

interface IParams {
  [key: string]: any
  nonce: number
}
interface IResponseCommonData {
  code: number
  data: any
  message: string
}
type IError =  Error | null
type IResponse = IResponseCommonData | IError


export const Http = async(
    method:IMethods, 
    url: string,
    header: any,
    data?: IParams,
  ): Promise<IResponseCommonData> => {
    const [err, res] = await to (uni.request({
      method,
      url,
      header,
      data,
      // #ifdef MP-ALIPAY
      enableCookie: true,
      // #endif
    }))
    
    return res?.data as IResponseCommonData
  }
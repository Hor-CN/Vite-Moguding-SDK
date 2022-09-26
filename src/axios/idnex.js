
import { baseUrl, deviceType } from '../config/index.js'
import axios from 'axios';


/** 
 * @author hor
 * @version 1.0
 * @description 登录手机: Android Huawei Mate 40 pro IOS: iphone 12 pro
 * @time 2022-9-25
 */
function myAxios(axiosConfig,loginType) {
  let UA = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; NOH-AL00 Build/HUAWEINOH-AL00) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1"
  if(loginType == deviceType.IOS){
    UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4"
  }
  const service = axios.create({
    baseURL: baseUrl, // 设置统一的请求前缀
    headers: { // 统一的headers
        "User-Agent":UA,
        "Content-Type": "application/json; charset=UTF-8",
      },
  });

  return service(axiosConfig)
}

export default myAxios;

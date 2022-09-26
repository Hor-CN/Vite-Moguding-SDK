import myAxios from "../axios/idnex.js";
import {
  loginUrl,
  deviceType,
  logoutUrl,
  getPlanByStuUrl,
} from "../config/index.js";
import { aesHex, planSign } from "../utils/index.js";

/**
 * @author hor
 * @version 1.0
 * @description 工学云登录
 * @time 2022-9-25
 * @param {string} phone 手机号
 * @param {string} password 密码
 * @param loginType 登录设备默认‘Android’
 */
export function login(phone, password, loginType = deviceType.ADNROID) {
  return myAxios(
    {
      url: loginUrl,
      method: "post",
      data: {
        password: aesHex(password),
        t: aesHex(Date.now().toString()),
        phone: aesHex(phone),
        loginType: loginType,
        uuid: "",
      },
    },
    loginType
  );
}

/**
 * @author hor
 * @version 1.0
 * @description 工学云退出登录
 * @time 2022-9-25
 * @param {string} token 登录成功时返回的Token
 * @param {string} role 身份：默认‘student’
 * @param loginType 登录设备默认‘Android’
 */
export function logout(
  token,
  role = "student",
  loginType = deviceType.ADNROID
) {
  return myAxios(
    {
      url: logoutUrl,
      method: "post",
      headers: {
        Authorization: token,
        roleKey: role,
      },
    },
    loginType
  );
}


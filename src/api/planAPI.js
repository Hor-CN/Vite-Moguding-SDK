import myAxios from "../axios/idnex.js";
import { deviceType, getPlanByStuUrl, planInfoUrl } from "../config/index.js";
import { planSign } from "../utils/index.js";

/**
 * @author hor
 * @version 1.0
 * @description 获取实习计划
 * @time 2022-9-25
 * @param {string} id 登录成功时返回的用户ID
 * @param {string} token 登录成功时返回的Token
 * @param {string} role 身份：默认‘student’
 * @param loginType 登录设备默认‘Android’
 */
export function planByStu(
  token,
  id,
  role = "student",
  loginType = deviceType.ADNROID
) {
  return myAxios(
    {
      url: getPlanByStuUrl,
      method: "post",
      headers: {
        Authorization: token,
        roleKey: role,
        sign: planSign(id, role),
      },
      data: {
        state: "",
      },
    },
    loginType
  );
}

/**
 * @author hor
 * @version 1.0
 * @description 获取实习内容
 * @time 2022-9-25
 * @param {string} planid 获取实习计划时返回的计划ID
 * @param {string} token 登录成功时返回的Token
 * @param {string} role 身份：默认‘student’
 * @param loginType 登录设备默认‘Android’
 */
export function planInfo(
  planid,
  token,
  role = "student",
  loginType = deviceType.ADNROID
) {
  return myAxios(
    {
      url: planInfoUrl,
      method: "post",
      headers: {
        Authorization: token,
        roleKey: role,
      },
      data:{
        planId: planid
      }
    },
    loginType
  );
}

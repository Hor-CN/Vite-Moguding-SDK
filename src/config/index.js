/**  
* baseUrl
*/
export const baseUrl = "https://api.moguding.net:9000";
/**  
* 登录
*/
export const loginUrl = "/session/user/v3/login";
/**  
* 退出登录
*/
export const logoutUrl = "/usercenter/user/v1/logout";
/**  
* 获取实习计划
*/
export const getPlanByStuUrl = "/practice/plan/v3/getPlanByStu";
/**
 * 获取实习内容
 */
export const planInfoUrl = "/practice/plan/v2/info"
/**
 * 签到
 */
export const clockSaveUrl = "/attendence/clock/v2/save"

export const key = "23DbtQHR2UMbH6mJ"
export const salt = "3478cbbc33f84bd00d75d7dfa69e0daa"

/**
 * 设备类型：android or ios
 */
export var deviceType = {
  ADNROID: "android",
  IOS: "ios",
};

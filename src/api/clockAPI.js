import myAxios from "../axios/idnex.js";
import { clockSaveUrl } from "../config/index.js";
import { saveSign } from "../utils/index.js";

/**
 * @author hor
 * @version 1.0
 * @description 签到
 * @time 2022-9-26
 * @param {string} userId 用户ID
 * @param {string} token 登录成功时返回的Token
 * @param {string} role 身份：默认‘student’
 * @param {string} planid 实习计划ID
 * @param {string} country 所在国家(默认:中国)
 * @param {string} province 所在省份
 * @param {string} city 所在城市(直辖市的同学传 null 就行)
 * @param {string} address 签到的地址
 * @param {string} longitude 经度
 * @param {string} latitude 纬度
 * @param {string} description 打卡备注
 * @param {string} type 打卡类型(START 上班 / END 下班)
 * @param device 登录设备(Android or Ios)默认‘Android’
 */
export function punchTheClock(
  userId,
  token,
  role = "student",
  planid,
  country = "中国",
  province,
  city,
  address,
  longitude,
  latitude,
  description,
  type,
  device = "Android"
) {
  return myAxios(
    {
      url: clockSaveUrl,
      method: "post",
      headers: {
        Authorization: token,
        roleKey: role,
        sign: saveSign(device, type, planid, userId, address),
      },
      data: {
        country: country,
        address: address,
        province: province,
        // t: "",
        city: city,
        latitude: latitude,
        description: description,
        planId: planid,
        type: type,
        device: device,
        longitude: longitude,
      },
    },
    device
  );
}

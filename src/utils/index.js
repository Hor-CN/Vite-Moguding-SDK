import crypto from "crypto"
import { key, salt } from "../config/index.js";


function aesHex(str) {
  const aes = crypto.createCipheriv("aes-128-ecb", key, "");
  aes.update(str);
  const output = aes.final("hex");
  return output
}

function planSign(id,type) {
  const md5 = crypto.createHash('md5')
  md5.update(id + type +salt)
  return md5.digest('hex')
}

function saveSign(device,type,planId,userId,address) {
  const md5 = crypto.createHash('md5')
  md5.update(device + type + planId + userId + address + salt)
  return md5.digest('hex')
}

export {
  aesHex,
  planSign,
  saveSign
}

/***
 * aes Base64 方式加密解密
 */
import CryptoJS from 'crypto-js/crypto-js' //引用AES源码js
//默认key、iv
const KEY = CryptoJS.enc.Utf8.parse("D,6nFr.xK!9IoPw8");//十六位十六进制数作为密钥
const IV = CryptoJS.enc.Utf8.parse('D,6nFr.xK!9IoPw8');
/**
 * aes加密
 * @param word
 * @param keyStr
 * @param ivStr
 * @returns {*|string}
 * @constructor
 */
var aes = {
    Encrypt(word, keyStr, ivStr) {
        let key = KEY
        let iv = IV

        if (keyStr) {
            key = CryptoJS.enc.Utf8.parse(keyStr);
            iv = CryptoJS.enc.Utf8.parse(ivStr);
        }

        let srcs = CryptoJS.enc.Utf8.parse(word);
        var encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding
        });
        // console.log("-=-=-=-", encrypted.ciphertext)
        return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);

    },

    /**
     * AES 解密 ：字符串 key iv  返回base64
     *
     */
    Decrypt(word, keyStr, ivStr) {
        let key = KEY
        let iv = IV

        if (keyStr) {
            key = CryptoJS.enc.Utf8.parse(keyStr);
            iv = CryptoJS.enc.Utf8.parse(ivStr);
        }

        let base64 = CryptoJS.enc.Base64.parse(word);
        let src = CryptoJS.enc.Base64.stringify(base64);

        var decrypt = CryptoJS.AES.decrypt(src, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding
        });

        var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
        return decryptedStr.toString();
    }
}
export default aes;

/*java 加密 解密文件*/
/*package com.platform.util;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;

/!***
 * Aes Base64 加密和解密
 * @author Zyh
 *
 *!/
public class Aes {

    //密钥 (需要前端和后端保持一致)
    private static final String KEY = "FFff123456.!-12ss";
    private static final String IV = "FFff123456.!-12ss";

    /!**
     * 加密方法
     * @param data  要加密的数据
     * @param key 加密key
     * @param iv 加密iv
     * @return 加密的结果
     * @throws Exception
     *!/
    public static String encrypt(String data, String key, String iv) throws Exception {
    try {

    Cipher cipher = Cipher.getInstance("AES/CBC/NoPadding");
    int blockSize = cipher.getBlockSize();
    byte[] dataBytes = data.getBytes();
    int plaintextLength = dataBytes.length;
    if (plaintextLength % blockSize != 0) {
    plaintextLength = plaintextLength + (blockSize - (plaintextLength % blockSize));
}
byte[] plaintext = new byte[plaintextLength];
System.arraycopy(dataBytes, 0, plaintext, 0, dataBytes.length);
SecretKeySpec keyspec = new SecretKeySpec(key.getBytes(), "AES");
IvParameterSpec ivspec = new IvParameterSpec(iv.getBytes());
cipher.init(Cipher.ENCRYPT_MODE, keyspec, ivspec);
byte[] encrypted = cipher.doFinal(plaintext);
return new Base64().encodeToString(encrypted);

} catch (Exception e) {
    e.printStackTrace();
    return null;
}
}

/!**
 * 解密方法
 * @param data 要解密的数据
 * @param key  解密key
 * @param iv 解密iv
 * @return 解密的结果
 * @throws Exception
 *!/
public static String desEncrypt(String data, String key, String iv) throws Exception {
    try {
        byte[] encrypted1 = new Base64().decode(data);
        Cipher cipher = Cipher.getInstance("AES/CBC/NoPadding");
        SecretKeySpec keyspec = new SecretKeySpec(key.getBytes(), "AES");
        IvParameterSpec ivspec = new IvParameterSpec(iv.getBytes());
        cipher.init(Cipher.DECRYPT_MODE, keyspec, ivspec);
        byte[] original = cipher.doFinal(encrypted1);
        String originalString = new String(original);
        return originalString;
    } catch (Exception e) {
        e.printStackTrace();
        return null;
    }
}

/!**
 * 使用默认的key和iv加密
 * @param data
 * @return
 * @throws Exception
 *!/
public static String encrypt(String data) throws Exception {
    return encrypt(data, KEY, IV);
}

/!**
 * 使用默认的key和iv解密
 * @param data
 * @return
 * @throws Exception
 *!/
public static String desEncrypt(String data) throws Exception {
    return desEncrypt(data, KEY, IV);
}

}*/

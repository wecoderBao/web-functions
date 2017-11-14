package com.bao.aes;

import java.security.SecureRandom;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

public class Aes128 {

	/**
	 * 加密
	 * @param content
	 * @return
	 */
	public static String encrypt(String content) {
		try {
			Cipher cipher = Cipher.getInstance("AES");
			byte[] byteContent = content.getBytes("utf-8");
			cipher.init(Cipher.ENCRYPT_MODE, genKey());
			byte[] result = cipher.doFinal(byteContent);
			return parseByte2HexStr(result);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	/**
	 * 解密
	 * @param content
	 * @return
	 */
	public static String decrypt(String content) {
		try {
			byte[] decryptFrom = parseHexStr2Byte(content);
			Cipher cipher = Cipher.getInstance("AES");
			cipher.init(Cipher.DECRYPT_MODE, genKey());
			byte[] result = cipher.doFinal(decryptFrom);
			return new String(result,"utf-8");
		}catch(Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	/**
	 * 根据秘钥获得 SecretKeySpec
	 * @return
	 */
	private static SecretKeySpec genKey() {
		String strKey = "veir_123";//加密、解密秘钥
		byte[] enCodeFormat= {0};
		try {
			KeyGenerator kgen = KeyGenerator.getInstance("AES");
			SecureRandom secureRandom = SecureRandom.getInstance("SHA1PRNG");
			secureRandom.setSeed(strKey.getBytes());
			kgen.init(128,secureRandom);
			SecretKey secretKey = kgen.generateKey();
			enCodeFormat = secretKey.getEncoded();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return new SecretKeySpec(enCodeFormat,"AES");
	}
	/** 
     * 将二进制转换成16进制 
     *  
     * @param buf 
     * @return 
     */  
    private static String parseByte2HexStr(byte buf[]) {  
        StringBuffer sb = new StringBuffer();  
        for (int i = 0; i < buf.length; i++) {  
            String hex = Integer.toHexString(buf[i] & 0xFF);  
            if (hex.length() == 1) {  
                hex = '0' + hex;  
            }  
            sb.append(hex.toUpperCase());  
        }  
        return sb.toString();  
    }  
  
    /** 
     * 将16进制转换为二进制 
     *  
     * @param hexStr 
     * @return 
     */  
    private static byte[] parseHexStr2Byte(String hexStr) {  
        if (hexStr.length() < 1)  
            return null;  
        byte[] result = new byte[hexStr.length() / 2];  
        for (int i = 0; i < hexStr.length() / 2; i++) {  
            int high = Integer.parseInt(hexStr.substring(i * 2, i * 2 + 1), 16);  
            int low = Integer.parseInt(hexStr.substring(i * 2 + 1, i * 2 + 2),  
                    16);  
            result[i] = (byte) (high * 16 + low);  
        }  
        return result;  
    }  
    
    public static void main(String[] args) {
		String content = "你好";
		System.out.println("before aes: "+content);
		String encryptContent = Aes128.encrypt(content);
		System.out.println("after aes: "+encryptContent);
		System.out.println("decode: "+Aes128.decrypt(encryptContent));
	}
}

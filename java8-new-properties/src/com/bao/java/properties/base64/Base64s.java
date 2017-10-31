package com.bao.java.properties.base64;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
/**
 * Base64��ͬʱ���ṩ�˶�URL��MIME�Ѻõı������������
 * Base64.getUrlEncoder()/Base64.getUrlDecoder()��
 * Base64.getMimeEncoder()/Base64.getMimeDecoder()
 * @author sunbao
 *
 */
public class Base64s {
	public static void main(String[] args) {
		final String text = "base64 finally in java 8";
		final String encoded = Base64.getEncoder().encodeToString(text.getBytes(StandardCharsets.UTF_8));
		System.out.println(encoded);
		final String decoded = new String(Base64.getDecoder().decode(encoded),StandardCharsets.UTF_8);
		System.out.println(decoded);
	}
}

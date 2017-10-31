package com.bao.java.properties.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.util.ArrayList;
import java.util.Collection;

public class Annotations {

	/**
	 * java 8 ��չ��ע��������ģ��ֲ������������ࡢ������ӿڵ�ʵ�֣��������쳣Ҳ�����ע�⡣
	 * 
	 * ע��@Retention������������ע�⣬��ע���ע�⣬��ΪԪע�⡣
	 * RetentionPolicy.CLASS������������
	 * RetentionPolicy.SOURCEֻ������Դ�ļ���
	 * RetentionPolicy.RUNTIME����������ʱ
	 */
	@Retention(RetentionPolicy.RUNTIME)
	@Target({ElementType.TYPE_USE,ElementType.TYPE_PARAMETER})
	public @interface NonEmpty{//����һ��ע��@NonEmpty
		
	}
	public static class Holder<@NonEmpty T> extends @NonEmpty Object{
		public void method() throws @NonEmpty Exception{
			
		}
	}
	@SuppressWarnings("unused")
	public static void main(String[] args) {
		final Holder<String> holder = new @NonEmpty Holder<String>();
		@NonEmpty Collection<@NonEmpty String> strings = new ArrayList<>();
	}
}

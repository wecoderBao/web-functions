package com.bao.dubbo.provider;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Provider {

	public static void main(String[] args)  throws Exception{
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("provider.xml");
		System.out.println(context.getDisplayName()+"===");
		context.start();
		System.out.println("�����Ѿ�����������");
		System.in.read();
	}
}

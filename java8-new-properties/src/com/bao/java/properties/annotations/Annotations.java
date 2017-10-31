package com.bao.java.properties.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.util.ArrayList;
import java.util.Collection;

public class Annotations {

	/**
	 * java 8 扩展了注解的上下文：局部变量、泛型类、父类与接口的实现，方法的异常也能添加注解。
	 * 
	 * 注解@Retention可以用来修饰注解，是注解的注解，称为元注解。
	 * RetentionPolicy.CLASS保留到编译期
	 * RetentionPolicy.SOURCE只会留在源文件中
	 * RetentionPolicy.RUNTIME保留到运行时
	 */
	@Retention(RetentionPolicy.RUNTIME)
	@Target({ElementType.TYPE_USE,ElementType.TYPE_PARAMETER})
	public @interface NonEmpty{//定义一个注解@NonEmpty
		
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

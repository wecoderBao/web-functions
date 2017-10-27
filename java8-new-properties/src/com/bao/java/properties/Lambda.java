package com.bao.java.properties;

import java.util.Arrays;
import java.util.List;

public class Lambda {
	public static void main(String[] args) {
		//推测参数类型
		Arrays.asList("a","b").forEach(e -> System.out.println(e));
		//指定参数类型
		Arrays.asList("c","d").forEach((String e) -> System.out.println(e));
		//lambda函数体复杂，可以放到一对花括号中
		Arrays.asList(1,2,3).forEach(e -> {
			System.out.println(e);
			System.out.println(e+1);
		});
		/**
		 * lambda可能会返回一个值。返回值的类型由编译器推测出来。如果lambda的函数体只有一行的话
		 * 那么没有必要显示使用return语句。下面两段代码等价
		 */
		Arrays.asList("a","b","d").sort((String e1, String e2) -> e1.compareTo(e2));
		
		Arrays.asList("a","b","d").sort((e1,e2) -> {
			int result = e1.compareTo(e2);
			return result;
		});
	}
}

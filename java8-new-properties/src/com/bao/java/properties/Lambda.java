package com.bao.java.properties;

import java.util.Arrays;
import java.util.List;

public class Lambda {
	public static void main(String[] args) {
		//�Ʋ��������
		Arrays.asList("a","b").forEach(e -> System.out.println(e));
		//ָ����������
		Arrays.asList("c","d").forEach((String e) -> System.out.println(e));
		//lambda�����帴�ӣ����Էŵ�һ�Ի�������
		Arrays.asList(1,2,3).forEach(e -> {
			System.out.println(e);
			System.out.println(e+1);
		});
		/**
		 * lambda���ܻ᷵��һ��ֵ������ֵ�������ɱ������Ʋ���������lambda�ĺ�����ֻ��һ�еĻ�
		 * ��ôû�б�Ҫ��ʾʹ��return��䡣�������δ���ȼ�
		 */
		Arrays.asList("a","b","d").sort((String e1, String e2) -> e1.compareTo(e2));
		
		Arrays.asList("a","b","d").sort((e1,e2) -> {
			int result = e1.compareTo(e2);
			return result;
		});
	}
}

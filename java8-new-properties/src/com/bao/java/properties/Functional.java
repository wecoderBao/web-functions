package com.bao.java.properties;
/**
 * 1. lambda���ʽ��functional�ӿ�
 * 
 * ����ʽ�ӿھ���һ������һ����������ͨ�ӿڣ�����ڽӿ�����������һ��
 * ����������ӿھͲ����Ǻ���ʽ�ġ���ˣ�java 8 ������һ�������ע�⡣
 * 
 * ע��Ĭ�Ϸ����뾲̬��������Ӱ�캯��ʽ�ӿڵ���Լ��
 * @author sunbao
 *
 */
@FunctionalInterface
public interface Functional {

	void method();
	
	default void defaultMethod() {
		//Ĭ�Ϸ���
	}
}

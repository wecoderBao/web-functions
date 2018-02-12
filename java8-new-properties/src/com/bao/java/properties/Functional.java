package com.bao.java.properties;
/**
 * 1. lambda表达式与functional接口
 * 
 * 函数式接口就是一个具有一个方法的普通接口，如果在接口中增加了另一个
 * 方法，这个接口就不再是函数式的。因此，java 8 增加了一种特殊的注解。
 * 
 * 注：默认方法与静态方法并不影响函数式接口的契约。
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

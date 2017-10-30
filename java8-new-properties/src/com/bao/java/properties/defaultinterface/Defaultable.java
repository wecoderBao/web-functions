package com.bao.java.properties.defaultinterface;

public interface Defaultable {

	//Interfaces now allow default methods, the implementer may or
	//may not implement them
	//用default关键字声明一个默认方法
	default String notRequired() {
		return "Default implementation";
	}
}	

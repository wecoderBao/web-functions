package com.bao.java.properties.defaultinterface;

public interface Defaultable {

	//Interfaces now allow default methods, the implementer may or
	//may not implement them
	//��default�ؼ�������һ��Ĭ�Ϸ���
	default String notRequired() {
		return "Default implementation";
	}
}	

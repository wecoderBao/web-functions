package com.bao.java.properties.defaultinterface;

public class Main {
	public static void main(String[] args) {
		Defaultable defaultable = DefaultableFactory.create(DefaultableImpl :: new);
		System.out.println(defaultable.notRequired());
		defaultable = DefaultableFactory.create(OverridableImpl :: new);
		System.out.println(defaultable.notRequired());
	}
}

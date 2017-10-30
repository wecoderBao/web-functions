package com.bao.java.properties.defaultinterface;

public class OverridableImpl implements Defaultable {
	@Override
	public String notRequired() {
		return "Overridden implementation";
	}
}

package com.bao.java.properties.defaultinterface;

import java.util.function.Supplier;

public interface DefaultableFactory {
	//interface now allow static methods
	static Defaultable create(Supplier<Defaultable> supplier) {
		return supplier.get();
	}
}

package com.bao.java.properties.lambda;

import java.util.function.Supplier;

/**
 * Supplier没有入参，有返回值
 * @author sunbao
 *
 */
public class SupplierTest {

	public static void main(String[] args) {
		Supplier<String> supplier = () -> {
			return "supplier";
		};
		System.out.println(supplier.get());
	}
}

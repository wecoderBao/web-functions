package com.bao.java.properties.lambda;

import java.util.function.Function;

public class FunctionDemo {

	static void modifyTheValue(int valueToBeOperated, Function<Integer,Integer> function) {
		int newValue = function.apply(valueToBeOperated);
		System.out.println(newValue);
	}
	public static void main(String[] args) {
		int incr = 20;
		int myNumber = 10;
		modifyTheValue(myNumber,val->val+incr);
	}
}

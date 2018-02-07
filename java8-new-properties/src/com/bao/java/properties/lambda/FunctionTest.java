package com.bao.java.properties.lambda;

import java.util.function.Function;

public class FunctionTest {
	public static void main(String[] args) {
		System.out.println(composeTest("123"));
	}

	public static int applyTest(int value) {
		/**
		 * 将函数变成一个对象
		 */
		Function<Integer, String> converter = (i)->Integer.toString(i);
		return converter.apply(value).length();
	}
	/**
	 * default <V> Function<V, R> compose(Function<? super V, ? extends T> before) {
     *     Objects.requireNonNull(before);
     *     return (V v) -> apply(before.apply(v));
     *  }
	 */
	public static int composeTest(String value) {
		Function<Integer, String> converter = (i)->Integer.toString(i);
		Function<String, Integer> reverse = (s)->Integer.parseInt(s);
		return converter.compose(reverse).apply(value).length();
	}
	
	public static int andThenTest(int value) {
		/**
		 * 先执行converter将int转成字符串，执行reverse将字符串转成int
		 * default <V> Function<T, V> andThen(Function<? super R, ? extends V> after) {
		 *   Objects.requireNonNull(after);
		 *   return (T t) -> after.apply(apply(t));
		 * }
		 */
		Function<Integer,String> converter = (i) -> Integer.toString(i);
		Function<String,Integer> reverse = (s) -> Integer.parseInt(s);
		return converter.andThen(reverse).apply(value);
	}
	/**
	 * 
	 * identity：Returns a function that always returns its input 
     * static <T> Function<T, T> identity() {
     *   return t -> t;
     * }
	 */
	public static int identityExam(int value) {
        Function<Integer, Integer> id = Function.identity();
        return id.apply(value);
    }
}

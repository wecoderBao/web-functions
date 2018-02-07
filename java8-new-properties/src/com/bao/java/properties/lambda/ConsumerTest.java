package com.bao.java.properties.lambda;

import java.util.function.Consumer;
/**
 * Consumer用accept接受一个参数，没有返回值，即对参数进行处理
 * @author sunbao
 *
 */
public class ConsumerTest {

	public static void main(String[] args) {
		Consumer<String> consumer = (i) -> {
			System.out.println("consumer"+i);
		};
		Consumer<String> after = (i) -> {
			System.out.println("after"+i);
		};
		consumer.andThen(after).accept("haha");
		System.out.println("-----------------");
		consumer.andThen((new ConsumerTest())::print).accept("en");
	}
	public void print(String value) {
		System.out.println("test"+value);
	}
}

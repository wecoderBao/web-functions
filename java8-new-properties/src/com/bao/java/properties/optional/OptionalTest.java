package com.bao.java.properties.optional;

import java.util.Optional;

public class OptionalTest {
	public static void main(String[] args) {
		Optional<String> name = Optional.of("hafsadfs");
		Optional<String> empty = Optional.ofNullable(null);
		
		try {
			// orElseThrow与orElse方法类似。与返回默认值不同，
			// orElseThrow会抛出lambda表达式或方法生成的异常

			empty.orElseThrow(NullPointerException::new);
		} catch (Throwable ex) {
			// 输出: No value present in the Optional instance
			System.out.println(ex.getMessage());
		}
		/**
		 * ifPresent 如果Optional实例有值则为其调用consumer，否则不做处理
		 */
		name.ifPresent((value) -> {
			System.out.println("The length of the value is: " + value.length());
		});
		/**
		 * orElse
		 * 如果有值则将其返回，否则返回指定的其它值。
		 */
		System.out.println(empty.orElse("There is no value present!"));
		/**
		 * orElseGet
		 * orElseGet与orElse方法类似，区别在于得到的默认值。orElse方法将传入的字符串作为默认值，
		 * orElseGet方法可以接受Supplier接口的实现用来生成默认值
		 */
		System.out.println(empty.orElseGet(() -> "Default Value"));
		System.out.println(name.orElseGet(() -> {
			return "haha";
		}));
		/**
		 * map方法
		 * 如果有值，则对其执行调用mapping函数得到返回值。如果返回值不为null，则创建包含mapping返回值的Optional作为map方法返回值，
		 * 否则返回空Optional。
		 */
		Optional<String> upperName = name.map((value) -> value.toUpperCase());
		System.out.println(upperName.orElse("no value"));
		/**
		 * flatMap 如果有值，为其执行mapping函数返回Optional类型返回值，
		 * 否则返回空Optional。flatMap与map（Funtion）方法类似， 区别在于flatMap中的mapper返回值必须是Optional。
		 * 调用结束时，flatMap不会对结果用Optional封装。
		 */
		upperName = name.flatMap((value) -> Optional.of(value.toUpperCase()));
		System.out.println(upperName);
		/**
		 * filter 如果有值并且满足断言条件返回包含该值的Optional，否则返回空Optional。
		 */
		Optional<String> longName = name.filter((value) -> value.length() > 6);
		System.out.println(longName.orElse("less than 6"));

	}
}

package com.bao.java.properties.mehtodref;

import java.util.Arrays;
import java.util.List;
import java.util.function.Supplier;

public class Car {
	public static Car create(final Supplier<Car> supplier) {
		return supplier.get();
	}
	public static void collide(final Car car) {
		System.out.println("collided: "+car.toString());
	}
	public void follow(final Car another) {
		System.out.println("following the "+another.toString());
	}
	public void repair() {
		System.out.println("repaired "+ this.toString());
	}
	
	@Override
	public String toString() {
		return "Car";
	}
	public static void main(String[] args) {
		/**
		 * 1.构造器引用，语法Class :: new 或者更一般的Class<T> :: new请
		 * 注意构造器没有参数
		 */
		final Car car = Car.create(Car :: new);
		final List<Car> cars = Arrays.asList(car);
		/**
		 * 2.第二种方法引用是静态方法引用，它的语法是Class::static_method.
		 * 请注意这个方法接收一个Car类型参数。
		 */
		cars.forEach(Car :: collide);
		/**
		 * 3.特定类的任意对象的方法引用，它的语法是Class::method.请注意，这个
		 * 方法没有参数。
		 */
		cars.forEach(Car :: repair);
		/**
		 * 4.特定对象的方法引用，它的语法是instance::method.请注意这个方法
		 * 接受一个Car类型的参数。
		 */
		Car police = Car.create(Car :: new);
		cars.forEach(police::follow);
	}
}

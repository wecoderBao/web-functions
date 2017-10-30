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
		 * 1.���������ã��﷨Class :: new ���߸�һ���Class<T> :: new��
		 * ע�⹹����û�в���
		 */
		final Car car = Car.create(Car :: new);
		final List<Car> cars = Arrays.asList(car);
		/**
		 * 2.�ڶ��ַ��������Ǿ�̬�������ã������﷨��Class::static_method.
		 * ��ע�������������һ��Car���Ͳ�����
		 */
		cars.forEach(Car :: collide);
		/**
		 * 3.�ض�����������ķ������ã������﷨��Class::method.��ע�⣬���
		 * ����û�в�����
		 */
		cars.forEach(Car :: repair);
		/**
		 * 4.�ض�����ķ������ã������﷨��instance::method.��ע���������
		 * ����һ��Car���͵Ĳ�����
		 */
		Car police = Car.create(Car :: new);
		cars.forEach(police::follow);
	}
}

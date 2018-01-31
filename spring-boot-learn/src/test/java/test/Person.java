package test;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.config.BeanPostProcessor;

public class Person implements BeanNameAware, BeanFactoryAware, InitializingBean, DisposableBean {

	private String name;

	private BeanFactory beanFacotry;
	private String beanName;

	public Person() {
		System.out.println("构造器，实例化");
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public void setBeanName(String name) {
		// TODO Auto-generated method stub
		System.out.println("beanNameAware接口 set方法==" + name);
		this.beanName = name;
	}

	@Override
	public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
		// TODO Auto-generated method stub
		System.out.println("bean factory aware 接口set方法");
		this.beanFacotry = beanFactory;
	}

	// InitializingBean接口方法
	@Override
	public void afterPropertiesSet() throws Exception {
		// TODO Auto-generated method stub
		System.out.println("InitializingBean 接口方法");
	}

	// 通过<bean>的init-method属性指定的初始化方法
	public void myInit() {
		System.out.println("init-method指定的初始化方法");
	}

	@Override
	public void destroy() throws Exception {
		// TODO Auto-generated method stub
		System.out.println("DisposableBean接口方法");
	}

	// 通过<bean>的destroy-method属性指定的方法
	public void myDestroy() {
		System.out.println("destroy-method指定的方法");
	}

	@Override
	public String toString() {
		return "Person [name=" + name + "]";
	}

}

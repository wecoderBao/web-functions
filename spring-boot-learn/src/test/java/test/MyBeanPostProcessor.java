package test;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;

public class MyBeanPostProcessor implements BeanPostProcessor {

	@Override
	public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
		// TODO Auto-generated method stub
		System.out.println();
		System.out.println("BeanPostProcessor接口方法 postProcessBeforeInitialization=="+beanName);
		System.out.println();
		return bean;
	}

	@Override
	public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
		// TODO Auto-generated method stub
		System.out.println();
		System.out.println("BeanPostProcessor接口方法postProcessAfterInitialziation=="+beanName);
		System.out.println();
		return bean;
	}
}

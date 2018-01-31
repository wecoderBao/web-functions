package test;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.config.BeanFactoryPostProcessor;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;

public class MyBeanFactoryPostProcessor implements BeanFactoryPostProcessor {

	public MyBeanFactoryPostProcessor() {
		// TODO Auto-generated constructor stub
		super();
		System.out.println("BeanFactoryPostProcessor构造器===");
	}
	@Override
	public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) throws BeansException {
		// TODO Auto-generated method stub
		System.out.println("BeanFactoryPostProcessor调用postProcessBeanFactory方法====");
		BeanDefinition bd = beanFactory.getBeanDefinition("person");
		bd.getPropertyValues().addPropertyValue("name","hahaha");
	}

}

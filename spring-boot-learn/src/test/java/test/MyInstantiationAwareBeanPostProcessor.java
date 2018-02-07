package test;

import java.beans.PropertyDescriptor;

import org.springframework.beans.BeansException;
import org.springframework.beans.PropertyValues;
import org.springframework.beans.factory.config.InstantiationAwareBeanPostProcessorAdapter;

/**
 * InstantiationAwareBeanPostProcessor 接口本质是BeanPostProcessor的子接口，
 * 一般我们继承Spring为其提供的适配器类InstantiationAwareBeanPostProcessorAdapter来使用它
 * @author sunbao
 *
 */
public class MyInstantiationAwareBeanPostProcessor extends InstantiationAwareBeanPostProcessorAdapter {
	
	public MyInstantiationAwareBeanPostProcessor() {
		super();
		System.out.println();
		System.out.println("InstantiationAwareBeanPostProcessorAdapter实现类构造器");
		System.out.println();
	}
	//接口方法、实例化bean之前调用
	@Override
	public Object postProcessBeforeInstantiation(Class beanClass, String beanName) throws BeansException{
		System.out.println();
		System.out.println("InstantiationAwareBeanPostProcessor调用postProcessBeforeInstantiation方法");
		System.out.println();
		return null;
	}
	//接口方法、实例化bean之后调用
	@Override
	public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException{
		System.out.println();
		System.out.println("InstantiationAwareBeanPostProcessor调用postProcessAfterInitialization方法");
		System.out.println();
		return bean;
	}
	//接口方法、设置某个属性时调用
	@Override
	public PropertyValues postProcessPropertyValues(PropertyValues pvs, PropertyDescriptor[] pds, Object bean, String beanName)
	throws BeansException{
		System.out.println();
		System.out.println("InstantiationAwareBeanPostProcessor调用postProcessPropertyValues方法*********");
		System.out.println();
		return pvs;
	}
}

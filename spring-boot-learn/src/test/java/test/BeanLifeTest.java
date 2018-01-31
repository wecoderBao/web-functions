package test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
/**
 * 参考   http://uule.iteye.com/blog/2094609
 * @author sunbao
 *
 */
public class BeanLifeTest {
	public static void main(String[] args) {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("test/bean.xml");
		System.out.println("===容器初始化==========");
		Person person = ctx.getBean("person",Person.class);
		System.out.println(person);
		System.out.println("=====容器关闭======");
		((ClassPathXmlApplicationContext)ctx).registerShutdownHook();
	}
}

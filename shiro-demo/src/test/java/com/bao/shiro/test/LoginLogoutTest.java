package com.bao.shiro.test;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.config.IniSecurityManagerFactory;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.Factory;
import org.apache.shiro.util.ThreadContext;
import org.junit.After;
import org.junit.Test;

import junit.framework.Assert;

public class LoginLogoutTest {

	@Test
	public void testHelloWorld() {
		//1.init security manager by ini
		Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro.ini");
		//2. binding security utils
		SecurityManager securityManager = factory.getInstance();
		SecurityUtils.setSecurityManager(securityManager);
		//3. subject and token
		Subject subject = SecurityUtils.getSubject();
		UsernamePasswordToken token = new UsernamePasswordToken("zhang","123");
		try {
			//4. login check authentication
			subject.login(token);
		}catch(AuthenticationException e) {
			//5.check failure
			System.out.println("wrong");
		}
		Assert.assertEquals(true, subject.isAuthenticated());
		//6.ÍË³ö
		subject.logout();
		Assert.assertEquals(false, subject.isAuthenticated());
	}
	
	@Test
	public void testCustomRealm() {
		//1.SecurityManager factory
		Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro-realm.ini");
		//2.security instance
		SecurityManager securityManager = factory.getInstance();
		SecurityUtils.setSecurityManager(securityManager);
		//3.subject
		Subject subject = SecurityUtils.getSubject();
		UsernamePasswordToken token = new UsernamePasswordToken("zhang","123");
		try {
			//4.check login
			subject.login(token);
		}catch(AuthenticationException e) {
			//5.failure
			e.printStackTrace();
		}
		Assert.assertEquals(true, subject.isAuthenticated());
		//6.logout
		subject.logout();
	}
	
	@Test
	public void testCustomMultiRealm() {
		//1.factory
		Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro-multi-realm.ini");
		//2.SecurityManager
		SecurityManager securityManager = factory.getInstance();
		SecurityUtils.setSecurityManager(securityManager);
		//3.subject
		Subject subject = SecurityUtils.getSubject();
		UsernamePasswordToken token = new UsernamePasswordToken("wang","123");
		try {
			//4.login
			subject.login(token);
		}catch(AuthenticationException e) {
			//5. auth fail
			e.printStackTrace();
		}
		Assert.assertEquals(true, subject.isAuthenticated());
		//6. exit
		subject.logout();
	}
	@Test
	public void testJDBCRealm() {
		org.apache.shiro.realm.jdbc.JdbcRealm jr;
		Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro-jdbc-realm.ini");
		SecurityManager securityManager = factory.getInstance();
		SecurityUtils.setSecurityManager(securityManager);
		Subject subject = SecurityUtils.getSubject();
		UsernamePasswordToken token = new UsernamePasswordToken("zhang","123");
		try {
			subject.login(token);
		}catch(AuthenticationException e) {
			e.printStackTrace();
		}
		Assert.assertEquals(true, subject.isAuthenticated());
		subject.logout();
	}
	@After
	public void tearDown() throws Exception{
		ThreadContext.unbindSubject();
	}
}

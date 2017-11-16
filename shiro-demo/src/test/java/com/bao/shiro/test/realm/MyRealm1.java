package com.bao.shiro.test.realm;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.realm.Realm;

public class MyRealm1 implements Realm{

	@Override
	public String getName() {
		
		return "myrealm1";
	}

	@Override
	public boolean supports(AuthenticationToken token) {
		//仅支持UsernamePasswordToken类型的token
		return token instanceof UsernamePasswordToken;
	}

	/**
	 * 自定义实现认证过程，检测用户名密码是否正确
	 */
	@Override
	public AuthenticationInfo getAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
		//用户名
		String username = (String) token.getPrincipal();
		//密码
		String password = new String((char[])token.getCredentials());
		if(!"zhang".equals(username)) {
			throw new UnknownAccountException();
		}
		if(!"123".equals(password)) {
			throw new IncorrectCredentialsException();
		}
		
		return new SimpleAuthenticationInfo(username,password,getName());
	}

	
}

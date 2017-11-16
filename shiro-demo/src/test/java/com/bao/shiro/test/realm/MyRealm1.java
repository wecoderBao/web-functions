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
		//��֧��UsernamePasswordToken���͵�token
		return token instanceof UsernamePasswordToken;
	}

	/**
	 * �Զ���ʵ����֤���̣�����û��������Ƿ���ȷ
	 */
	@Override
	public AuthenticationInfo getAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
		//�û���
		String username = (String) token.getPrincipal();
		//����
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

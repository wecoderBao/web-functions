package com.bao.shiro.demo;

public class AuthenticationStrategy {
	/**
	 * SecurityManager�ӿڼ̳���Authenticator�����⻹��һ��ModularRealmAuthenticatorʵ��
	 * ��ί�и����Realm������֤����֤����ͨ��AuthenticationAtrategy�ӿ�ָ����Ĭ���ṩ��ʵ�֣�
	 * 
	 * FirstSuccessfulStrategy:ֻҪ��һ��Realm��֤�ɹ����ɣ�ֻ���ص�һ��Realm�����֤�ɹ���
	 * ��֤��Ϣ���������ԡ�
	 * AtLeastOneSuccessfulStrategy:ֻҪ��һ��Realm��֤�ɹ����ɣ���FirstSuccessfulStrategy
	 * ��ͬ����������Realm�����֤�ɹ�����֤��Ϣ��
	 * AllSuccessfulStrategy������Realm��֤�ɹ�����ɹ����ҷ�������Realm�����֤�ɹ�����֤
	 * ��Ϣ�������һ��ʧ�ܾ�ʧ���ˡ�
	 */
}

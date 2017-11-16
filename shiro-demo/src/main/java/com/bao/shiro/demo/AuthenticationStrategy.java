package com.bao.shiro.demo;

public class AuthenticationStrategy {
	/**
	 * SecurityManager接口继承了Authenticator。另外还有一个ModularRealmAuthenticator实现
	 * 其委托给多个Realm进行验证，验证规则通过AuthenticationAtrategy接口指定，默认提供的实现：
	 * 
	 * FirstSuccessfulStrategy:只要有一个Realm验证成功即可，只返回第一个Realm身份验证成功的
	 * 认证信息，其他忽略。
	 * AtLeastOneSuccessfulStrategy:只要有一个Realm验证成功即可，和FirstSuccessfulStrategy
	 * 不同，返回所有Realm身份验证成功的认证信息。
	 * AllSuccessfulStrategy：所有Realm验证成功才算成功，且返回所有Realm身份验证成功的认证
	 * 信息，如果有一个失败就失败了。
	 */
}

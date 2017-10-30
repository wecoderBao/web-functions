package com.bao.springboot.service;

public interface RedisService {

	/**
	 * 写入缓存
	 */
	public boolean set(final String key,Object value);
	/**
	 * 写入缓存，带缓存失效时间
	 */
	public boolean set(final String key, Object value, Long expireTime);
	/**
	 * 读取缓存
	 */
	public Object get(final String key);
	
}

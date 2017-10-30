package com.bao.springboot.service.impl;

import java.io.Serializable;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;

import com.bao.springboot.service.RedisService;

@Service("redisService")
public class RedisServiceImpl implements RedisService {
	@Autowired
	private RedisTemplate redisTemplate;
	/**
	 * 写入缓存
	 */
	@Override
	public boolean set(final String key,Object value) {
		boolean result = false;
		try {
			ValueOperations<Serializable,Object> operations = redisTemplate.opsForValue();
			operations.set(key, value);
			result = true;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	/**
	 * 写入缓存，带缓存失效时间
	 */
	@Override
	public boolean set(final String key, Object value, Long expireTime) {
		boolean result = false;
		try {
			ValueOperations<Serializable, Object> operations = redisTemplate.opsForValue();
			operations.set(key, value);
			redisTemplate.expire(key, expireTime, TimeUnit.SECONDS);
			result = true;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	/**
	 * 读取缓存
	 */
	@Override
	public Object get(final String key) {
		Object result = null;
		ValueOperations<Serializable, Object> operations = redisTemplate.opsForValue();
		result = operations.get(key);
		return result;
	}
}

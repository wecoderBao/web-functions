package com.bao.springboot.controller.app;

import java.util.UUID;
import java.util.concurrent.TimeUnit;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class LoginController {
	private static final String USER_LOGIN_COOKIE_KEY = "userSessionId";
	@Autowired
	private RedisTemplate<String, String> redisTemplate;
	
	@GetMapping("/login")
	public String login(String username, String password, HttpServletResponse response) {
		/**
		 * 验证通过后，生成sessionId
		 * 对于需要登录的接口，拦截器可以拦截请求，验证sessionId是否有效
		 */
		String sessionId = UUID.randomUUID().toString();
		Cookie cookie = new Cookie(USER_LOGIN_COOKIE_KEY,sessionId);
		response.addCookie(cookie);
		/**
		 * 将sessionId和username放到Redis中
		 */
		redisTemplate.opsForValue().set(sessionId, username, 3600, TimeUnit.SECONDS);
		
		return "success";
	}
}

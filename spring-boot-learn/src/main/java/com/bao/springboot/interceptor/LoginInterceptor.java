package com.bao.springboot.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class LoginInterceptor extends HandlerInterceptorAdapter {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		
		if (request.getRequestURI().equals("/login") || request.getRequestURI().equals("/index")) {
			return true;
		}
		HttpSession session = request.getSession();
		if ("gua".equalsIgnoreCase((String) session.getAttribute("user"))) {
			return true;
		}

		return false;
	}
}

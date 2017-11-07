package com.bao.springboot.controller.web;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AdminController {

	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(@RequestParam String user,@RequestParam String pwd,HttpServletRequest request) {
		if("gua".equals(user)&&"gua".equals(pwd)) {
			request.getSession().setAttribute("user", "gua");
			return "redirect:/guaList";
		}
		return "redirect:/index";
	}
	
	@RequestMapping(value="/index",method=RequestMethod.GET)
	public String index() {
		return "login";
	}
}

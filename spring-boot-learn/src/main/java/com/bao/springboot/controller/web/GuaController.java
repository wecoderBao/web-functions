package com.bao.springboot.controller.web;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.bao.springboot.pojo.TGua;

@Controller
public class GuaController {
	
	/**
	 * 新增一个记录
	 */
	@RequestMapping(value="/detail",method=RequestMethod.GET)
	public String detail(HttpServletRequest request,ModelMap model) {
		TGua gua = new TGua();
		model.addAttribute("gua", gua);
		
		return "gua/guaDetail";
	}
	
	/**
	 * 返回记录列表
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="/guaList",method=RequestMethod.GET)
	public String guaList(HttpServletRequest request,ModelMap model) {
		return "gua/guaList";
	}
}

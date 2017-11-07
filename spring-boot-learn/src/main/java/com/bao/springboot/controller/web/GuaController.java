package com.bao.springboot.controller.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.bao.springboot.pojo.TGua;
import com.bao.springboot.service.GuaService;

@Controller
public class GuaController {
	
	@Autowired
	GuaService guaService;
	
	/**
	 * 记录详情
	 */
	@RequestMapping(value="/guaDetail",method=RequestMethod.GET)
	public String detail(@RequestParam Integer id,ModelMap model) {
		TGua gua = guaService.guaDetail(id);
		if(gua == null) {
			gua = new TGua();
		}
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
		List<TGua> guaList = guaService.guaList();
		model.addAttribute("guaList", guaList);
		return "gua/guaList";
	}
	
	/**
	 * 新增一条记录
	 * @param gua
	 * @param queryParamCacheKey
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="/guaSave",method=RequestMethod.POST)
	 public String guaSave(@ModelAttribute TGua gua,
		        @RequestParam(required = false) String queryParamCacheKey,
		        HttpServletRequest request,ModelMap model) {
		
		guaService.saveGua(gua);
		
		return "redirect:/guaList?queryParamCacheKey="+queryParamCacheKey+"&focusTrId="+gua.getId();
	}
	
	@GetMapping(value="/guaDelete")
	public String guaDelete(@RequestParam Integer id) {
		guaService.guaDelete(id);
		return "redirect:/guaList";
	}
}

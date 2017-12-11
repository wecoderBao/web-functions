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

import com.bao.springboot.mapper.TGuaMapper;
import com.bao.springboot.pojo.TYao;
import com.bao.springboot.service.YaoService;

@Controller
public class YaoController {

	@Autowired
	YaoService yaoService;
	@Autowired
	TGuaMapper tGuaMapper;

	/**
	 * 记录详情
	 */
	@RequestMapping(value = "/yaoDetail", method = RequestMethod.GET)
	public String detail(@RequestParam(required = false) Integer id, @RequestParam Integer guaCode, ModelMap model) {
		TYao yao = yaoService.yaoDetail(id);
		if (yao == null) {
			yao = new TYao();
		}
		model.addAttribute("yao", yao);
		model.addAttribute("guaCode", guaCode);
		Integer realGuaCode = tGuaMapper.selectByPrimaryKey(guaCode).getCode();
		model.addAttribute("realGuaCode", realGuaCode);

		return "yao/yaoDetail";
	}

	/**
	 * 返回记录列表
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/yaoList", method = RequestMethod.GET)
	public String yaoList(@RequestParam Integer guaCode, ModelMap model) {
		//guaCode是gua的id
		List<TYao> yaoList = yaoService.yaoListByGuaCode(guaCode);
		model.addAttribute("yaoList", yaoList);
		model.addAttribute("guaCode", guaCode);
		Integer realGuaCode = tGuaMapper.selectByPrimaryKey(guaCode).getCode();
		model.addAttribute("realGuaCode", realGuaCode);
		return "yao/yaoList";
	}

	/**
	 * 新增一条记录
	 */
	@RequestMapping(value = "/yaoSave", method = RequestMethod.POST)
	public String guaSave(@ModelAttribute TYao yao, @RequestParam(required = false) String queryParamCacheKey) {

		yaoService.saveYao(yao);

		return "redirect:/yaoList?guaCode="+yao.getGuaCode()+"&queryParamCacheKey=";
	}

	@GetMapping(value = "/yaoDelete")
	public String yaoDelete(@RequestParam Integer id,@RequestParam Integer guaCode) {
		yaoService.yaoDelete(id);
		return "redirect:/yaoList?guaCode="+guaCode;
	}
}

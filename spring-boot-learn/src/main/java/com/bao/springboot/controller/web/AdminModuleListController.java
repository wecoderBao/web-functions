package com.bao.springboot.controller.web;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.bao.springboot.pojo.Module;
import com.bao.springboot.service.login.LogAdminOperateService;
import com.bao.springboot.service.module.ModuleCategoryService;
import com.bao.springboot.service.module.ModuleService;

@RequestMapping({ "/admin/module" })
@Controller
public class AdminModuleListController {
	private final String moduleName = "module";
	private final String allSqlFieldStr = ",id,module_name,module_url,module_category_id,sort_num,module_title,target,if_show,";
	@Resource
	private ModuleCategoryService moduleCategoryService;

	@Resource
	private LogAdminOperateService logAdminOperateService;
	@Resource
	private ModuleService moduleService;

	// 列表页
	@RequestMapping(value = { "list" }, method = { RequestMethod.GET })
	public String list(ModelMap model, @RequestParam(required = false) Long moduleCategoryId,
			@RequestParam(required = false) String queryParamCacheKey, @RequestParam(required = false) String focusTrId,
			HttpServletRequest request, HttpServletResponse response) {

		model.addAttribute("queryParamCacheKey", queryParamCacheKey);
		model.addAttribute("focusTrId", focusTrId);
		model.addAttribute("adminPriority", 1);
		return "admin/module/moduleList";
	}

	// 根据自定义查询条件到编辑
	@RequestMapping({ "/detail_param" })
	public String detailId(HttpServletRequest request, ModelMap model) {

		return "admin/module/moduleDetail";
	}

	// 新增
	@RequestMapping({ "/detail" })
	public String detail(HttpServletRequest request, @RequestParam(required = false) Long moduleCategoryId,
			ModelMap model) {

		model.addAttribute("module", "module");
		model.addAttribute("adminPriority", "优先级");
		return "admin/module/moduleDetail";
	}

	// 根据主键到编辑
	@RequestMapping({ "/detail/{id}" })
	public String detailId(@PathVariable Long id, @RequestParam(required = false) String queryParamCacheKey,
			@RequestParam(required = false) Long logAdminOperateId, HttpServletRequest request, ModelMap model) {

		return "admin/module/moduleDetail";
	}

	// ajax更新状态
	@RequestMapping(value = "ajax_update", method = { RequestMethod.POST })
	public void ajaxUpdate(@ModelAttribute Module module, HttpServletRequest request, HttpServletResponse response,
			ModelMap model) {

	}

	// 保存
	@RequestMapping(value = "save", method = { RequestMethod.POST })
	public String save(@ModelAttribute Module module, @RequestParam(required = false) String queryParamCacheKey,
			HttpServletRequest request, ModelMap model) {

		return "redirect:/admin/module/list?queryParamCacheKey=" + queryParamCacheKey + "&focusTrId=";
	}

	// ajax保存
	@RequestMapping(value = "ajax_save", method = { RequestMethod.POST })
	public void save(@ModelAttribute Module module, HttpServletRequest request, HttpServletResponse response,
			ModelMap model) {
		Long id;

	}

	// ajax批量保存
	@RequestMapping(value = "batch_save", method = { RequestMethod.POST })
	public void save(@RequestParam String saveJson, @RequestParam(required = false) Long moduleCategoryId,
			HttpServletResponse response, HttpServletRequest request, ModelMap model) {

	}

	// 删除
	@RequestMapping({ "/delete/{id}" })
	public void delete(@PathVariable Long id, HttpServletRequest request, HttpServletResponse response) {

	}

	// 批量删除
	@RequestMapping({ "/batchdelete/{ids}" })
	public void batchDelete(@PathVariable String ids, HttpServletRequest request, HttpServletResponse response) {

	}

}

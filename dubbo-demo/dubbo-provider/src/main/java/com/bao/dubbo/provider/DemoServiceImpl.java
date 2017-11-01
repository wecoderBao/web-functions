package com.bao.dubbo.provider;

import java.util.ArrayList;
import java.util.List;

import com.bao.dubbo.api.DemoService;

public class DemoServiceImpl implements DemoService{

	@Override
	public List<String> getPermissions(Long id) {
		List<String> demoList = new ArrayList<String>();
		demoList.add(String.format("permission_%d", id));
		return demoList;
	}

}

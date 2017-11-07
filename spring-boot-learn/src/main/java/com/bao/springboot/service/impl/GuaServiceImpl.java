package com.bao.springboot.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bao.springboot.mapper.TGuaMapper;
import com.bao.springboot.pojo.TGua;
import com.bao.springboot.pojo.TGuaExample;
import com.bao.springboot.service.GuaService;

@Service("guaService")
public class GuaServiceImpl implements GuaService {

	@Autowired
	TGuaMapper tGuaMapper;
	
	@Override
	public boolean saveGua(TGua gua) {
		TGuaExample example = new TGuaExample();
		TGuaExample.Criteria criteria = example.createCriteria();
		criteria.andCodeEqualTo(gua.getCode());
		List<TGua> guaList = tGuaMapper.selectByExample(example);
		if(guaList.size() > 0) {
			TGua oldGua = guaList.get(0);
			gua.setId(oldGua.getId());
			tGuaMapper.updateByPrimaryKey(gua);
		}else {
			tGuaMapper.insertSelective(gua);
		}
		return true;
	}

	@Override
	public List<TGua> guaList() {
		List<TGua> guaList = tGuaMapper.selectByExample(null);
		return guaList;
	}

}

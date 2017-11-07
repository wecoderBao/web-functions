package com.bao.springboot.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bao.springboot.mapper.TYaoMapper;
import com.bao.springboot.pojo.TYao;
import com.bao.springboot.pojo.TYaoExample;
import com.bao.springboot.service.YaoService;

@Service("yaoService")
public class YaoServiceImpl implements YaoService {

	@Autowired
	TYaoMapper tYaoMapper;

	@Override
	public boolean saveYao(TYao yao) {
		TYaoExample example = new TYaoExample();
		TYaoExample.Criteria criteria = example.createCriteria();
		criteria.andYaoCiEqualTo(yao.getYaoCi());
		List<TYao> yaoList = tYaoMapper.selectByExample(example);
		if (yaoList.size() > 0) {
			TYao oldYao = yaoList.get(0);
			yao.setId(oldYao.getId());
			tYaoMapper.updateByPrimaryKey(yao);
		} else {
			tYaoMapper.insertSelective(yao);
		}
		return true;
	}

	@Override
	public List<TYao> yaoList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TYao yaoDetail(Integer id) {

		return tYaoMapper.selectByPrimaryKey(id);
	}

	@Override
	public void yaoDelete(Integer id) {
		tYaoMapper.deleteByPrimaryKey(id);
	}

	@Override
	public List<TYao> yaoListByGuaCode(Integer guaCode) {
		TYaoExample example = new TYaoExample();
		TYaoExample.Criteria criteria = example.createCriteria();
		criteria.andGuaCodeEqualTo(guaCode);
		List<TYao> yaoList = tYaoMapper.selectByExample(example);

		return yaoList;
	}

}

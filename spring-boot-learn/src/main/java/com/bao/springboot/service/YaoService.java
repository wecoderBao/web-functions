package com.bao.springboot.service;

import java.util.List;

import com.bao.springboot.pojo.TYao;

public interface YaoService {

	boolean saveYao(TYao yao);

	List<TYao> yaoList();

	TYao yaoDetail(Integer id);

	void yaoDelete(Integer id);
	
	List<TYao> yaoListByGuaCode(Integer guaCode);

}

package com.bao.springboot.service;

import java.util.List;

import com.bao.springboot.pojo.TGua;

public interface GuaService {

	boolean saveGua(TGua gua);
	
	List<TGua> guaList();
}

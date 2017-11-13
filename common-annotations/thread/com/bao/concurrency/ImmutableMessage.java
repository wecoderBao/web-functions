package com.bao.concurrency;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class ImmutableMessage {
	private final Map<String,String> header = new HashMap<>();
	public Map<String,String> getHeaders(){
		//���ص�map�޸Ĳ����Ƿ������map�д���ǿ��޸Ķ������ȡ��֮�󻹿����޸ġ��߳̾�
		//����ȫ�ˡ�
		return Collections.unmodifiableMap(header);
	}
}

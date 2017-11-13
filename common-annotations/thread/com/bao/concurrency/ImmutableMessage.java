package com.bao.concurrency;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class ImmutableMessage {
	private final Map<String,String> header = new HashMap<>();
	public Map<String,String> getHeaders(){
		//返回的map修改操作非法，如果map中存的是可修改对象，则获取到之后还可以修改。线程就
		//不安全了。
		return Collections.unmodifiableMap(header);
	}
}

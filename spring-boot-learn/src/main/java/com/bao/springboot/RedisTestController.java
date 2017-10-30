package com.bao.springboot;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bao.springboot.service.RedisService;

@RestController
@RequestMapping(value="/redis")
public class RedisTestController {

	@Resource
	private RedisService redisService;
	
	@RequestMapping(value = "/test", method = {RequestMethod.GET,RequestMethod.POST})
	public String redisTest() {
		StringBuffer sb = new StringBuffer();
		redisService.set("str", "str");
		System.out.println("read redis: "+redisService.get("str").toString());
		return sb.append("str=").append(redisService.get("str").toString()).toString();
	}
}

package com.bao.java.properties;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 *1.lambda表达式与functional接口
 *
 * 2.接口的默认方法与静态方法
 * 
 * 3.方法引用 可以直接引用已有java类或对象的方法或构造器。与
 * lambda联合使用，方法引用可以使语言的构造更紧凑简洁，减少冗余代码。
 *
 *
 */
public class Begin {
	private static final Pattern URL_LINK_PATTERN = Pattern.compile("([hH][tT]{2}[pP]://|[hH][tT]{2}[pP][sS]://)(([A-Za-z0-9-~]+)\\.)+([A-Za-z0-9-:~/?=&#_.+%])+");

	public static void main(String[] args) {
		String content = "https://music.163.com/#/playlist?id=47122508";
		Matcher urlMatcher1 = URL_LINK_PATTERN.matcher(content);
        
        while (urlMatcher1.find()) {
            System.out.println("hh");
        }
	}
}

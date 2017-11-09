package com.bao.concurrency;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
/**
 * atomic access
 * 1.read and write operations to reference variables and primitive variables(except long and double)
 * 2.read and write operations for all variables declared as volatile.
 * @author sunbao
 *
 */
public class AtomicAssignment implements Runnable {

	private static final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss:SSS");
	private static Map<String,String> configuration = new HashMap<String,String>();
	
	@Override
	public void run() {
		for(int i=0;i<1000;i++) {
			Map<String,String> currConfig = configuration;
			String value1 = currConfig.get("key1");
			String value2 = currConfig.get("key2");
			String value3 = currConfig.get("key3");
			if(!(value1.equals(value2) && value2.equals(value3))) {
				throw new IllegalStateException("values are not equal.");
			}
			try {
				Thread.sleep(10);
			}catch(InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
	public static void readConfig() {
		Map<String,String> newConfig = new HashMap<String,String>();
		Date now = new Date();
		newConfig.put("key1", sdf.format(now));
		newConfig.put("key2", sdf.format(now));
		newConfig.put("key3", sdf.format(now));
		configuration = newConfig;
	}
	/**
	 * 读config的时候configuration指向的map在改变，但是将configuration赋值给currConfig的时候
	 * currConfig所指向的Map没有改变，故总是能读取相同的值。
	 * 若将currConfig替换为configuration则会抛出异常，因为，configuration指向的Map在改变。
	 * 这个例子说明引用赋值操作是原子操作
	 * @param args
	 * @throws InterruptedException
	 */
	public static void main(String[] args) throws InterruptedException {
		readConfig();
		Thread configThread = new Thread(new Runnable() {
			@Override
			public void run() {
				for(int i=0;i<1000;i++) {
					readConfig();
					try {
						Thread.sleep(10);
					}catch(InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
		},"configuration-thread");
		configThread.start();
		Thread[] threads = new Thread[5];
		for(int i=0;i<threads.length;i++) {
			threads[i] = new Thread(new AtomicAssignment(),"thread-"+i);
			threads[i].start();
		}
		for(int i=0;i<threads.length;i++) {
			threads[i].join();
		}
		configThread.join();
		System.out.println("all finished.");
	}

}

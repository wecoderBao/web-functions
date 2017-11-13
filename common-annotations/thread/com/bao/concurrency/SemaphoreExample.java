package com.bao.concurrency;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Semaphore;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * Semaphore可以控制某个资源可被同时访问的个数，
 * 通过 acquire() 获取一个许可，如果没有就等待，
 * 而 release() 释放一个许可
 * @author sunbao
 *
 */
public class SemaphoreExample implements Runnable {

	private static final Semaphore semaphore = new Semaphore(3,true);
	private static final AtomicInteger counter = new AtomicInteger();
	private static final long endMillis = System.currentTimeMillis()+10000;
	public static void main(String[] args) {
		ExecutorService executorService = Executors.newFixedThreadPool(5);
		for(int i=0;i<5;i++) {
			executorService.execute(new SemaphoreExample());
		}
		executorService.shutdown();
	}
	@Override
	public void run() {
		while(System.currentTimeMillis() < endMillis) {
			try {
				semaphore.acquire();
			}catch(InterruptedException e) {
				System.out.println(Thread.currentThread().getName()+" interrupted in acquire().");
			}
			int counterValue = counter.incrementAndGet();
			System.out.println(Thread.currentThread().getName()+" semaphore acquired: "+counterValue);
			if(counterValue > 3) {
				throw new IllegalStateException("more than three threads acquired the lock.");
			}
			counter.decrementAndGet();
			semaphore.release();
		}
	}

}

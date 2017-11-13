package com.bao.concurrency;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.RejectedExecutionHandler;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

public class ThreadPoolExecutorExample implements Runnable {

	private static AtomicInteger counter = new AtomicInteger();
	private final int taskId;
	public int getTaskId() {
		return taskId;
	}
	public ThreadPoolExecutorExample(int taskId) {
		this.taskId= taskId;
	}
	@Override
	public void run() {
		try {
			Thread.sleep(5000);
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
	public static void main(String[] args) {
		BlockingQueue<Runnable> queue = new LinkedBlockingQueue<Runnable>(10);
		ThreadFactory threadFactory = new ThreadFactory() {
			public Thread newThread(Runnable r) {
				int currentCount = counter.getAndIncrement();
				System.out.println("creating thread: "+ currentCount);
				return new Thread(r,"mythread-"+currentCount);
			}
		};
		RejectedExecutionHandler rejectedHandler = new RejectedExecutionHandler() {
			public void rejectedExecution(Runnable r, ThreadPoolExecutor executor) {
				if(r instanceof ThreadPoolExecutorExample) {
					ThreadPoolExecutorExample example = (ThreadPoolExecutorExample) r;
					System.out.println("rejecting task "+example.getTaskId());
				}
			}
		};
		/**
		 * 1.先按corePoolSize启动线程
		 * 2.线程数达到corePoolSize，则新来的任务放到队列
		 * 3.队列满了，则以maxPoolSize限制创建线程
		 * 4.若线程数超过maxPoolSize，则给RejectedExecutorHandler处理
		 * 
		 * keepAliveTime 线程等待任务的最大空闲时间
		 */
		ThreadPoolExecutor executor = new ThreadPoolExecutor(5,10,1,TimeUnit.SECONDS,queue,
				threadFactory,rejectedHandler);
		for(int i=0;i<100;i++) {
			executor.execute(new ThreadPoolExecutorExample(i));
		}
		executor.shutdown();
	}

}

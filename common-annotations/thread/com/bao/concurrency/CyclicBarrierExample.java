package com.bao.concurrency;

import java.util.Random;
import java.util.concurrent.CyclicBarrier;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;
/**
 *  1.CyclicBarrier��ʼ��ʱ�涨һ����Ŀ��Ȼ����������CyclicBarrier.await()����ȴ����߳�����
 *  ���߳����ﵽ�������Ŀʱ�����н���ȴ�״̬���̱߳����Ѳ������� 
 *  2.CyclicBarrier���������ֵ���˼һ�����ɿ����Ǹ��ϰ��� ���е��̱߳��뵽������һ��ͨ������ϰ��� 
 *  3.CyclicBarrier��ʼʱ���ɴ�һ��Runnable�Ĳ����� ��Runnable������CyclicBarrier����Ŀ�ﵽ�����������̱߳�����ǰ��ִ�С�
 * @author sunbao
 *
 */
public class CyclicBarrierExample implements Runnable{
	private static final int NUMBER_OF_THREADS = 5;
	private static AtomicInteger counter = new AtomicInteger();
	private static Random random = new Random(System.currentTimeMillis());
	private static final CyclicBarrier barrier = new CyclicBarrier(5,new Runnable() {
		public void run() {
			counter.incrementAndGet();
		}
	}) ;
	public static void main(String[] args) {
		ExecutorService executorService = Executors.newFixedThreadPool(NUMBER_OF_THREADS);
		for(int i=0;i<NUMBER_OF_THREADS;i++) {
			executorService.execute(new CyclicBarrierExample());
		}
		executorService.shutdown();
	}
	public void run() {
		try {
			while(counter.get()<3) {
				int randomSleepTime = random.nextInt(10000);
				System.out.println(Thread.currentThread().getName()+" sleeping "+randomSleepTime);
				Thread.sleep(randomSleepTime);
				System.out.println(Thread.currentThread().getName()+" waiting for barrier.");
				barrier.await();
				System.out.println(Thread.currentThread().getName()+" finished.");
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}

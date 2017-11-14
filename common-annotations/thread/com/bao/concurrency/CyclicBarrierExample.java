package com.bao.concurrency;

import java.util.Random;
import java.util.concurrent.CyclicBarrier;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;
/**
 *  1.CyclicBarrier初始化时规定一个数目，然后计算调用了CyclicBarrier.await()进入等待的线程数。
 *  当线程数达到了这个数目时，所有进入等待状态的线程被唤醒并继续。 
 *  2.CyclicBarrier就象它名字的意思一样，可看成是个障碍， 所有的线程必须到齐后才能一起通过这个障碍。 
 *  3.CyclicBarrier初始时还可带一个Runnable的参数， 此Runnable任务在CyclicBarrier的数目达到后，所有其它线程被唤醒前被执行。
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

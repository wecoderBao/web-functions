package com.bao.concurrency;

public class NotSynchronizeCounter implements Runnable {

	private static int counter = 0;

	@Override
	public void run() {

		while (counter < 10) {
			synchronized (NotSynchronizeCounter.class) {
				if(counter <10) {
					System.out.println(Thread.currentThread().getName() + " before: " + counter);
					counter++;
					System.out.println(Thread.currentThread().getName() + " after: " + counter);	
				}
			}
			try {
				Thread.sleep(50);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}

	}

	public static void main(String[] args) throws InterruptedException {
		Thread[] threads = new Thread[5];
		for (int i = 0; i < threads.length; i++) {
			threads[i] = new Thread(new NotSynchronizeCounter(), "thread-" + i);
			threads[i].start();
		}
		for (int i = 0; i < threads.length; i++) {
			threads[i].join();
		}
		System.out.println("main finished.");
	}
}

package com.bao.concurrency;

public class InterruptDemo implements Runnable{

	@Override
	public void run() {
		try {
			Thread.sleep(Long.MAX_VALUE);
			
		}catch(InterruptedException e) {
			System.out.println(Thread.currentThread().getName()+" interrupted by exception."+Thread.interrupted());
		}
		while(!Thread.interrupted()) {
		// do nothing here	
		}
		System.out.println(Thread.currentThread().getName()+" interrupted for the second time.");
	}
	public static void main(String[] args) throws InterruptedException{
		Thread myThread = new Thread(new InterruptDemo(),"myThread");
		myThread.start();
		
		System.out.println(Thread.currentThread().getName() + "sleeping in main thread for 5s");
		Thread.sleep(5000);
		System.out.println(Thread.currentThread().getName()+" interrupting mythread");
		myThread.interrupt();
		System.out.println(Thread.currentThread().getName() +" sleeping in main thread for 5s ...");
		Thread.sleep(5000);
		System.out.println(Thread.currentThread().getName() +" interrupting myThread.");
		myThread.interrupt();
	}
	
}

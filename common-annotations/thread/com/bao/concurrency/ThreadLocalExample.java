package com.bao.concurrency;

public class ThreadLocalExample implements Runnable {

	private static final ThreadLocal<Integer> threadLocal = new ThreadLocal<>();
	@Override
	public void run() {
		// TODO Auto-generated method stub

	}

}

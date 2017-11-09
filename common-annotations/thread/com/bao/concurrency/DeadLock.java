package com.bao.concurrency;

public class DeadLock {
/**
 * deadlock四个特点
 * 1.mutual exclusion
 * 解决方法：一般资源需要排他性，但是可以用乐观锁代替悲观锁变通
 * 2.resource holding
 * solution:一开始就锁住所有资源，但也有缺点
 * 3.no preemption 
 * solution:设置超时时间如ReentrantLock
 * 4.circular wait
 * solution:把需要加锁的代码放到一个方法中这样，加锁顺序就一致了。
 */
}

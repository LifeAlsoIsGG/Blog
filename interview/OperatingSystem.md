---
title: 操作系统
author: Draco
time: 2021-03-21 15:26:08
categories: 
  - 面试
tags: 
  - 面试
  - 操作系统
---









## 参考

> - https://www.cnblogs.com/inception6-lxc/p/9073983.html







## 进程和线程

- 进程是对运行时程序的封装，是系统进行资源调度和分配的的基本单位，实现了操作系统的并发；
- 线程是进程的子任务，是CPU调度和分派的基本单位，用于保证程序的 实时性，实现进程内部的并发；
- 一个程序至少有一个进程，一个进程至少有一个线程，线程依赖于进程而存在；
- 进程在执行过程中拥有独立的内存单元，而多个线程共享进程的内存。



线程是进程划分成的更⼩的运⾏单位,⼀个进程在其执⾏的过程中可以产⽣多个线程。线程和进 程最⼤的不同在于基本上各进程是独⽴的，⽽各线程则不⼀定，因为同⼀进程中的线程极有可能会相互 影响。线程执⾏开销⼩，但不利于资源的管理和保护；⽽进程正相反



### 进程



#### 进程的状态

- 创建状态(new) ：进程正在被创建，尚未到就绪状态。 
- 就绪状态(ready) ：进程已处于准备运⾏状态，即进程获得了除了处理器之外的⼀切所需资源， ⼀旦得到处理器资源(处理器分配的时间⽚)即可运⾏。 
- 运⾏状态(running) ：进程正在处理器上上运⾏(单核 CPU 下任意时刻只有⼀个进程处于运⾏状 态)。 
- 阻塞状态(waiting) ：⼜称为等待状态，进程正在等待某⼀事件⽽暂停运⾏如等待某资源为可⽤ 或等待 IO 操作完成。即使处理器空闲，该进程也不能运⾏。 
- 结束状态(terminated) ：进程正在从系统中消失。可能是进程正常结束或其他原因中断退出运 ⾏。



![Aryfbt](https://blog-1300186248.cos.ap-shanghai.myqcloud.com/OperatingSustem/%E8%BF%9B%E7%A8%8B%E7%9A%84%E4%BA%94%E7%A7%8D%E7%8A%B6%E6%80%81.png)





#### 进程的七种通信方式

参考

> - [进程间通信IPC (InterProcess Communication)](https://www.jianshu.com/p/c1015f5ffa74)



1. **管道/匿名管道(Pipes) ：**⽤于具有亲缘关系的⽗⼦进程间或者兄弟进程之间的通信。 
2. **有名管道(Names Pipes) :** 匿名管道由于没有名字，只能⽤于亲缘关系的进程间通信。为了克服 这个缺点，提出了有名管道。有名管道严格遵循先进先出(first in first out)。有名管道以磁 盘⽂件的⽅式存在，可以实现本机任意两个进程通信。 
3. **信号(Signal) ：**信号是⼀种⽐较复杂的通信⽅式，⽤于通知接收进程某个事件已经发⽣； 
4. **消息队列(Message Queuing) ：**消息队列是消息的链表,具有特定的格式,存放在内存中并由消息 队列标识符标识。管道和消息队列的通信数据都是先进先出**的**原则。与管道（⽆名管道：只存在 于内存中的⽂件；命名管道：存在于实际的磁盘介质或者⽂件系统）不同的是消息队列存放在内 核中，只有在内核重启(即，操作系统重启)或者显示地删除⼀个消息队列时，该消息队列才会被 真正的删除。消息队列可以实现消息的随机查询,消息不⼀定要以先进先出的次序读取,也可以按 消息的类型读取.⽐ FIFO 更有优势。消息队列克服了信号承载信息量少，管道只能承载⽆格式 字 节流以及缓冲区⼤⼩受限等缺。 
5. **信号量(Semaphores) ：**信号量是⼀个计数器，⽤于多进程对共享数据的访问，信号量的意图在 于进程间同步。这种通信⽅式主要⽤于解决与同步相关的问题并避免竞争条件。
6. **共享内存(Shared memory) ：**使得多个进程可以访问同⼀块内存空间，不同进程可以及时看到对 ⽅进程中对共享内存中数据的更新。这种⽅式需要依靠某种同步操作，如互斥锁和信号量等。可 以说这是最有⽤的进程间通信⽅式。
7. **套接字(Sockets) :** 此⽅法主要⽤于在客户端和服务器之间通过⽹络进⾏通信。套接字是⽀持 TCP/IP 的⽹络通信的基本操作单元，可以看做是不同主机之间的进程进⾏双向通信的端点，简 单的说就是通信的两⽅的⼀种约定，⽤套接字中的相关函数来完成通信过程。







#### 进程的调度算法

- **先到先服务(FCFS)调度算法 :** 从就绪队列中选择⼀个最先进⼊该队列的进程为之分配资源，使 它⽴即执⾏并⼀直执⾏到完成或发⽣某事件⽽被阻塞放弃占⽤ CPU 时再重新调度。 
- **短作业优先(SJF)的调度算法 :** 从就绪队列中选出⼀个估计运⾏时间最短的进程为之分配资源， 使它⽴即执⾏并⼀直执⾏到完成或发⽣某事件⽽被阻塞放弃占⽤ CPU 时再重新调度。 
- **时间⽚轮转调度算法 :** 时间⽚轮转调度是⼀种最古⽼，最简单，最公平且使⽤最⼴的算法，⼜ 称 RR(Round robin)调度。每个进程被分配⼀个时间段，称作它的时间⽚，即该进程允许运⾏的 时间。 
- **多级反馈队列调度算法 ：**前⾯介绍的⼏种进程调度的算法都有⼀定的局限性。如短进程优先的 调度算法，仅照顾了短进程⽽忽略了⻓进程 。多级反馈队列调度算法既能使⾼优先级的作业得 到响应⼜能使短作业（进程）迅速完成。，因⽽它是⽬前被公认的⼀种较好的进程调度算法， UNIX 操作系统采取的便是这种调度算法。 
- **优先级调度 ：** 为每个流程分配优先级，⾸先执⾏具有最⾼优先级的进程，依此类推。具有相同 优先级的进程以 FCFS ⽅式执⾏。可以根据内存要求，时间要求或任何其他资源要求来确定优先 级。



### 线程



#### 线程的状态/⽣命周期和状态

![线程生命周期](D:\repository\static-blog\src\Interview\images\Computer_other_interview_questions\Thread_life-cycle.jpg)



线程在⽣命周期中并不是固定处于某⼀个状态⽽是随着代码的执⾏在不同状态之间切换。Java 线程状 态变迁如下图所示（图源《Java 并发编程艺术》4.1.4 节）：

![线程生命周期2](D:\repository\static-blog\src\Interview\images\Computer_other_interview_questions\Thread_life-cycle_2.jpg)

由上图可以看出：线程创建之后它将处于 NEW（新建） 状态，调⽤ start() ⽅法后开始运⾏，线程 这时候处于 READY（可运⾏） 状态。可运⾏状态的线程获得了 CPU 时间⽚（timeslice）后就处于 RUNNING（运⾏） 状态。

​		当线程执⾏ **wait()** ⽅法之后，线程进⼊ **WAITING（等待）** 状态。进⼊等待状态的线程需要依靠其他 线程的通知才能够返回到运⾏状态，⽽ TIME_WAITING(超时等待) 状态相当于在等待状态的基础上增加 了超时限制，⽐如通过 sleep（long millis） ⽅法或 wait（long millis） ⽅法可以将 Java 线程置于 TIMED WAITING 状态。当超时时间到达后 Java 线程将会返回到 RUNNABLE 状态。当线程调 ⽤同步⽅法时，在没有获取到锁的情况下，线程将会进⼊到 BLOCKED（阻塞） 状态。线程在执⾏ Runnable 的 run() ⽅法之后将会进⼊到 TERMINATED（终⽌） 状态。







#### 线程等待的两种方法

- sleep() 
- wait()



##### 相同不同点

两者最主要的区别在于：sleep ⽅法没有释放锁，⽽ wait ⽅法释放了锁 。 

两者都可以暂停线程的执⾏。 Wait 通常被⽤于线程间交互/通信，sleep 通常被⽤于暂停执⾏。 

wait() ⽅法被调⽤后，线程不会⾃动苏醒，需要别的线程调⽤同⼀个对象上的 notify() 或者 notifyAll() ⽅法。

sleep() ⽅法执⾏完成后，线程会⾃动苏醒。或者可以使⽤ wait(long timeout)超时后线程会⾃动苏醒。



#### 线程间的同步的⽅式

线程同步是两个或多个共享关键资源的线程的并发执⾏。应该同步线程以避免关键的资源使 ⽤冲突。操作系统⼀般有下⾯三种线程同步的⽅式：



1. **互斥量(Mutex)：**采⽤互斥对象机制，只有拥有互斥对象的线程才有访问公共资源的权限。因为 互斥对象只有⼀个，所以可以保证公共资源不会被多个线程同时访问。⽐如 Java 中的 synchronized 关键词和各种 Lock 都是这种机制。 
2. **信号量(Semphares) ：**它允许同⼀时刻多个线程访问同⼀资源，但是需要控制同⼀时刻访问此资 源的最⼤线程数量 
3. **事件(Event) :Wait/Notify：**通过通知操作的⽅式来保持多线程同步，还可以⽅便的实现多线程 优先级的⽐᫾操







### 多进程和多线程

| 维度           | 多进程                                                       | 多线程                                     | 总结     |
| -------------- | ------------------------------------------------------------ | ------------------------------------------ | -------- |
| 数据共享丶同步 | 数据是分开的:共享复杂，需要用IPC;同步简单                    | 多线程共享进程数据：共享简单；同步复杂     | 各有优势 |
| 内存、CPU      | 占用内存多，切换复杂，CPU利用率低                            | 占用内存少，切换简单，CPU利用率高          | 线程占优 |
| 创建销毁、切换 | 创建销毁、切换复杂，速度慢                                   | 创建销毁、切换简单，速度快                 | 线程占优 |
| 编程调试       | 编程简单，调试简单                                           | 编程复杂，调试复杂                         | 进程占优 |
| 可靠性         | 进程间不会相互影响                                           | 一个线程挂掉导致整个进程挂掉，守护线程除外 | 进程占优 |
| 分布式         | 适应于多核、多机分布 ；如果一台机器不够，扩展到多台机器比较简单 | 适应于多核分布                             | 进程占优 |



- IO密集型，大部分时间在处理I/O请求，不需要CPU提供多大算力，这是后频繁切换可以提高并发性，所以I/O密集型的处理，希望在高并发下进行，多线程并发消耗资源少。
- CPU密集型，占用CPU算力大，希望能获得更长的时间轮片而不是经常切换；这样使用进程较好，进程本身优于线程，只是切换调度消耗的资源多。

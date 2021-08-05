(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{879:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"java线程同步机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java线程同步机制"}},[s._v("#")]),s._v(" Java线程同步机制")]),s._v(" "),t("h3",{attrs:{id:"同步机制简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同步机制简介"}},[s._v("#")]),s._v(" 同步机制简介")]),s._v(" "),t("p",[s._v("对于同一个个许可证所保护的共享数据而言，任何线程访问这些共享数据前必须先持有该许可证。")]),s._v(" "),t("ul",[t("li",[s._v("一个线程只有在持有许可证的情况下才能够对这些共享数据进行访问；")]),s._v(" "),t("li",[s._v("一个许可证一 一次只能够被个线程持有；")]),s._v(" "),t("li",[s._v("许可证的持有线程在其结束对这些共享数据的访问后必须让出（释放） 其持有的许可证， 以便其他线程能够对这些共享数据进行访问。")])]),s._v(" "),t("p",[s._v("一个线程在访间共享数据前必须申请相应的锁（许可证）， 线程的这个动作被称为锁的获得 (Acquire)。一个线程获得某个锁（持有许可证），我们就称该线程为相应锁的持 有线程（线程持有许可证），一个锁一次只能被一个线程持有。锁的持有线程可以对该锁所保护的共享数据进行访问，访问结束后该线程必须释放 (Release) 相应的锁。锁的持有 线程在其获得锁之后和 释放锁之前这段时间内所执行的代码被称为临界区 (Critical Section)。因此，共享数据只允许在临界区内进行访问，临界区一次只能被一个线程执行。")]),s._v(" "),t("h3",{attrs:{id:"临界区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#临界区"}},[s._v("#")]),s._v(" 临界区")]),s._v(" "),t("p",[s._v("锁的持有线程在获得锁之后和释放锁之前这段时间内所执行的代码被称为临界区。共享数据只能在临界区内进行访问，临界区一次只能被一个线程执行。")]),s._v(" "),t("h3",{attrs:{id:"锁简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁简介"}},[s._v("#")]),s._v(" 锁简介")]),s._v(" "),t("p",[s._v("锁具有"),t("code",[s._v("排他性")]),s._v("，一次只能被一个线程持有，被称为"),t("code",[s._v("排它锁")]),s._v("或"),t("code",[s._v("互斥锁")]),s._v("。")]),s._v(" "),t("p",[s._v("按照虚拟机对锁的实现划分，分为")]),s._v(" "),t("ul",[t("li",[s._v("内部锁（Intrinsic Lock）：非公平锁，例如"),t("code",[s._v("sychronized")])]),s._v(" "),t("li",[s._v("显示锁（Explicit Lock）支持"),t("code",[s._v("非公平锁")]),s._v("和"),t("code",[s._v("公平锁")]),s._v("，例如JUC包下的"),t("code",[s._v("Lock")]),s._v("等实现类"),t("code",[s._v("ReentrenLock")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://blog-1300186248.cos.ap-shanghai.myqcloud.com/Java-MultiThread-2/%E4%BA%92%E6%96%A5%E9%94%81%E7%A4%BA%E6%84%8F%E5%9B%BE.png",alt:"互斥锁示意图"}})]),s._v(" "),t("h2",{attrs:{id:"锁的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁的概念"}},[s._v("#")]),s._v(" 锁的概念")]),s._v(" "),t("h3",{attrs:{id:"可重入性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可重入性"}},[s._v("#")]),s._v(" 可重入性")]),s._v(" "),t("p",[s._v("一个线程在持有一个锁的时候还能够继续成功申请该锁，就称该锁具有可重入性，反之则称为非可重入性。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("methodA")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("acquireLock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("／／申请锁lock\n  ／／省略其他代码\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("methodB")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("releaseLock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("／／释放锁lock\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("methodB")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("acquireLock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("／／申请锁lock\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("releaseLock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("／／释放锁lock\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("方法methodA使用了锁lock，该锁引导的临界区代码又调用了另外一个方法methodB,而方法methodB也使用了lock。那么， 这就产生了一个问题：methodA的执行线程持有锁 lock 的时候调用了methodB, 而methodB执行的时候又去申请锁lock, 而lock此时正被当前线程持有（未被释放）。那么，此时methodB究竟能否获得（申请成功） lock呢？可重入性就描述了这样一个问题。")]),s._v(" "),t("h4",{attrs:{id:"实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[s._v("#")]),s._v(" 实现原理")]),s._v(" "),t("p",[s._v("可重入锁可以被理解为一个对象，该对象包含一个"),t("code",[s._v("计数器属性")]),s._v("。计数器属性的初始值为 0, 表示相应的锁还没有被任何线程持有。")]),s._v(" "),t("ul",[t("li",[s._v("每次线程获得一个可重入锁的时候， 该锁的 计数器值会被增加1。")]),s._v(" "),t("li",[s._v("每次一个线程释放锁的时候， 该锁的计数器属性值就会被减1。")])]),s._v(" "),t("p",[s._v("可重入锁的持有线程初次获得该锁时相应的开销相对大，这是因为该锁的持有线程必须与其他线程 ”竞争” 以获得锁。")]),s._v(" "),t("p",[s._v("可重入锁的持有线程继续荻得相应锁所产生的开销要小得 多，这是因为此时Java虚拟机只需要将相应锁的计数器属性值增加1即可以实现锁的获得。")]),s._v(" "),t("h3",{attrs:{id:"锁的粒度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁的粒度"}},[s._v("#")]),s._v(" 锁的粒度")]),s._v(" "),t("p",[s._v("一个锁实例可以保护一个或者多个共享数据，一个实例所保护的共享数据的数量大小就被称为该锁的粒度，锁保护的共享数据越大，我们就称该锁的粒度越粗，反之则称粒度细。")]),s._v(" "),t("h2",{attrs:{id:"锁的开销"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁的开销"}},[s._v("#")]),s._v(" 锁的开销")]),s._v(" "),t("ul",[t("li",[s._v("锁的申请和释放所产生的开销（主要是时间开销）")]),s._v(" "),t("li",[s._v("锁的上下文切换（主要是时间开销）：锁作为一种排他性资源，一旦被争用就可能导致上下文切换，而没有被争用的锁则可能不会导致上下文切换")]),s._v(" "),t("li",[s._v("锁泄露")]),s._v(" "),t("li",[s._v("死锁锁死活锁饿死等线程其他活性故障。")])]),s._v(" "),t("h3",{attrs:{id:"锁泄露"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁泄露"}},[s._v("#")]),s._v(" 锁泄露")]),s._v(" "),t("p",[s._v("锁泄露指一个线程获得该锁之后，由于程序的错误、缺陷导致该锁一直无法被释放而其他线程一直无法获得该锁的现象。因此，锁泄露会导致同步在该锁上的所有线程都无法进展。")]),s._v(" "),t("h2",{attrs:{id:"sychronized-内部锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sychronized-内部锁"}},[s._v("#")]),s._v(" Sychronized（内部锁）")]),s._v(" "),t("p",[s._v("Java平台中的任何一个对象都有唯一一个与之关联的锁。 这种锁被称为"),t("code",[s._v("监视器 (Monitor) `或者`内部锁 (Intrinsic Lock)")]),s._v("。内部锁是一种"),t("code",[s._v("排他锁")]),s._v("，它能够保障")]),s._v(" "),t("ul",[t("li",[s._v("原子性")]),s._v(" "),t("li",[s._v("可见性")]),s._v(" "),t("li",[s._v("有序性")])]),s._v(" "),t("p",[s._v("内部锁是通过 synchronized 关键字实现的。")]),s._v(" "),t("h3",{attrs:{id:"使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[s._v("#")]),s._v(" 使用方法")]),s._v(" "),t("ul",[t("li",[s._v("synchronized 关键字修饰的方法就被称为同步方法(SynchronizedMethod)")]),s._v(" "),t("li",[s._v("synchronized修饰的静态方法就被称为同步静态方法")]),s._v(" "),t("li",[s._v("synchronized修饰的实例 方法就被称为同步实例方法")]),s._v(" "),t("li",[s._v("同步方法的整个方法体就是一个临界区。")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Synchronized")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("锁句柄"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//在此代码块访问共享数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("synchronized关键字所引导的代码块就是临界区 。锁句柄是一个对象的引用（或者能够返回对象的表达式）。例如，锁句柄可以填写为this 关键字（表示当前对象）。")]),s._v(" "),t("p",[s._v("习惯上我们也直接称锁句柄为锁。锁句柄对应的监视器就被称为相应同步块的引导锁。相应地， 我们称呼相应的同步块为该锁引导的同步块。")]),s._v(" "),t("blockquote",[t("p",[s._v("锁句柄通常采用final修饰（private final）。这是因为锁句柄的值一旦改变，会导致同一个代码块的多个线程实际上使用不同的锁，而导致竞态。")])]),s._v(" "),t("h3",{attrs:{id:"同步静态方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同步静态方法"}},[s._v("#")]),s._v(" 同步静态方法")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SynchronizedMethodExample")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" sysnchronized "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("staticMethod")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//在此访问共享数据")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//相当于")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SynchronizedMethodExample")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("staticMethod")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sysnchronized")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SynchronizedMethodExample")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//在此访问共享数据")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("线程在执行临界区代码的时候必须持有该临界区的"),t("code",[s._v("引导锁")]),s._v("。一个线程执行到同步代码块必须申请该同步块的引导锁，只有申请成功该锁的线程才能够执行相的应临界区。")]),s._v(" "),t("p",[s._v("一旦执行完临界区代码，引导该临界区的锁就会被自动释放。整个内部锁申请和释放的过程都是由"),t("code",[s._v("java虚拟机")]),s._v("负责实施的，所以synchronized实现的锁被称为"),t("code",[s._v("内部锁")]),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("内部锁不会导致锁泄露")]),s._v("，java编译器在将同步代码块编译成字节码的时候，对临界区可能抛出的异常（未被捕获）进行了处理，所以即使临界区代码抛出异常也不会妨碍内部锁的释放。")]),s._v(" "),t("h3",{attrs:{id:"内部锁的调度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内部锁的调度"}},[s._v("#")]),s._v(" 内部锁的调度")]),s._v(" "),t("p",[s._v("Java虚拟机会为每个内部锁分配一个"),t("code",[s._v("入口集(Entry Set)")]),s._v("， 用于记录等待获得相应内部锁的线程。")]),s._v(" "),t("p",[s._v("多个线程申请同一个锁的时候，只有一个申请者能够成为该锁的持有线程（即申请锁的操作成功）， 而其他申请者的申请操作会失败。 这些申请失败的线程并不会抛出异常， 而是会被暂停（生命周期状态变为"),t("code",[s._v("BLOCKED")]),s._v(") 并被存入相应锁的入口集中等待再次申请锁的机会。")]),s._v(" "),t("p",[s._v("入口集中的线程就被称为相应内部锁的等待线程。当这些线程申请的锁被其持有线程释放的时候， "),t("strong",[s._v("该锁的入口集中的一个任意线程会被Java虚拟机唤醒")]),s._v("， 从而得到再次申请锁的机会。")]),s._v(" "),t("p",[s._v("由于Java虚拟机对内部锁的调度"),t("code",[s._v("仅支持非公平调度")]),s._v("， 被唤醒的等待线程占用处理器运行时可能还有其他新的活跃线程 （处于 RUNNABLE状态，且未进入过入口集）与该线程抢占这个被释放锁， 因此被唤醒的线程不一定就能成为该锁的持有 线程。")]),s._v(" "),t("p",[s._v("另外，Java虚拟机如何从一个锁的入口集中选择一个等待线程，作为下一个可以参与再次申请相应锁的线程，这个细节与Java虚拟机的具体实现有关：这个被选中的线程有可能是入口集中等待时间最长的线程， 也可能是等待时间最短的线程，或者完全是随机。")]),s._v(" "),t("h2",{attrs:{id:"lock接口-显示锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lock接口-显示锁"}},[s._v("#")]),s._v(" Lock接口（显示锁）")])])}),[],!1,null,null,null);a.default=e.exports}}]);
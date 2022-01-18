(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{866:function(t,a,v){"use strict";v.r(a);var _=v(1),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://blog.csdn.net/PorkBird/article/details/113727704",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java8新特性"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"jdk8"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jdk8"}},[t._v("#")]),t._v(" jdk8")]),t._v(" "),v("ul",[v("li",[t._v("Lambda表达式")]),t._v(" "),v("li",[t._v("函数式接口")]),t._v(" "),v("li",[t._v("方法引用/构造器")]),t._v(" "),v("li",[t._v("Stream流 API")]),t._v(" "),v("li",[t._v("接口的增强")]),t._v(" "),v("li",[t._v("Optiona类")]),t._v(" "),v("li",[t._v("新的时间和日期API")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-1300186248.cos.ap-shanghai.myqcloud.com/Java-NewFeature/jdk8新特性.png",alt:"image-20211017210905258"}})]),t._v(" "),v("h3",{attrs:{id:"lambda表达式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#lambda表达式"}},[t._v("#")]),t._v(" Lambda表达式")]),t._v(" "),v("p",[t._v("总结六种情况")]),t._v(" "),v("ul",[v("li",[t._v("-> 左边：Lambda形参列表的参数类型可以沈省略(类型推断)；如果Lambda形参别表至少是一个参数，括号也可以省略")]),t._v(" "),v("li",[t._v("-> 右边：Lambda应该用"),v("code",[t._v("{}")]),t._v("包裹，如果Lambda只有一条执行语句，可以省略return和括号")])]),t._v(" "),v("h3",{attrs:{id:"函数式接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#函数式接口"}},[t._v("#")]),t._v(" 函数式接口")]),t._v(" "),v("p",[t._v("如果一个接口中，只声明了一个抽象方法，则此接口就称为函数式接口。我们可以在一个接口使用"),v("code",[t._v("@FunctionalInterface")]),t._v(" 注解， 这样做可以检查它是否是一个函数式接口。")]),t._v(" "),v("blockquote",[v("p",[t._v("Lambda表达式的本质：作为函数式接口的实例化")])]),t._v(" "),v("ul",[v("li",[t._v("简单的说，在Java8中，Lambda表达式就是一个函数式接口的实例。这就是Lambda表达式和函数式接口的关系。也就是说，"),v("strong",[t._v("只要一个对象是函数式接口的实例，那么该对象就可以用Lambda表达式来表示")]),t._v("。")]),t._v(" "),v("li",[v("strong",[t._v("所以以前用匿名实现类表示的现在都可以用Lambda表达式来写。")])])]),t._v(" "),v("p",[t._v("Java内置核心函数接口")]),t._v(" "),v("ul",[v("li",[t._v("消费型接口 Consumer"),v("T",[t._v("     void accept(T t)")])],1),t._v(" "),v("li",[t._v("供给型接口 Supplier"),v("T",[t._v("     T get()")])],1),t._v(" "),v("li",[t._v("函数型接口 Function<T,R>   R apply(T t)")]),t._v(" "),v("li",[t._v("断定型接口 Predicate"),v("T",[t._v("    boolean test(T t)")])],1)]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-1300186248.cos.ap-shanghai.myqcloud.com/Java-NewFeature/函数式接口.png",alt:"image-20211023141750400"}})]),t._v(" "),v("h3",{attrs:{id:"方法引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方法引用"}},[t._v("#")]),t._v(" 方法引用")]),t._v(" "),v("p",[t._v("当要传递给Lambda体的操作，已经有实现的方法了，可以使用方法引用！\n方法引用可以看做是Lambda表达式深层次的表达。换句话说，方法引用就是Lambda表达式，也就是函数式接口的一个实例，通过方法的名字来指向一个方法，可以认为是Lambda表达式的一个语法糖。\n要求：实现接口的抽象方法的参数列表和返回值类型，必须与方法引用的方法的参数列表和返回值类型保持一致！\n格式：使用操作符“::” 将类(或对象) 与方法名分隔开来。")]),t._v(" "),v("p",[t._v("如下三种主要使用情况：")]),t._v(" "),v("ul",[v("li",[t._v("对象::实例方法名")]),t._v(" "),v("li",[t._v("类::静态方法名")]),t._v(" "),v("li",[t._v("类::实例方法名")])]),t._v(" "),v("h3",{attrs:{id:"stream流api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#stream流api"}},[t._v("#")]),t._v(" Stream流API")]),t._v(" "),v("p",[t._v("1.Stream关注的是对数据的运算，与CPU打交道")]),t._v(" "),v("p",[t._v("集合关注的是数据的存储，与内存打交道")]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li")]),t._v(" "),v("p",[t._v("①Stream 自己不会存储元素。")]),t._v(" "),v("p",[t._v("②Stream 不会改变源对象。相反，他们会返回一个持有结果的新Stream。")]),t._v(" "),v("p",[t._v("③Stream 操作是延迟执行的。这意味着他们会等到需要结果的时候才执行")]),t._v(" "),v("p",[t._v("3.Stream 执行流程")]),t._v(" "),v("p",[t._v("① Stream的实例化")]),t._v(" "),v("p",[t._v("② 一系列的中间操作（过滤、映射、...)")]),t._v(" "),v("p",[t._v("③ 终止操作")]),t._v(" "),v("p",[t._v("4.说明：")]),t._v(" "),v("p",[t._v("4.1 一个中间操作链，对数据源的数据进行处理")]),t._v(" "),v("p",[t._v("4.2 一旦执行终止操作，就执行中间操作链，并产生结果。之后，不会再被使用")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-1300186248.cos.ap-shanghai.myqcloud.com/Java-NewFeature/stream处理流程.png",alt:"image-20211017210932065"}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-1300186248.cos.ap-shanghai.myqcloud.com/Java-NewFeature/20181223012834784.png",alt:"操作总览"}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-1300186248.cos.ap-shanghai.myqcloud.com/Java-NewFeature/stream图.png",alt:"img"}})]),t._v(" "),v("h4",{attrs:{id:"中间操作-筛选与切片"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#中间操作-筛选与切片"}},[t._v("#")]),t._v(" 中间操作：筛选与切片")]),t._v(" "),v("p",[t._v("多个中间操作可以连接起来形成一个流水线，除非流水线上触发终止操作，否则中间操作不会执行任何的处理！而在终止操作时一次性全部处理，称为“惰性求值”。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("方法")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("filter(Predicate p)")]),t._v(" "),v("td",[t._v("接收Lambda ，从流中排除某些元素")])]),t._v(" "),v("tr",[v("td",[t._v("distinct()")]),t._v(" "),v("td",[t._v("筛选，通过流所生成元素的hashCode() 和equals() 去除重复元素")])]),t._v(" "),v("tr",[v("td",[t._v("limit(long maxSize)")]),t._v(" "),v("td",[t._v("截断流，使其元素不超过给定数量")])]),t._v(" "),v("tr",[v("td",[t._v("skip(long n)")]),t._v(" "),v("td",[t._v("跳过元素，返回一个扔掉了前n 个元素的流。若流中元素不足n 个，则返回一个空流。与limit(n)互补")])])])]),t._v(" "),v("h4",{attrs:{id:"中间操作-映射"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#中间操作-映射"}},[t._v("#")]),t._v(" 中间操作：映射")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("方法")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("map(Function f)")]),t._v(" "),v("td",[t._v("接收一个函数作为参数，该函数会被应用到每个元素上，并将其映射成一个新的元素。")])]),t._v(" "),v("tr",[v("td",[t._v("mapToDouble(ToDoubleFunction f)")]),t._v(" "),v("td",[t._v("接收一个函数作为参数，该函数会被应用到每个元素上，产生一个新的DoubleStream。")])]),t._v(" "),v("tr",[v("td",[t._v("mapToInt(ToIntFunction f)")]),t._v(" "),v("td",[t._v("接收一个函数作为参数，该函数会被应用到每个元素上，产生一个新的IntStream。")])]),t._v(" "),v("tr",[v("td",[t._v("mapToLong(ToLongFunction f)")]),t._v(" "),v("td",[t._v("接收一个函数作为参数，该函数会被应用到每个元素上，产生一个新的LongStream。")])]),t._v(" "),v("tr",[v("td",[t._v("flatMap(Function f)")]),t._v(" "),v("td",[t._v("接收一个函数作为参数，将流中的每个值都换成另一个流，然后把所有流连接成一个流")])]),t._v(" "),v("tr",[v("td",[t._v("peek(Consumer c)")]),t._v(" "),v("td",[t._v("接收一个函数作为参数，不同于map有返回值，peek无返回值")])])])]),t._v(" "),v("h4",{attrs:{id:"中间操作-排序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#中间操作-排序"}},[t._v("#")]),t._v(" 中间操作：排序")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("方法")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("sorted()")]),t._v(" "),v("td",[t._v("产生一个新流，其中按自然顺序排序")])]),t._v(" "),v("tr",[v("td",[t._v("sorted(Comparator com)")]),t._v(" "),v("td",[t._v("产生一个新流，其中按比较器顺序排序")])])])]),t._v(" "),v("h4",{attrs:{id:"终止操作-匹配与查找"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#终止操作-匹配与查找"}},[t._v("#")]),t._v(" 终止操作：匹配与查找")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("方法")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("allMatch(Predicate p)")]),t._v(" "),v("td",[t._v("检查是否匹配所有元素")])]),t._v(" "),v("tr",[v("td",[t._v("anyMatch(Predicate p)")]),t._v(" "),v("td",[t._v("检查是否至少匹配一个元素")])]),t._v(" "),v("tr",[v("td",[t._v("noneMatch(Predicate p)")]),t._v(" "),v("td",[t._v("检查是否没有匹配所有元素")])]),t._v(" "),v("tr",[v("td",[t._v("findFirst()")]),t._v(" "),v("td",[t._v("返回第一个元素")])]),t._v(" "),v("tr",[v("td",[t._v("findAny()")]),t._v(" "),v("td",[t._v("返回当前流中的任意元素")])]),t._v(" "),v("tr",[v("td",[t._v("count()")]),t._v(" "),v("td",[t._v("返回流中元素总数")])]),t._v(" "),v("tr",[v("td",[t._v("max(Comparator c)")]),t._v(" "),v("td",[t._v("返回流中最大值")])]),t._v(" "),v("tr",[v("td",[t._v("min(Comparator c)")]),t._v(" "),v("td",[t._v("返回流中最小值")])]),t._v(" "),v("tr",[v("td",[t._v("forEach(Consumer c)")]),t._v(" "),v("td",[t._v("内部迭代(使用Collection 接口需要用户去做迭代，称为外部迭代。相反，Stream API 使用内部迭代——它帮你把迭代做了)")])])])]),t._v(" "),v("h4",{attrs:{id:"终止操作-归约"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#终止操作-归约"}},[t._v("#")]),t._v(" 终止操作：归约")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("方法")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("reduce(T iden, BinaryOperator b)")]),t._v(" "),v("td",[t._v("可以将流中元素反复结合起来，得到一个值。返回T")])]),t._v(" "),v("tr",[v("td",[t._v("reduce(BinaryOperator b)")]),t._v(" "),v("td",[t._v("可以将流中元素反复结合起来，得到一个值。返回Optional")])])])]),t._v(" "),v("blockquote",[v("p",[t._v("map 和reduce 的连接通常称为map-reduce 模式，因Google 用它来进行网络搜索而出名。")])]),t._v(" "),v("ul",[v("li",[t._v("Optional reduce(BinaryOperator accumulator)：第一次执行时，accumulator函数的第一个参数为流中的第一个元素，第二个参数为流中元素的第二个元素；第二次执行时，第一个参数为第一次函数执行的结果，第二个参数为流中的第三个元素；依次类推。")]),t._v(" "),v("li",[t._v("T reduce(T identity, BinaryOperator accumulator)：流程跟上面一样，只是第一次执行时，accumulator函数的第一个参数为identity，而第二个参数为流中的第一个元素。")])]),t._v(" "),v("h4",{attrs:{id:"终止操作-收集"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#终止操作-收集"}},[t._v("#")]),t._v(" 终止操作：收集")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("方法")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("collect(Collector c)")]),t._v(" "),v("td",[t._v("将流转换为其他形式。接收一个Collector接口的实现，用于给Stream中元素做汇总的方法")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-1300186248.cos.ap-shanghai.myqcloud.com/Java-NewFeature/Collectors1.png",alt:"img"}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-1300186248.cos.ap-shanghai.myqcloud.com/Java-NewFeature/Collectors2.png",alt:"img"}})]),t._v(" "),v("h4",{attrs:{id:"并行流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#并行流"}},[t._v("#")]),t._v(" 并行流")]),t._v(" "),v("p",[t._v("参考")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://www.cnblogs.com/baidawei/p/9370048.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("并行流"),v("OutboundLink")],1)])]),t._v(" "),v("p",[t._v("注意")]),t._v(" "),v("ul",[v("li",[t._v("在现实中，对顺序流调用 parallel 方法并不意味着流本身有任何实际的变化。它在内部实际上就是设了一个 boolean 标志，表示你想让调用 parallel 之后进行的所有操作都并行执行。")]),t._v(" "),v("li",[t._v("类似地，你只需要对并行流调用 sequential 方法就可以把它变成顺序流。")]),t._v(" "),v("li",[t._v("如果有多个，调用的方式是看最后一次 parallel 或 sequential从而决定整体流水线调用方式")])]),t._v(" "),v("p",[t._v("关于效率问题")]),t._v(" "),v("p",[t._v("参考："),v("a",{attrs:{href:"https://blog.csdn.net/ryo1060732496/article/details/88831864",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/ryo1060732496/article/details/88831864"),v("OutboundLink")],1)]),t._v(" "),v("h3",{attrs:{id:"optional"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#optional"}},[t._v("#")]),t._v(" Optional")]),t._v(" "),v("ul",[v("li",[t._v("Optional 类(java.util.Optional) 是一个容器类，它可以保存类型T的值，代表这个值存在。或者仅仅保存null，表示这个值不存在。原来用null 表示一个值不存在，现在Optional 可以更好的表达这个概念。并且可以避免空指针异常。Optional类的Javadoc描述如下：这是一个可以为null的容器对象。如果值存在则isPresent()方法会返回true，调用get()方法会返回该对象。")]),t._v(" "),v("li",[t._v("Optional提供很多有用的方法，这样我们就不用显式进行空值检测。")]),t._v(" "),v("li",[t._v("创建Optional类对象的方法：\n"),v("ul",[v("li",[v("code",[t._v("Optional.of(T t)")]),t._v(": 创建一个Optional 实例，t必须非空，否则抛NP异常")]),t._v(" "),v("li",[v("code",[t._v("Optional.empty()")]),t._v(" : 创建一个空的Optional 实例")]),t._v(" "),v("li",[v("code",[t._v("Optional.ofNullable(T t)")]),t._v("：t可以为null")])])]),t._v(" "),v("li",[t._v("判断Optional容器中是否包含对象\n"),v("ul",[v("li",[v("code",[t._v("boolean isPresent()")]),t._v(" : 判断是否包含对象")]),t._v(" "),v("li",[v("code",[t._v("void ifPresent(Consumer<? super T> consumer)")]),t._v(" ：如果有值，就执行Consumer接口的实现代码，并且该值会作为参数传给它。")])])]),t._v(" "),v("li",[t._v("获取Optional容器的对象：\n"),v("ul",[v("li",[v("code",[t._v("T get()")]),t._v(": 如果调用对象包含值，返回该值，否则抛异常")]),t._v(" "),v("li",[v("code",[t._v("T orElse(T other)")]),t._v(" ：如果有值则将其返回，否则返回指定的other对象。")]),t._v(" "),v("li",[v("code",[t._v("T orElseGet(Supplier<? extends T> other)")]),t._v(" ：如果有值则将其返回，否则返回由Supplier接口实现提供的对象。")]),t._v(" "),v("li",[v("code",[t._v("T orElseThrow(Supplier<? extends X> exceptionSupplier)")]),t._v(" ：如果有值则将其返回，否则抛出由Supplier接口实现提供的异常。")])])])]),t._v(" "),v("p",[t._v("of()和get()搭配使用，ofNullable()和orElse()搭配使用")])])}),[],!1,null,null,null);a.default=e.exports}}]);
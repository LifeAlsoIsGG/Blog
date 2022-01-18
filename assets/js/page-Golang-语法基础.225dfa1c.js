(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{849:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://golang.iswbm.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Go编程时光"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://c.biancheng.net/golang/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Go语言入门教程"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.runoob.com/go/go-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("菜鸟教程"),t("OutboundLink")],1)])])]),s._v(" "),t("h2",{attrs:{id:"变量创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量创建"}},[s._v("#")]),s._v(" 变量创建")]),s._v(" "),t("p",[s._v("Go 语言是静态类型语言，由于编译时，编译器会检查变量的类型，所以要求所有的变量都要有明确的类型。")]),s._v(" "),t("p",[t("strong",[s._v("变量在使用前，需要先声明")]),s._v("。声明类型，就约定了你这个变量只能赋该类型的值。")]),s._v(" "),t("p",[s._v("声明一般有以下四种方法")]),s._v(" "),t("blockquote",[t("p",[s._v("其中前面两种同样也可用于定义常量，只需把关键字 "),t("code",[s._v("var")]),s._v(" 变成 "),t("code",[s._v("const")]),s._v(" 即可。")])]),s._v(" "),t("h3",{attrs:{id:"第一种-使用var"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一种-使用var"}},[s._v("#")]),s._v(" 第一种：使用var")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其中 var 是关键字（固定不变），name 是变量名，type 是类型。")]),s._v(" "),t("p",[s._v("使用 var ，虽然只指定了类型，但是 Go 会对其进行"),t("code",[s._v("隐式初始化")]),s._v("，比如")]),s._v(" "),t("ul",[t("li",[s._v("string 类型就初始化为空字符串")]),s._v(" "),t("li",[s._v("int 类型就初始化为0")]),s._v(" "),t("li",[s._v("float 就初始化为 0.0")]),s._v(" "),t("li",[s._v("bool类型就初始化为false")]),s._v(" "),t("li",[s._v("指针类型就初始化为 nil")])]),s._v(" "),t("p",[s._v("若想在声明过程，顺便也初始化，可以这样写")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"字符串"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可以简化为")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[s._v("vat name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"字符串"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("若你的右值带有小数点，在不指定类型的情况下，编译器会将你的这个变量声明为 float64，但是很多情况下，我们并不需要这么高的精度（占用的内存空间更大）")]),s._v(" "),t("p",[s._v("这种情况下，推荐指定类型，不要偷懒")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" rate "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("float32")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.89")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"第二种-使用var多个变量声明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二种-使用var多个变量声明"}},[s._v("#")]),s._v(" 第二种：使用var多个变量声明")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    name "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n    age "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n    gender "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"第三种-使用-声明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三种-使用-声明"}},[s._v("#")]),s._v(" 第三种：使用 := 声明")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v(":=")]),s._v(" （推导声明写法或者短类型声明法：编译器会自动根据右值类型推断出左值的对应类型。），可以声明一个变量，并对其进行（显式）初始化。")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Go"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等价于")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Go"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等价于")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Go"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("只能用于函数内部")])]),s._v(" "),t("h3",{attrs:{id:"第四种-使用-声明多个"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第四种-使用-声明多个"}},[s._v("#")]),s._v(" 第四种：使用 := 声明多个")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wangbm"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这种方法，也经常用于变量的交换")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\nb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("p",[s._v("两个变量要同一个类型")])]),s._v(" "),t("h3",{attrs:{id:"第五种-new-函数声明一个指针变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第五种-new-函数声明一个指针变量"}},[s._v("#")]),s._v(" 第五种：new 函数声明一个指针变量")]),s._v(" "),t("p",[s._v("变量分为两种 "),t("code",[s._v("普通变量")]),s._v(" 和 "),t("code",[s._v("指针变量")])]),s._v(" "),t("div",{staticClass:"custom-block info"},[t("p",{staticClass:"custom-block-title"},[s._v("Info")]),s._v(" "),t("ul",[t("li",[s._v("普通变量：存放的是数据本身")]),s._v(" "),t("li",[s._v("指针变量：存放的是数据的地址。")])])]),s._v(" "),t("p",[s._v("如下代码，age 是一个普通变量，存放的内容是 28，而 ptr 是 存放变量age值的内存地址：0xc000010098")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" age "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" ptr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("age  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// &后面接变量名，表示取出该变量的内存地址")]),s._v("\n    fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age: "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ptr: "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ptr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("输出")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("age:  28\nptr:  0xc000010098\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("而这里要说的 new 函数，是 Go 里的一个内建函数。")]),s._v(" "),t("p",[s._v("使用表达式 "),t("code",[s._v("new(Type)")]),s._v(" 将创建一个Type类型的匿名变量，初始化为Type类型的零值，然后返回"),t("code",[s._v("变量地址")]),s._v("，返回的指针类型为"),t("code",[s._v("*Type")]),s._v("。")]),s._v(" "),t("p",[s._v("用new创建变量和普通变量声明语句方式创建变量没有什么区别，除了不需要声明一个临时变量的名字外，我们还可以在表达式中使用new(Type)。换言之，new函数类似是一种语法糖，而不是一个新的基础概念。")]),s._v(" "),t("p",[s._v("如下两种写法，可以说是等价的")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 new")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newInt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("new")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用传统的方式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("newInt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" dummy "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("dummy\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("以上不管哪种方法，变量/常量都只能声明一次，声明多次，编译就会报错。")]),s._v(" "),t("p",[s._v("但也有例外，这就要说到一个特殊变量："),t("strong",[s._v("匿名变量")]),s._v("，也称作占位符，或者空白标识符，用下划线表示。")]),s._v(" "),t("p",[s._v("匿名变量，优点有三：")]),s._v(" "),t("ul",[t("li",[s._v("不分配内存，不占用内存空间")]),s._v(" "),t("li",[s._v("不需要你为命名无用的变量名而纠结")]),s._v(" "),t("li",[s._v("多次声明不会有任何问题")])]),s._v(" "),t("p",[s._v("通常我们用匿名接收必须接收，但是又不会用到的值。")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[s._v("#")]),s._v(" 数据类型")]),s._v(" "),t("h3",{attrs:{id:"整型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整型"}},[s._v("#")]),s._v(" 整型")]),s._v(" "),t("p",[s._v("Go 语言中，整数类型可以再细分成10个类型，为了方便大家学习，我将这些类型整理成一张表格。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://image.iswbm.com/20200120204329.png",alt:"image1"}})]),s._v(" "),t("blockquote",[t("p",[s._v("int 和 uint 的区别就在于一个 "),t("code",[s._v("u")]),s._v("，有 "),t("code",[s._v("u")]),s._v(" 说明是无符号，没有 "),t("code",[s._v("u")]),s._v(" 代表有符号。")])]),s._v(" "),t("h4",{attrs:{id:"解释这个符号的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解释这个符号的区别"}},[s._v("#")]),s._v(" 解释这个符号的区别")]),s._v(" "),t("p",[s._v("以 "),t("code",[s._v("int8")]),s._v(" 和 "),t("code",[s._v("uint8")]),s._v(" 举例，8 代表 8个bit，能表示的数值个数有 "),t("code",[s._v("2^8 = 256")]),s._v("。")]),s._v(" "),t("p",[s._v("uint8 是无符号，能表示的都是正数，"),t("code",[s._v("0-255")]),s._v("，刚好256个数。")]),s._v(" "),t("p",[s._v("int8 是有符号，既可以正数，也可以负数，那怎么办？对半分呗，"),t("code",[s._v("-128-127")]),s._v("，也刚好 256个数。")]),s._v(" "),t("p",[s._v("int8 int16 int32 int64 这几个类型的最后都有一个数值，这表明了它们能表示的数值个数是固定的。")]),s._v(" "),t("p",[s._v("而 int 并没有指定它的位数，说明它的大小，是可以变化的，那根据什么变化呢？")]),s._v(" "),t("ul",[t("li",[s._v("当你在32位的系统下，int 和 uint 都占用 4个字节，也就是32位。")]),s._v(" "),t("li",[s._v("若你在64位的系统下，int 和 uint 都占用 8个字节，也就是64位。")])]),s._v(" "),t("p",[s._v("出于这个原因，在某些场景下，你应当避免使用 int 和 uint ，而使用更加精确的 int32 和 int64，比如在二进制传输、读写文件的结构描述（为了保持文件的结构不会受到不同编译目标平台字节长度的影响）")]),s._v(" "),t("h4",{attrs:{id:"不同进制的表示方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同进制的表示方法"}},[s._v("#")]),s._v(" 不同进制的表示方法")]),s._v(" "),t("p",[s._v("出于习惯，在初始化数据类型为整型的变量时，我们会使用10进制的表示法，因为它最直观，比如这样，表示整数10.")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("不过，你要清楚，你一样可以使用其他进制来表示一个整数，这里以比较常用的2进制、8进制和16进制举例。")]),s._v(" "),t("p",[s._v("2进制：以"),t("code",[s._v("0b")]),s._v("或"),t("code",[s._v("0B")]),s._v("为前缀")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" num01 "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0b1100")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("8进制：以"),t("code",[s._v("0o")]),s._v("或者 "),t("code",[s._v("0O")]),s._v("为前缀")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" num02 "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0o14")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("16进制：以"),t("code",[s._v("0x")]),s._v(" 为前缀")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" num03 "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xC")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("下面用一段代码分别使用二进制、8进制、16进制来表示 10 进制的数值：12")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" num01 "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0b1100")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" num02 "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0o14")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" num03 "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xC")]),s._v("\n\n    fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2进制数 %b 表示的是: %d \\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8进制数 %o 表示的是: %d \\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"16进制数 %X 表示的是: %d \\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num03"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num03"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("输出如下")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("2进制数 1100 表示的是: 12\n8进制数 14 表示的是: 12\n16进制数 C 表示的是: 12\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("以上代码用过了 fmt 包的格式化功能，你可以参考这里去看上面的代码")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('%b    表示为二进制\n%c    该值对应的unicode码值\n%d    表示为十进制\n%o    表示为八进制\n%q    该值对应的单引号括起来的go语法字符字面值，必要时会采用安全的转义表示\n%x    表示为十六进制，使用a-f\n%X    表示为十六进制，使用A-F\n%U    表示为Unicode格式：U+1234，等价于"U+%04X"\n%E    用科学计数法表示\n%f    用浮点数表示\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"浮点型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浮点型"}},[s._v("#")]),s._v(" 浮点型")]),s._v(" "),t("p",[s._v("浮点数类型的值一般由整数部分、小数点“"),t("code",[s._v(".")]),s._v("”和小数部分组成。")]),s._v(" "),t("p",[s._v("其中，整数部分和小数部分均由10进制表示法表示。不过还有另一种表示方法。那就是在其中加入指数部分。指数部分由“E”或“e”以及一个带正负号的10进制数组成。比如，"),t("code",[s._v("3.7E-2")]),s._v("表示浮点数"),t("code",[s._v("0.037")]),s._v("。又比如，"),t("code",[s._v("3.7E+1")]),s._v("表示浮点数"),t("code",[s._v("37")]),s._v("。")]),s._v(" "),t("p",[s._v("有时候，浮点数类型值的表示也可以被简化。比如，"),t("code",[s._v("37.0")]),s._v("可以被简化为"),t("code",[s._v("37")]),s._v("。又比如，"),t("code",[s._v("0.037")]),s._v("可以被简化为"),t("code",[s._v(".037")]),s._v("。")]),s._v(" "),t("blockquote",[t("p",[s._v("有一点需要注意，在Go语言里，浮点数的相关部分只能由10进制表示法表示，而不能由8进制表示法或16进制表示法表示。比如，"),t("code",[s._v("03.7")]),s._v("表示的一定是浮点数"),t("code",[s._v("3.7")]),s._v("。")])]),s._v(" "),t("h4",{attrs:{id:"float32-和-float64"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#float32-和-float64"}},[s._v("#")]),s._v(" float32 和 float64")]),s._v(" "),t("p",[s._v("Go语言中提供了两种精度的浮点数 float32 和 float64。")]),s._v(" "),t("p",[t("strong",[s._v("float32")]),s._v("，也即我们常说的单精度，存储占用4个字节，也即4*8=32位，其中1位用来符号，8位用来指数，剩下的23位表示尾数")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-749cc641eb4d5dafd085e8c23f8826aa_hd.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("img")]),s._v(" "),t("p",[t("strong",[s._v("float64")]),s._v("，也即我们熟悉的双精度，存储占用8个字节，也即8*8=64位，其中1位用来符号，11位用来指数，剩下的52位表示尾数")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-48240f0e1e0dd33ec89100cbe2d30707_hd.jpg",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"byte、rune与字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#byte、rune与字符串"}},[s._v("#")]),s._v(" byte、rune与字符串")])])}),[],!1,null,null,null);a.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{901:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("参考")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.51cto.com/7424593/1744111",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nginx负载均衡的实现和调度算法"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/canflyfish/p/11580417.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nginx 负载均衡算法"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.jb51.net/article/173410.htm",target:"_blank",rel:"noopener noreferrer"}},[s._v("简单了解Nginx七层负载均衡的几种调度算法"),t("OutboundLink")],1)])])]),s._v(" "),t("h2",{attrs:{id:"算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[s._v("#")]),s._v(" 算法")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("算法")]),s._v(" "),t("th",[s._v("介绍")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("round robin（轮询，默认）")]),s._v(" "),t("td",[s._v("每个请求按"),t("code",[s._v("时间顺序逐一分配")]),s._v("到不同的后端服务，它均衡地对待后端的每一台服务器")])]),s._v(" "),t("tr",[t("td",[s._v("weight（加权值轮询）")]),s._v(" "),t("td",[s._v("指定轮询几率，weight值(权重)和访问比例成正比，weight的值越大分配到的访问概率越高")])]),s._v(" "),t("tr",[t("td",[s._v("least_conn（最小连接数）")]),s._v(" "),t("td",[s._v("最小连接数法根据后端服务器当前的连接情况，动态地选取其中当前"),t("code",[s._v("积压连接数最少")]),s._v("的一台服务器来处理当前的请求")])]),s._v(" "),t("tr",[t("td",[s._v("ip_hash")]),s._v(" "),t("td",[s._v("每个请求按"),t("code",[s._v("访问IP的哈希结果")]),s._v("分配，使来自同一个IP的访客固定访问一台后端服务器，并且可以有效解决动态网页存在的session共享问题。")])]),s._v(" "),t("tr",[t("td",[s._v("fair")]),s._v(" "),t("td",[s._v("比 weight、ip_hash更加智能的负载均衡算法，fair算法可以根据页面大小和加载时间长短智能地进行负载均衡，也就是根据"),t("code",[s._v("后端服务器的响应时间")]),s._v("来分配请求，"),t("code",[s._v("响应时间短")]),s._v("的优先分配。")])]),s._v(" "),t("tr",[t("td",[s._v("url_hash")]),s._v(" "),t("td",[s._v("按"),t("code",[s._v("访问的URL的哈希结果")]),s._v("来分配请求，使每个URL定向到一台后端服务器，可以进一步提高后端缓存服务器的效率。")])])])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("注意，"),t("code",[s._v("upstream")]),s._v("后面的名称不能带下划线,否则可能引起关键字冲突")])]),s._v(" "),t("h3",{attrs:{id:"round-robin-轮询-默认"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#round-robin-轮询-默认"}},[s._v("#")]),s._v(" round robin（轮询，默认）")]),s._v(" "),t("div",{staticClass:"custom-block info"},[t("p",{staticClass:"custom-block-title"},[s._v("轮询（默认）")]),s._v(" "),t("p",[s._v("每个请求按"),t("code",[s._v("时间顺序逐一分配")]),s._v("到不同的后端服务，它均衡地对待后端的每一台服务器，而不关心服务器实际的连接数和当前的系统负载。如果后端某台服务器死机，自动剔除故障系统，使用户访问不受影响。")]),s._v(" "),t("p",[t("strong",[s._v("适用于")]),s._v("：后端服务器硬件性能配置完全一致，业务无特殊要求时使用")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("upstream backendserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.14：80 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_fails")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fail_timeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("10s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.15：80 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_fails")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fail_timeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("10s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nlocation / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tproxy_pass http://backendserver/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"weight-加权值轮询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weight-加权值轮询"}},[s._v("#")]),s._v(" weight（加权值轮询）")]),s._v(" "),t("div",{staticClass:"custom-block info"},[t("p",{staticClass:"custom-block-title"},[s._v("weight（轮询权值）")]),s._v(" "),t("p",[s._v("指定轮询几率，weight值(权重)和访问比例成正比，weight的值越大分配到的访问概率越高。或者仅仅为在主从的情况下设置不同的权值，达到合理有效的地利用主机资源。")]),s._v(" "),t("p",[t("strong",[s._v("适用于")]),s._v("：主要用于后端每台服务器性能不均衡的情况下")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("upstream backendserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.14:80 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("weight")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_fails")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fail_timeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("10s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.15:80 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("weight")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_fails")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fail_timeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("10s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nlocation / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tproxy_pass http://backendserver/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"least-conn-最小连接数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#least-conn-最小连接数"}},[s._v("#")]),s._v(" least_conn（最小连接数）")]),s._v(" "),t("div",{staticClass:"custom-block info"},[t("p",{staticClass:"custom-block-title"},[s._v("least_conn")]),s._v(" "),t("p",[s._v("least_connected 方式可以更公平的将负载分配到多个机器上面。由于后端服务器的配置不尽相同，对于请求的处理有快有慢，最小连接数法根据后端服务器当前的连接情况，动态地选取其中当前积压连接数最少的一台服务器来处理当前的请求，尽可能地提高后端服务的利用效率，将负责合理地分流到每一台服务器。")]),s._v(" "),t("p",[t("strong",[s._v("适用于")]),s._v("：适用于客户端与后端服务器需要保持长连接的业务")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("upstream backendserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  least_conn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.14:80 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_fails")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fail_timeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("10s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.15:80 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_fails")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fail_timeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("10s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"ip-hash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip-hash"}},[s._v("#")]),s._v(" ip_hash")]),s._v(" "),t("div",{staticClass:"custom-block info"},[t("p",{staticClass:"custom-block-title"},[s._v("ip_hash")]),s._v(" "),t("p",[s._v("每个请求按"),t("code",[s._v("访问IP的哈希结果")]),s._v("分配，使来自同一个IP的访客固定访问一台后端服务器，并且可以有效解决动态网页存在的session共享问题。")]),s._v(" "),t("p",[t("strong",[s._v("适用于")]),s._v("：适用于需要账号登录的系统，会话连接保持的业务")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("upstream backendserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ip_hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.14:80 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_fails")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fail_timeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("10s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.15:80 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_fails")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fail_timeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("10s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"fair"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fair"}},[s._v("#")]),s._v(" fair")]),s._v(" "),t("div",{staticClass:"custom-block info"},[t("p",{staticClass:"custom-block-title"},[s._v("fair")]),s._v(" "),t("blockquote",[t("p",[s._v("需编译安装第三方模块 "),t("code",[s._v("ngx_http_upstream_fair_module")])])]),s._v(" "),t("p",[s._v("比 weight、ip_hash更加智能的负载均衡算法，fair算法可以根据页面大小和加载时间长短智能地进行负载均衡，也就是根据"),t("code",[s._v("后端服务器的响应时间")]),s._v("来分配请求，响应时间短的优先分配。")]),s._v(" "),t("p",[t("strong",[s._v("适用于")]),s._v("：对访问响应速度有一定要求的业务。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("upstream backendserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  fair"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.14:80 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_fails")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fail_timeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("10s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.15:80 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_fails")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fail_timeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("10s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"url-hash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url-hash"}},[s._v("#")]),s._v(" url_hash")]),s._v(" "),t("div",{staticClass:"custom-block info"},[t("p",{staticClass:"custom-block-title"},[s._v("url_hash")]),s._v(" "),t("blockquote",[t("p",[s._v("需编译安装第三方模块 "),t("code",[s._v("ngx_http_upstream_hash_module")])])]),s._v(" "),t("p",[s._v("按"),t("code",[s._v("访问的URL的哈希结果")]),s._v("来分配请求，使每个URL定向到一台后端服务器，可以进一步提高后端缓存服务器的效率。")]),s._v(" "),t("p",[t("strong",[s._v("适用于")]),s._v("：适用于后端服务器为"),t("code",[s._v("缓存服务器")]),s._v("时比较有效。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("upstream backendserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.14:80 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_fails")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fail_timeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("10s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.15:80 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_fails")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fail_timeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("10s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("hash")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
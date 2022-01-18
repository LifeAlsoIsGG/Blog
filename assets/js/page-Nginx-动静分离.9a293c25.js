(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{772:function(s,t,a){s.exports=a.p+"assets/img/dynamic&static.34d0b912.jpg"},773:function(s,t,a){s.exports=a.p+"assets/img/static_html.e94896eb.jpg"},774:function(s,t,a){s.exports=a.p+"assets/img/static-img.bba4ee26.jpg"},900:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),n("h2",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),n("p",[n("img",{attrs:{src:a(772),alt:"什么是动静分离"}})]),s._v(" "),n("p",[n("strong",[s._v("Nginx 动静分离简单来说就是把动态跟静态请求分开，不能理解成只是单纯的把动态页面和静态页面物理分离")]),s._v("。严格意义上说应该是"),n("code",[s._v("动态请求")]),s._v("跟"),n("code",[s._v("静态请求")]),s._v("分开，可以理解成使用 "),n("code",[s._v("Nginx")]),s._v(" 处理"),n("code",[s._v("静态页面")]),s._v("， "),n("code",[s._v("Tomcat")]),s._v(" 处理"),n("code",[s._v("动态页面")]),s._v("。动静分离从目前实现角度来讲大致分为两种：")]),s._v(" "),n("div",{staticClass:"custom-block info"},[n("p",{staticClass:"custom-block-title"},[s._v("Info")]),s._v(" "),n("ol",[n("li",[s._v("一种是纯粹把静态文件独立成单独的域名，放在独立的服务器上，也是目前主流推崇的方案；")]),s._v(" "),n("li",[s._v("另外一种方法就是动态跟静态文件混合在一起发布，通过 nginx 来分开。")])])]),s._v(" "),n("p",[s._v("通过 location 指定不同的后缀名实现不同的请求转发。通过 "),n("code",[s._v("expires")]),s._v(" 参数设置，可以使浏览器缓存过期时间，减少与服务器之前的请求和流量。")]),s._v(" "),n("p",[s._v("具体 "),n("code",[s._v("Expires")]),s._v(" 定义")]),s._v(" "),n("div",{staticClass:"custom-block info"},[n("p",{staticClass:"custom-block-title"},[s._v("Expires 定义")]),s._v(" "),n("p",[s._v("是给一个资源设定一个过期时间，也就是说无需去服务端验证，直接通过浏览器自身确认是否过期即可，所以不会产生额外的流量。"),n("strong",[s._v("此种方法非常适合不经常变动的资源")]),s._v("。（如果经常更新的文件，不建议使用 Expires 来缓存）")]),s._v(" "),n("p",[s._v("若将其设置 3d，表示在这 3 天之内访问这个 URL，发送一个请求，比对服务器该文件最后更新时间没有变化，则不会从服务器抓取，返回状态码304，如果有修改，则直接从服务器重新下载，返回状态码 200。")])]),s._v(" "),n("p",[s._v("Nginx的并发能力公式：")]),s._v(" "),n("div",{staticClass:"custom-block info"},[n("p",{staticClass:"custom-block-title"},[s._v("公式")]),s._v(" "),n("p",[s._v("worker_processes * worker_connections / 4 | 2 = Nginx最终的并发能力")])]),s._v(" "),n("p",[s._v("动态资源需要/4（因为要访问Nginx后面的服务器），静态资源需要/2（直接通过Nginx访问静态资源）")]),s._v(" "),n("p",[s._v("Nginx通过动静分离来提升Nginx的并发能力，更快的给用户响应")]),s._v(" "),n("h2",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),n("h3",{attrs:{id:"创建数据卷并映射到docker中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建数据卷并映射到docker中"}},[s._v("#")]),s._v(" 创建数据卷并映射到docker中")]),s._v(" "),n("p",[n("code",[s._v("docker-compose.yml")])]),s._v(" "),n("p",[s._v("将"),n("code",[s._v("img")]),s._v("和"),n("code",[s._v("html")]),s._v("文件映射")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nginx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token datetime number"}},[s._v("80:80")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /usr/local/docker/nginx/conf.d/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/nginx/conf.d\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /usr/local/docker/nginx/img/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/data/img\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /usr/local/docker/nginx/html/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/data/html\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("根据配置重新加载docker中的nginx")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" down\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up -d\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"修改配置文件的location映射"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件的location映射"}},[s._v("#")]),s._v(" 修改配置文件的location映射")]),s._v(" "),n("p",[s._v("配置如下")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  root 静态资源路径;\n  index 默认访问路径下的什么资源;\n  autoindex on;#代表展示静态资源的全部内容，以列表的形式展开\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("default.conf")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("location /html "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  root /data;\n  index index.html;\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nlocation /img "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  root /data;\n  autoindex on;\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"访问"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#访问"}},[s._v("#")]),s._v(" 访问")]),s._v(" "),n("p",[s._v("访问"),n("code",[s._v("http://localhost/html/")]),s._v("或"),n("code",[s._v("http://localhost/img/index.html")]),s._v("如下")]),s._v(" "),n("p",[n("img",{attrs:{src:a(773),alt:"访问"}})]),s._v(" "),n("p",[s._v("访问"),n("code",[s._v("http://localhost/img/")]),s._v("如下（localhost替换为自己的服务器），首先要在img文件夹中放入文件")]),s._v(" "),n("p",[n("img",{attrs:{src:a(774),alt:"访问"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);
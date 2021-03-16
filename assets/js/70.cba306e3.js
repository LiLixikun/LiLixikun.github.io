(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{439:function(t,a,r){"use strict";r.r(a);var e=r(26),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"性能优化初探"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能优化初探"}},[t._v("#")]),t._v(" 性能优化初探")]),t._v(" "),r("h2",{attrs:{id:"为什么要性能优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么要性能优化"}},[t._v("#")]),t._v(" 为什么要性能优化")]),t._v(" "),r("ul",[r("li",[t._v("57%的用户更在乎网页 3秒 内是否加载完成")]),t._v(" "),r("li",[t._v("52%的在线用户认为网⻚打开速度影响 到他们对网站的忠实度")]),t._v(" "),r("li",[t._v("每慢1秒造成⻚面 PV 降低11%，用户满意度也随之降低降低16%。")]),t._v(" "),r("li",[t._v("近半数移动用户因为在10秒内仍未打开⻚面从而放弃。")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://developers.google.cn/web/fundamentals/performance/get-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("什么是PV")])]),t._v(" "),r("p",[t._v("PV 即页面浏览量或点击量，是衡量一个网站或网页用户访问量。具体的说，PV 值就是所有访问者在 24 小时（0 点到 24 点）内看了某个网站多少个页面或某个网页多少次。PV 是指页面刷新的次数，每一次页面刷新，就算做一次 PV 流量。度量方法就是从浏览器发出一个对网络服务器的请求（Request），网络服务器接到这个请求后，会将该请求对应的一个网页（Page）发送给浏览器，从而产生了一个 PV")]),t._v(" "),r("h2",{attrs:{id:"性能优化学徒工"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能优化学徒工"}},[t._v("#")]),t._v(" 性能优化学徒工")]),t._v(" "),r("h3",{attrs:{id:"雅虎军规"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#雅虎军规"}},[t._v("#")]),t._v(" 雅虎军规")]),t._v(" "),r("p",[r("img",{attrs:{src:"/optimization/huya.png",alt:"huyajungui.png"}})]),t._v(" "),r("ul",[r("li",[t._v("浏览器正常并发请求"),r("strong",[t._v("5个")]),t._v("左右,大小100kb左右,压缩后 "),r("strong",[t._v("30kb")])]),t._v(" "),r("li",[t._v("使用CND,CDN不会携带多余的 cookie,使用多个CDN，解决浏览器对同一个域名的并发")]),t._v(" "),r("li",[t._v("Http2 多路复用  Keep-Alives")])]),t._v(" "),r("p",[t._v("参考 "),r("a",{attrs:{href:"https://www.jianshu.com/p/4cbcd202a591",target:"_blank",rel:"noopener noreferrer"}},[t._v("虎牙军规"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"缓存策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缓存策略"}},[t._v("#")]),t._v(" 缓存策略")]),t._v(" "),r("p",[t._v("详见 "),r("RouterLink",{attrs:{to:"/blog/http/HTTP缓存.html"}},[t._v("http缓存")])],1),t._v(" "),r("h3",{attrs:{id:"网站协议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网站协议"}},[t._v("#")]),t._v(" 网站协议")]),t._v(" "),r("p",[t._v("通过升级http 协议")]),t._v(" "),r("p",[r("strong",[t._v("HTTP2多路复用")])]),t._v(" "),r("p",[t._v("浏览器请求//xx.cn/a.js--\x3e解析域名—>HTTP连接—>服务器处理文件—>返回数据--\x3e浏览器解析、渲染文件")]),t._v(" "),r("p",[r("img",{attrs:{src:"/optimization/http2.png",alt:"http2.png"}})]),t._v(" "),r("p",[r("strong",[t._v("Keep-Alive")]),t._v(" 解决的核心问题就在此，一定时间内，同一域名多次请求数据，只建立一次HTTP请求，其他请求可复用每一次建立的连接通道，以达到提高请求 效率的问题。一定时间是可以配置的.")]),t._v(" "),r("p",[t._v("HTTP1.1还是存在效率问题，")]),t._v(" "),r("ol",[r("li",[t._v("第一个:串行的文件传输。")]),t._v(" "),r("li",[t._v("第二个:连接数过多。")])]),t._v(" "),r("p",[t._v("HTTP/2对同一 域名下所有请求都是基于流,也就是说同一域名不管访问多少文件,也只建立一路连接。同样Apache的最大连接数为300,因为有了 这个新特性，最大的并发就可以提升到300，比原来提升了 "),r("strong",[t._v("60")]),t._v(" 倍")]),t._v(" "),r("h3",{attrs:{id:"小字为先"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小字为先"}},[t._v("#")]),t._v(" 小字为先")]),t._v(" "),r("p",[t._v("通过分析工具，哪里大, 对那块进行压缩优化调优，尽量小\n一般单个文件压缩后为 "),r("strong",[t._v("30KB")]),t._v(" 最佳")]),t._v(" "),r("h2",{attrs:{id:"渲染中优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#渲染中优化"}},[t._v("#")]),t._v(" 渲染中优化")]),t._v(" "),r("p",[r("a",{attrs:{href:"/blog/optimization/%E6%B8%B2%E6%9F%93%E6%B5%81%E7%A8%8B"}},[t._v("渲染流程")])]),t._v(" "),r("h3",{attrs:{id:"资源阻塞问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#资源阻塞问题"}},[t._v("#")]),t._v(" 资源阻塞问题")]),t._v(" "),r("p",[t._v("详见 "),r("a",{attrs:{href:"/blog/optimization/%E8%B5%84%E6%BA%90%E9%98%BB%E5%A1%9E"}},[t._v("资源阻塞")])]),t._v(" "),r("h2",{attrs:{id:"页面指标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#页面指标"}},[t._v("#")]),t._v(" 页面指标")]),t._v(" "),r("p",[t._v("衡量网站性能的各种指标,详见 "),r("a",{attrs:{href:"/blog/optimization/%E6%8C%87%E6%A0%87"}},[t._v("页面性能指标")])]),t._v(" "),r("h3",{attrs:{id:"插件分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#插件分析"}},[t._v("#")]),t._v(" 插件分析")]),t._v(" "),r("p",[t._v("通过 Chrome 插件,我们可以很轻松的分析我们的网站性能,根据它的建议做出对应的优化 "),r("a",{attrs:{href:"/blog/optimization/Chrome%E6%80%A7%E8%83%BD%E5%88%86%E6%9E%90"}},[t._v("Chrome性能分析")])]),t._v(" "),r("h3",{attrs:{id:"白屏原因"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#白屏原因"}},[t._v("#")]),t._v(" 白屏原因")]),t._v(" "),r("p",[r("img",{attrs:{src:"/optimization/baiping.png",alt:"baiping.png"}})]),t._v(" "),r("p",[t._v("主要分为")]),t._v(" "),r("ul",[r("li",[t._v("css,js 文件获取 阻塞")]),t._v(" "),r("li",[t._v("js 文件解析")]),t._v(" "),r("li",[t._v("dom 生成")]),t._v(" "),r("li",[t._v("cssom 生成")])]),t._v(" "),r("p",[t._v("优化调优")]),t._v(" "),r("ul",[r("li",[t._v("骨架屏")]),t._v(" "),r("li",[t._v("组件预加载")]),t._v(" "),r("li",[t._v("配合PWA缓存")])]),t._v(" "),r("h2",{attrs:{id:"优化技巧"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化技巧"}},[t._v("#")]),t._v(" 优化技巧")]),t._v(" "),r("h3",{attrs:{id:"预渲染"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#预渲染"}},[t._v("#")]),t._v(" 预渲染")]),t._v(" "),r("p",[t._v("如果觉得 "),r("strong",[t._v("SSR")]),t._v(" 或者同构方案成本太大,可以考虑使用 "),r("strong",[t._v("预渲染")]),t._v(",使用也是非常简单 "),r("a",{attrs:{href:"https://github.com/stereobooster/react-snap",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-snap"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"windowing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windowing"}},[t._v("#")]),t._v(" windowing")]),t._v(" "),r("p",[t._v("在遇到大量的列表渲染时,我们可以使用窗口化技术,在一定的区域内只显示一定的DOM元素,提高列表性能。 比较成熟的有 "),r("strong",[t._v("React-virtualized")]),t._v(" ,这里强烈推荐 "),r("a",{attrs:{href:"https://github.com/bvaughn/react-window",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-window"),r("OutboundLink")],1),t._v(",配合 "),r("a",{attrs:{href:"https://github.com/jackmoore/autosize",target:"_blank",rel:"noopener noreferrer"}},[t._v("AutoSize"),r("OutboundLink")],1),t._v(" 谁用谁知道吧")]),t._v(" "),r("h3",{attrs:{id:"使用骨架组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用骨架组件"}},[t._v("#")]),t._v(" 使用骨架组件")]),t._v(" "),r("p",[t._v("骨架屏可以理解为是当数据还未加载进来前，页面的一个空白版本，使用骨架屏进行预先的占位,降低了用户的焦躁情绪，使得加载过程主观上变得流畅。在这里推荐使用 "),r("a",{attrs:{href:"https://github.com/buildo/react-placeholder",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-placehold"),r("OutboundLink")],1),t._v(",也可以按照自己的布局进行自定义")]),t._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("p",[t._v("主要从以下几个点出发:")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/4cbcd202a591",target:"_blank",rel:"noopener noreferrer"}},[t._v("虎牙军规"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/blog/optimization/资源优化.html"}},[t._v("资源优化")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/blog/optimization/传输加载优化.html"}},[t._v("传输加载优化")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/blog/http/HTTP缓存.html"}},[t._v("页面缓存")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/blog/optimization/MPA性能优化小试.html"}},[t._v("MPA渲染")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/blog/optimization/Chrome性能分析.html"}},[t._v("性能分析")])],1)])])}),[],!1,null,null,null);a.default=_.exports}}]);
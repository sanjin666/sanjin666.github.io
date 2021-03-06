(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{509:function(t,s,v){"use strict";v.r(s);var a=v(6),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("堆中几乎放着所有的对象实例，对堆垃圾回收前的第一步就是要判断哪些对象已经死亡(即不能再被任何途径使用的对象)。")]),t._v(" "),v("h3",{attrs:{id:"如何判断对象是否已经死亡"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何判断对象是否已经死亡"}},[t._v("#")]),t._v(" 如何判断对象是否已经死亡？")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("引用计数法")])]),t._v(" "),v("p",[t._v("给对象中添加一个引用计数器，每当有一个地方引用它，计数器就加1;当引用失效，计数器就减1;任何时候计数器为0的对象就是不可能再被使用的。")]),t._v(" "),v("p",[v("strong",[t._v("问题：")]),t._v(" 单纯的引用计数很难解决对象之间互相循环引用的问题")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("可达性分析算法")])])])]),t._v(" "),v("p",[t._v("这个算法的基本思想就是通过一系列的称为 "),v("strong",[t._v("“GC Roots”")]),t._v(" 的对象作为起点，从这些节点开始向下 搜索，节点所走过的路径称为引用链，当一个对象到 GC Roots 没有任何引用链相连的话，则证明此对象是不可用的。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sanjin666/imgHosting/vuepressimg/WeChat63eb36babb74479fe6f1e3b9b0006791.png",alt:"WeChat63eb36babb74479fe6f1e3b9b0006791"}})]),t._v(" "),v("p",[t._v("可作为"),v("strong",[t._v("GC Roots对象")]),t._v("包括：")]),t._v(" "),v("ul",[v("li",[t._v("在虚拟机栈（栈帧中的本地变量表）中引用的对象，譬如各个线程被调用的方法堆栈中使用的参数、局部变量、临时变量")]),t._v(" "),v("li",[t._v("在方法区中类静态变量属性引用的对象，譬如Java类的引用类型静态变量")]),t._v(" "),v("li",[t._v("在方法区中常量引用的对象，譬如字符串常量池（String Table）里的引用")]),t._v(" "),v("li",[t._v("本地方法栈的引用的对象")]),t._v(" "),v("li",[t._v("Java虚拟机内部的引用，如基本数据类型对应的Class对象，一些常驻的异常对象，还有系统类加载器")]),t._v(" "),v("li",[t._v("所有被同步锁（synchronized关键字）持有的对象")])]),t._v(" "),v("h3",{attrs:{id:"强软弱虚引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#强软弱虚引用"}},[t._v("#")]),t._v(" 强软弱虚引用")]),t._v(" "),v("p",[t._v("（TODO）")]),t._v(" "),v("h3",{attrs:{id:"垃圾回收器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收器"}},[t._v("#")]),t._v(" 垃圾回收器")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sanjin666/imgHosting/vuepressimg/image-20210201174709209.png",alt:"image-20210201174709209"}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sanjin666/imgHosting/vuepressimg/image-20210201175842314.png",alt:"image-20210201175842314"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);
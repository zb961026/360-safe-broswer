项目描述：HTML5+css3+jQuery实现的360手机安全换机页面

项目难点：

1. 页面使用float+position定位布局
2. 鼠标滚轮使用jquery.mousewheel.js插件
3. 获取页面窗口改变的高度
4. 外边距被忽略的问题：头部li的外边距被忽略为0。
5. 动画逻辑：
   4-1 头部li的边框动画
   头部的ul元素中的第一个li元素始终有动态边框，当用户指向li元素时，动态边框会跟着鼠标移动到对应的li元素上，当元素鼠标离开ul时，动态边框自动移动到第一个li元素上。

   4-2 左边li的小球移动动画，div容器的滚动动画
   左边的li元素中的第一个元素有一个绿色小球，当用户点击其他小球时，绿色小球将移动到所点击的小球上，同时页面会滚动到对应索引的div容器。同样，当鼠标滚动时，也能实现这种效果。

6. 动画实现：
   动画事件有三种，分别是鼠标进入，点击，滚动事件。
   首先获取头部的ul，li，左边的ul，li和分屏的div容器wrap。
   5-1.鼠标进入事件：获取鼠标指向的头部li元素索引和li元素到左边的距离Left，最后获取当前li元素的宽度Width。当鼠标指向变换停止时执行动画,用animate动画事件实现，每一次左边移动Left+4(li到ul的距离)，宽度移动Width + 26(动态边框的宽度-li的宽度)的距离。
   
   5-2.鼠标点击事件：获取windo所在的高度winH，获取this的索引，给this添加类样式，其余兄弟元素移除类样式，页面执行滚动动画，时间为0秒，距离为winH*index。

   5-3.鼠标滚轮事件：判断鼠标是向上滚动还是向下滚动，然后给左边的li添加类样式，其余兄弟元素移除类样式，页面执行0秒的滚动动画，距离为winH*index。

6. 解决页面缓存问题：当页面刷新时，小球及div会自动回原位置，加一个定时器判断加载滚动动画，当滚动高度为0时清除定时器。


		$(function () {
			var $navLi = $("header .h-nav ul li"); //获取头部li
			var $navUl = $("header .h-nav ul"); //获取ul
			var $wrap = $("#wrap"); //获取div容器
			var $slideLi = $("#slide ul li"); //获取左侧li

			//解决缓存问题
			var timer = setInterval(function () { //定时器延时
				$(document).scrollTop(0);
				if ($(document).scrollTop() == 0) { //判断滚动高度为0
					clearInterval(timer); //清除定时器
				}
			}, 50);
			//鼠标移入事件
			$navLi.mouseenter(function () {
				//找到当前this的a添加类样式，在它的父元素找到a，清除类样式
				$(this).find("a").addClass("h-c").parent().siblings().find("a").removeClass("h-c");
				//获取当前this距离左边位置
				var Left = $(this).position().left;
				//获取当前this的宽度
				var Width = $(this).width();
				//鼠标停止才执行动画
				$wrap.stop(true, true).animate({
					left: Left + 4, //左边走过距离Left+4(li到ul的距离)
					width: Width + 26 //宽度走过距离Width + 26(动态边框的宽度-li的宽度)
				}, 300);
			});
			//鼠标离开ul的时候
			$navUl.mouseleave(function () {
				//找到当前this中的a删除类样式
				$(this).find("a").removeClass("h-c");
				//$(this).find("li").eq(0).find("a").addClass("h-c");
				//找到当前this中的第一个元素中的a，添加类样式
				$(this).find("li:first-child a").addClass("h-c");
				//停下执行动画
				$wrap.stop(true, true).animate({
					left: 4, //返回没有添加距离的初始位置
					width: 58 //返回没有添加距离的初始位置
				});
			});
			//鼠标点击slide下面li的时候
			var winH = $(window).height(); //获取高度
			var index = 0; //定义一个索引
			$slideLi.click(function () { //点击事件
				index = $(this).index(); //获取当前的索引
				$(this).addClass("on").siblings().removeClass("on"); //当前添加类样式，其他移除类样式
				$("html,body").animate({ //滚动距离动画
					"scrollTop": winH * index //滚动距离为高度*索引
				}, 1000);
			});

			//鼠标滚轮事件
			$(document).mousewheel(function () {
				var dr = arguments[1];
				if (dr < 0) {
					index++; //0,1,2,3
					index %= 4;
				} else {
					index--;
					if (index < 0) index = 3;
				}
				$slideLi.eq(index).addClass("on").siblings().removeClass("on");
				$("html,body").stop(true).animate({
					"scrollTop": winH * index
				}, 1000);
			});

			//页面窗口改变高度
			$(window).resize(function () {
				winH = $(window).height();
				$(document).scrollTop(winH * index);
			});
		});
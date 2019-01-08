$(function(){
    var i = 0;
    var clone = $(".curousel_list li").first().clone();
    $(".curousel_list").append(clone);
    var size = $(".curousel_list li").length;
    for(var j = 0; j < size - 1; j++){
    	$(".num").append("<li></li>");
    }

     $(".num li").first().addClass("on");

    $(".num li").hover(function() {
    	var index = $(this).index();
    	i = index;
    	$(".curousel_list").stop().animate({
    		left: -index * 520,
    	},500);
    $(this).addClass("on").siblings().removeClass("on");
    });

    // 轮播
    var t = setInterval(moveL,2000);

    // 鼠标停在banner上，停止轮播
    $(".banner").hover(function() {
    	clearInterval(t);
    }, function() {
    	t = setInterval(moveL,2000);
    });

    //左按钮
    $(".btn_l").click(function(event) {
    	moveR();
    });

    //右按钮
    $(".btn_r").click(function(){
    	moveL();
    });

    function moveL(){
    	i++;
    	//无缝轮播重点：播完最后一张图，瞬间切换到第一张图
    	if(i === size){
    		$(".curousel_list").css({
    			left:0,
    		});
    		i = 1;
    	}
    	$(".curousel_list").stop().animate({
    		left: -i * 520,
    		}, 500);

    	if(i === size - 1){
    		$(".num li").eq(0).addClass('on').siblings().removeClass('on');
    	}else{
    		$(".num li").eq(i).addClass('on').siblings().removeClass('on');
    	}
    	
    }

    function moveR(){
    	i--;
    	//播完最后一张图，瞬间切换到第一张图
    	if(i === -1){
    		$(".curousel_list").css({
    			left:-(size -1) * 520,
    		});
    		i = size - 2;
    	}
    	$(".curousel_list").stop().animate({
    		left: -i * 520,
    		}, 500);

		$(".num li").eq(i).addClass('on').siblings().removeClass('on');
    }
});
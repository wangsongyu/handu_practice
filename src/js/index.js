
function tabs(){	//新闻选项卡
	var $tab = $('#hd_zpp .tabs').find('div'); 
	var $news = $('#hd_zpp .hd_zppright').find('.newss');
	
	$tab.on('mouseover',function(){
		$(this).attr('class','active l').siblings().attr('class','l');
		$news.eq($(this).index()).css('display','block').siblings('.newss').css('display','none');
	})
}
tabs();

//轮播图
function loop(){
	var $ulLi = $('#loop ul').find('li');
	var $olLi = $('#loop ol').find('li');
	var count = 0;
	var timer;

	$olLi.on('mouseover',function(){
		$(this).attr('class','active').siblings().attr('class','');
		$ulLi.eq($(this).index()).animate({opacity:1},500).siblings().animate({opacity:0},500);
		count = $(this).index();
	});

	$ulLi.on('mouseover',function(){
		clearInterval(timer);
	});

	$ulLi.on('mouseout',function(){
		timer = setInterval(run,2000);
	})

	timer = setInterval(run,2000);

	function run(){
		if(count == $ulLi.length-1){
			count = 0;
		}
		else{
			count++;
		}
		$olLi.eq(count).attr('class','active').siblings().attr('class','');
		$ulLi.eq(count).animate({opacity:1},500).siblings().animate({opacity:0},500);
	}
}
loop();

//新品分类选项卡
function newTabs(){
	var $all = $('#new');
	var $tabs = $('#new .classify').find('a');
	var $uls = $('#new .list1');
	var count = 0;
	var timer;

	$tabs.on('mouseover',function(){
		$(this).attr('class','active').siblings().attr('class','');
		$uls.eq($(this).index()).animate({opacity:1},500).siblings('.list1').animate({opacity:0},500);
		count = $(this).index();
	});

	timer = setInterval(run,1000);

	$all.on('mouseover',function(){
		clearInterval(timer);
	});

	$all.on('mouseout',function(){
		timer = setInterval(run,2000);		
	})

	function run(){
		if(count == $uls.length-1){
			count = 0;
		}else{
			count++
		};
		$tabs.eq(count).attr('class','active').siblings().attr('class','');
		$uls.eq(count).animate({opacity:1},500).siblings('.list1').animate({opacity:0},500);
	}

}
newTabs();



function hotList(){

	var $lis = $('#hstyle .hot').find('li');

	for(var i=0; i<$lis.length; i++){
		$lis.eq(i).css('background','url(http://s.handu.com/themes/handuyishe/index/images/0'+ (i+1) +'.png) no-repeat left');
	}

}
hotList();

function bottomBg(){

	var $h4s = $('#bottom .list1').find('h4');
	var count = 33;

	for(var i=0; i<$h4s.length; i++){
		$h4s.eq(i).css('background','url(http://s.handu.com/themes/handuyishe/images/footer_2014/footer01.png) no-repeat 0px '+ -(i*count) +'px');
	}

}
bottomBg();

function fixedHead(){

	var $fH = $('#fixedHead');

	$(window).on('scroll',function(){
		if($(window).scrollTop() > 600){
			$fH.css({'position':'fixed','top':'0','display':'block'});
		}
		else{
			$fH.css({'position':'absolute','top':'0','display':'none'});
		}
	})

}
fixedHead();

function asideList(){

	var $aside = $('#aside');
	var $back = $('#aside').find('li');

	$(window).on('scroll',function(){
		if($(window).scrollTop() > 500){
			$aside.css({'position':'fixed','top':'50%','right':'20px','display':'block'});
		}else{
			$aside.css({'position':'absolute','top':'50%','right':'20px','display':'none'});
		}
	});

	$back.eq(3).on('click',function(){
		$('html,body').animate({scrollTop:0},500);
	})

}
asideList();
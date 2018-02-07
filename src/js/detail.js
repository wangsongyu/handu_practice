function magnifier(){

	var $box1 = $('#detail .sImg');
	var $mask = $('#detail .sImg').find('.mask');
	var $box2 = $('#detail .bigImg');
	var $bI = $('#detail .bigImg').find('.bI');

	$box1.on('mouseover',function(){
		$mask.css('display','block');
		$box2.css('display','block');

	});
	$box1.on('mouseout',function(){
		$mask.css('display','none');
		$box2.css('display','none');
	});
	$box1.on('mousemove',function(ev){
			var x = ev.pageX - $box1.offset().left;
			var y = ev.pageY - $box1.offset().top;
			var X = x - $mask.width()/2;
			var Y = y - $mask.height()/2;

			if(X < 0){
				X = 0;
			}
			else if(X > $(this).width() - $mask.width()){
				X = $(this).width() - $mask.width();
			}
			if(Y < 0){
				Y = 0;
			}
			else if(Y > $(this).height() - $mask.height()){
				Y = $(this).height() - $mask.height();
			}
			
			var scaleX = X / ($(this).width() - $mask.width());
			var scaleY = Y / ($(this).height() - $mask.height());

			$bI.css({'left':-scaleX*($bI.width() - $box2.width()),'top':-scaleY*($bI.height() - $box2.height())});


			$mask.css({'left':X,'top':Y});

		})

}
magnifier();

function change(){
	var $lis = $('#detail .pic_list').find('li');
	var $imgs = $('#detail .pic_list').find('li img');
	var $sImg = $('#detail .pic').find('.sI');
	var $bImg = $('#detail .pic').find('.bI');
	var arr = ['http://s.handu.com/images/201711/goods_img/1061809_P_1510728960509.jpg','http://s.handu.com/images/201707/goods_img/201707270007441_OGQ8016.jpg','http://s.handu.com/images/201707/goods_img/201707270007442_OGQ8016.jpg','http://s.handu.com/images/201707/goods_img/201707270007443_OGQ8016.jpg','http://s.handu.com/images/201707/goods_img/201707270007444_OGQ8016.jpg']
	$lis.click(function(){
		$(this).attr('class','active').siblings().attr('class','');
		$sImg.attr('src',arr[$(this).index()]);
		$bImg.attr('src',arr[$(this).index()]); 
	})
};
change();

function createImgs(){

	var arr = ['http://img01.handu.com/hdysweb/20171213/3.png','http://img01.handu.com/hdysweb/20171213/sx_01.png','http://img01.handu.com/hdysweb/20171213/sx_02.png','http://img01.handu.com/hdysweb/20171213/sx_03.png','https://img.alicdn.com/imgextra/i3/263817957/TB2kWLiXotWMKJjy0FaXXcCDpXa-263817957.jpg','https://img.alicdn.com/imgextra/i1/263817957/TB2SncmXiFTMKJjSZFAXXckJpXa-263817957.jpg','https://img.alicdn.com/imgextra/i3/263817957/TB2LT7wXotWMKJjy0FaXXcCDpXa-263817957.jpg','https://img.alicdn.com/imgextra/i1/263817957/TB233w.XUcKL1JjSZFzXXcfJXXa-263817957.jpg','https://img.alicdn.com/imgextra/i1/263817957/TB2bb6KXrsTMeJjSszhXXcGCFXa-263817957.jpg','https://img.alicdn.com/imgextra/i4/263817957/TB2S.E8XNsIL1JjSZFqXXceCpXa-263817957.jpg','https://img.alicdn.com/imgextra/i3/263817957/TB2Bo..XPoIL1JjSZFyXXbFBpXa-263817957.jpg','https://img.alicdn.com/imgextra/i3/263817957/TB2wnU_XUQIL1JjSZFhXXaDZFXa-263817957.jpg','https://img.alicdn.com/imgextra/i2/263817957/TB2rzUhXoFWMKJjSZFvXXaenFXa-263817957.jpg','https://img.alicdn.com/imgextra/i1/263817957/TB2ONQ.XKkJL1JjSZFmXXcw0XXa-263817957.jpg','https://img.alicdn.com/imgextra/i4/263817957/TB2tVauXDZRMeJjSspkXXXGpXXa-263817957.jpg','https://img.alicdn.com/imgextra/i4/263817957/TB2ttI7XOAKL1JjSZFoXXagCFXa-263817957.jpg','https://img.alicdn.com/imgextra/i2/263817957/TB2ohAmXjJTMKJjSZFPXXbHUFXa-263817957.jpg','https://img.alicdn.com/imgextra/i3/263817957/TB2c5nKXyERMeJjSspjXXcpOXXa-263817957.jpg','https://img.alicdn.com/imgextra/i3/263817957/TB2KquuXwsSMeJjSsphXXXuJFXa-263817957.jpg','https://img.alicdn.com/imgextra/i3/263817957/TB2W7KxXwoQMeJjy1XaXXcSsFXa-263817957.jpg','https://img.alicdn.com/imgextra/i3/263817957/TB2Fac9XNsIL1JjSZFqXXceCpXa-263817957.jpg','https://img.alicdn.com/imgextra/i2/263817957/TB2n5..XKkJL1JjSZFmXXcw0XXa-263817957.jpg','https://img.alicdn.com/imgextra/i2/263817957/TB26i0na7.OyuJjSszhXXbZbVXa-263817957.jpg','https://img.alicdn.com/imgextra/i2/263817957/TB2rHcAbt3nyKJjSZFEXXXTTFXa-263817957.jpg','https://img.alicdn.com/imgextra/i4/263817957/TB26wUraQQkyKJjSspaXXc_ipXa-263817957.jpg','https://img.alicdn.com/imgextra/i2/263817957/TB2qNsxbxolyKJjSZFDXXbNfpXa-263817957.jpg','https://img.alicdn.com/imgextra/i1/263817957/TB2cx.ibzZnyKJjSZPcXXXqHVXa-263817957.jpg','https://img.alicdn.com/imgextra/i1/263817957/TB2HoMCbDIlyKJjSZFrXXXn2VXa-263817957.jpg','https://img.alicdn.com/imgextra/i3/263817957/TB2q0kxbAonyKJjSZFtXXXNaVXa-263817957.jpg','https://img.alicdn.com/imgextra/i1/263817957/TB2ktsFbrAlyKJjSZFBXXbtiFXa-263817957.jpg','https://img.alicdn.com/imgextra/i3/263817957/TB2Rh..XOwIL1JjSZFsXXcXFFXa-263817957.jpg','https://img.alicdn.com/imgextra/i3/263817957/TB2lR.AbxAlyKJjSZFyXXbm_XXa-263817957.jpg','https://img.alicdn.com/imgextra/i2/263817957/TB2OVxIfM0kpuFjSspdXXX4YXXa-263817957.jpg','https://img.alicdn.com/imgextra/i4/263817957/TB2_bcubwIlyKJjSZFqXXX9xpXa-263817957.jpg','https://img.alicdn.com/imgextra/i1/263817957/TB2NWoAbrAlyKJjSZFBXXbtiFXa-263817957.jpg','https://img.alicdn.com/imgextra/i4/263817957/TB2DDozbtsmyKJjSZFvXXcE.FXa-263817957.jpg','https://img.alicdn.com/imgextra/i4/263817957/TB2yasAbrAlyKJjSZFBXXbtiFXa-263817957.jpg','https://img.alicdn.com/imgextra/i1/263817957/TB2BDhxa8EOyuJjy0FdXXbzApXa-263817957.jpg']
	var $imgs = $('#detail .imgs');
	for(var i=0; i<arr.length; i++){
		var img = $('<img src="'+ arr[i] +'">');
		$imgs.append(img);
	}
}
createImgs();

function selectSize(){

	var $size = $('#detail .size').find('.s2');
	var $color = $('#detail .color').find('.s2');
	var $nowS = $('#detail .now').find('span:nth-of-type(1)');
	var $nowC = $('#detail .now').find('span:nth-of-type(2)');
	var $text = $('#detail .count').find('input[type="text"]');
	var $minus = $('#detail .count').find('.minus');
	var $plus = $('#detail .count').find('.plus');
	var $reNum = $('#detail .count .remain .reNum');
	var count = 1;
	var num = 21;

	console.log($reNum.html());

	$size.click(function(){
		$(this).attr('class','s2 active').siblings('.s2').attr('class','s2');
		$nowS.html($(this).html());
	});
	$color.click(function(){
		$(this).attr('class','s2 active').siblings('.s2').attr('class','s2');
		$nowC.html($(this).html());
	});
	$minus.click(function(){

		if(count == 0){
			count = 0;
		}else{
			count--;
		}
		$reNum.html(num-count);
		$text.val(count);
	});
	$plus.click(function(ev){
		if(count == 21){
			count = 21
		}else{
			count++;
		}
		
		$reNum.html(num-count);
		$text.val(count);

	})

}
selectSize();
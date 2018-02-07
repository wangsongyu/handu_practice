function createList(){

	var listurl = ['http://s.handu.com/images/201612/thumb_img/1482336175705755674.jpg','http://s.handu.com/images/201605/thumb_img/1463973830353941232.jpg','http://s.handu.com/images/201703/thumb_img/1489421242567100914.jpg','http://s.handu.com/images/201704/thumb_img/1493023833546824929.jpg','http://s.handu.com/images/201701/thumb_img/1484820324781836575.jpg','http://s.handu.com/images/201704/thumb_img/1491494581561900116.jpg','http://s.handu.com/images/201702/thumb_img/1487174924708520871.jpg','http://s.handu.com/images/201702/thumb_img/1487952214233647436.jpg','http://s.handu.com/images/201703/thumb_img/1489593849812896472.jpg','http://s.handu.com/images/201704/thumb_img/1491580999340316599.jpg','http://s.handu.com/images/201703/thumb_img/1488470570685941933.jpg','http://s.handu.com/images/201703/thumb_img/1490372142617670232.jpg','http://s.handu.com/images/201704/thumb_img/1493025094501396864.jpg','http://s.handu.com/images/201704/thumb_img/1493025094501396864.jpg','http://s.handu.com/images/201702/thumb_img/1487174986545965284.jpg','http://s.handu.com/images/201611/thumb_img/1042716_thumb_G_1479463430084.jpg','http://s.handu.com/images/201702/thumb_img/1487174826922098224.jpg','http://s.handu.com/images/201707/thumb_img/1501344394596389929.jpg','http://s.handu.com/images/201701/thumb_img/1484323347198121366.jpg','http://s.handu.com/images/201708/thumb_img/1503041706051409696.jpg','http://s.handu.com/images/201711/thumb_img/1061775_thumb_G_1510712801101.jpg','http://s.handu.com/images/201707/thumb_img/1501344412087064248.jpg','http://s.handu.com/images/201702/thumb_img/1487174991245755444.jpg','http://s.handu.com/images/201608/thumb_img/1471363396894235334.jpg','http://s.handu.com/images/201610/thumb_img/1477632277549701332.jpg','http://s.handu.com/images/201608/thumb_img/1470634364866482505.jpg','http://s.handu.com/images/201610/thumb_img/1477044644060910111.jpg','http://s.handu.com/images/201609/thumb_img/1473782540954691459.jpg','http://s.handu.com/images/201703/thumb_img/1489740289712356077.jpg','http://s.handu.com/images/201608/thumb_img/1471017797160895545.jpg','http://s.handu.com/images/201707/thumb_img/1501344523139145444.jpg','http://s.handu.com/images/201707/thumb_img/1501344502719892497.jpg','http://s.handu.com/images/201610/thumb_img/1477565730764086869.jpg','http://s.handu.com/images/201612/thumb_img/1054574_thumb_G_1482292759945.jpg','http://s.handu.com/images/201711/thumb_img/1061765_thumb_G_1510711417951.jpg','http://s.handu.com/images/201611/thumb_img/1479699541033208066.jpg','http://s.handu.com/images/201609/thumb_img/1475139406164728765.jpg','http://s.handu.com/images/201608/thumb_img/1471536364234720271.jpg','http://s.handu.com/images/201707/thumb_img/1501344443714558775.jpg','http://s.handu.com/images/201710/thumb_img/1062077_thumb_G_1509083757852.jpg'];

	var list = document.getElementById('list');
	var product_list = list.getElementsByClassName('product_list')[0];

	for(var i=0 ; i<listurl.length; i++){
		var li = document.createElement('li');
		li.innerHTML = `

						<img src="${listurl[i]}" class="bigImg">
						<div class="smImg"><img src="${listurl[i]}"></div>
						<div class="price"><span class="newP">¥ 127</span><span class="oldP">¥ 366.00</span></div>
						<p>韩都衣舍2017韩版女装春装新款白色九分小脚牛仔裤AA6610玎</p>
						<div class="his">
							<div class="left l">
								<div class="t">6439</div>
								<div class="b">月销量</div>
							</div>
							<div class="right l">
								<div class="t">4</div>
								<div class="b">累计评价</div>
							</div>
						</div>
					
		`
		product_list.appendChild(li);
	}
}

createList();


function showList(){

	var $dt = $('#list .classify_list').find('dt');

	$dt.on('click',function(){
		$(this).nextAll('dd').toggle();
	})
}

showList();

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
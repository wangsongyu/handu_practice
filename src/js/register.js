function testReg(){
	var $text = $('#register .bo .reg_list').find('li:nth-of-type(1) .reg_list_text');
	
	var $mes = $('#register .bo .reg_list').find('li:nth-of-type(1) .message');
	var re = /\d{11}/;
	$text.on('blur',function(){
		$mes.html('');
		$mes.css('background','');
		var $val = $('#register .bo .reg_list').find('li:nth-of-type(1) .reg_list_text').val();
		if(re.test($val)){
			$mes.css('background','url(http://s.handu.com/themes/handuyishe/images/keyizhuce.gif) no-repeat 0px 0px');
		}
		else{
			$mes.html('请输入正确的格式');
		}
	})
	
}

testReg();

function pwReg(){

	var $pw = $('#register .bo .reg_list').find('li:nth-of-type(3) .reg_list_text');
	var $conpw = $('#register .bo .reg_list').find('li:nth-of-type(4) .reg_list_text'); 
	var $warn = $('#register .bo .reg_list').find('.warn');
	var $val = $('#register .bo .reg_list').find('li:nth-of-type(3) .reg_list_text').val();
	var $conwarn = $('#register .bo .reg_list').find('.conwarn');
	console.log($conwarn);
	var re = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
	
	$pw.on('blur',function(){

		$warn.css('background','');
		$warn.html('');
		$val = $('#register .bo .reg_list').find('li:nth-of-type(3) .reg_list_text').val();
		console.log($val);
	

		if(re.test($val)){
			$warn.css('background','url(http://s.handu.com/themes/handuyishe/images/keyizhuce.gif) no-repeat 0px 0px');
			console.log(111)
		}
		else{
			$warn.html('密码必须为8-24位字母与数字组合');
			console.log(222)
		}
		if($val.length < 8){
			$warn.html('长度不能小于8位');
			console.log(333)
		}

	})
	$conpw.on('blur',function(){
		$conwarn.html('');
		$conwarn.css('background','');
		var $cval = $('#register .reg_list').find('li:nth-of-type(4) .reg_list_text').val();
		if($val == $cval){
			$conwarn.css('background','url(http://s.handu.com/themes/handuyishe/images/keyizhuce.gif) no-repeat 0px 0px');
		}else{
			$conwarn.html('两次输入的密码不一致');
		}
	})

}

pwReg();

function emailReg(){

	var $text = $('#register .bo2 .reg_list').find('li:nth-of-type(1) .reg_list_text');
	var $pw = $('#register .bo2 .reg_list').find('li:nth-of-type(2) .reg_list_text');
	var $message = $('#register .bo2 .reg_list').find('.message');
	var $warn = $('#register .bo2 .reg_list').find('.warn');
	var pwval;
	console.log($warn); 
	var re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	$text.on('blur',function(){
		$message.css('background','');
		$message.html('');
		var $val = $('#register .bo2 .reg_list').find('li:nth-of-type(1) .reg_list_text').val();
		if(re.test($val)){
			$message.css('background','url(http://s.handu.com/themes/handuyishe/images/keyizhuce.gif) no-repeat 0px 0px')
		}else{
			$message.html('请输入正确格式')
		}
	});
	$pw.on('blur',function(){
		pwval = $('#register .bo2 .reg_list').find('li:nth-of-type(2) .reg_list_text').val();
		console.log(pwval);
		if(re.test(pwval)){
			$warn.css('background','url(http://s.handu.com/themes/handuyishe/images/keyizhuce.gif) no-repeat 0px 0px');
			console.log(111)
		}
		else{
			$warn.html('密码必须为8-24位字母与数字组合');
			console.log(222)
		}
		if(pwval.length < 8){
			$warn.html('长度不能小于8位');
			console.log(333)
		}
	})
}
emailReg();

function change(){
	var $phone = $('#register .reg_right .top').find('div:not(.left)');
	var $bo = $('#register .reg_right').children(':not(.top)');
	$phone.click(function(){
		$(this).css({'background':'url(http://s.handu.com/themes/handuyishe/images/NEW_images/NEWS_login.png) no-repeat 0px -101px','color':'white'}).siblings('div:not(.left)').css({'background':'url(http://s.handu.com/themes/handuyishe/images/NEW_images/NEWS_login.png) no-repeat 0px -150px','color':'#333'});
		$bo.eq($(this).index()-1).css('display','block').siblings(':not(.top)').css('display','none');
	});

}
change();
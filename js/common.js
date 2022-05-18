
//header logo 애니메이션---------------------------------------------------------------------
$(function(){
	
	var text1 = $("p.logo_line01");
	var text2 = $("p.logo_line02");
	var text3 = $("p.logo_line03");
	var text4 = $("p.logo_line04");

	text1.children("span.bar").animate({"left":0},500).animate({"width":"20px","left":"49"},1000);
	text2.children("span.bar").animate({"top":25},500).animate({"height":"38px","top":"25"},1000);
	text3.children("span.bar").animate({"top":0},500).animate({"height":"29px","top":"68"},1000);
	text4.children("span.bar").animate({"left":36},500).animate({"width":"23px","left":"36"},1000);

	text1.children("span.txt").children("img").eq(0).delay(1000).css({"opacity":0}).animate({"opacity":1},500);
	text2.children("span.txt").children("img").eq(0).delay(1300).css({"opacity":0}).animate({"opacity":1},500);
	text3.children("span.txt").children("img").eq(0).delay(1600).css({"opacity":0}).animate({"opacity":1},500);
	text4.children("span.txt").children("img").eq(0).delay(1900).css({"opacity":0}).animate({"opacity":1},500);

	text1.children("span.txt").children("img").eq(1).delay(2200).css({"opacity":0}).animate({"opacity":1},500);
	text2.children("span.txt").children("img").eq(1).delay(2500).css({"opacity":0}).animate({"opacity":1},500);
	text3.children("span.txt").children("img").eq(1).delay(2800).css({"opacity":0}).animate({"opacity":1},500);
	text4.children("span.txt").children("img").eq(1).delay(3100).css({"opacity":0}).animate({"opacity":1},500);
});






//상단버튼 이벤트---------------------------------------------------------------------
$(function(){
	var $top = $(".btn_top");

	//상단 스크롤 버튼 클릭이벤트
	$top.on("click", function(){
		$("html,body").animate({
			"scrollTop":"0"
			},200,"easeInOutCirc");
		return false;
	});


	//스크롤 높이에 따른 상단버튼 숨김표시
	$(window).on("scroll", function(){
			
		var $scrollTop = $(this).scrollTop();

		if($scrollTop > 300){	
			$top.fadeIn();
		}else if($scrollTop < 900){
			$top.fadeOut();
		}
	});
	
});


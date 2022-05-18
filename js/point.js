


//탭메뉴
$(function(){
	var list1 = $("#section01").offset().top;
	var list2 = $("#section02").offset().top;
	var list3 = $("#section03").offset().top;
	var list4 = $("#section04").offset().top;
	
	//클릭시
	$(".sub_tab > li").click(function(){
		var idx = $(this).index();
		console.log(idx)
		if(idx == 0){
			$("html,body").stop().animate({"scrollTop":list1-200},800,"easeInOutCirc");
		}else if(idx == 1){
			$("html,body").stop().animate({"scrollTop":list2-100},800,"easeInOutCirc");
		}else if(idx == 2){
			$("html,body").stop().animate({"scrollTop":list3-100},800,"easeInOutCirc");
		}else if(idx == 3){
			$("html,body").stop().animate({"scrollTop":list4-100},800,"easeInOutCirc");
		}
		
		return false;
	});

	//스크롤시
	$(window).on("scroll",function(){
		var position = $(this).scrollTop();

		//고정
		if(747 < position){
			$(".sub_tab").css({"position":"fixed", "top":"20px", "left":"50%","margin-left":"-244px"});
		}else if(747 > position){			
			$(".sub_tab").css({"position":"relative", "top":"0px"});
		}
		
		//on클레스
		if(0 < position){$(".sub_tab").children().removeClass();}
		if(300 < position){$(".sub_tab").children().eq(0).addClass("on").siblings().removeClass();}
		if(list2-200 < position){$(".sub_tab").children().eq(1).addClass("on").siblings().removeClass();}
		if(list3-200 < position){$(".sub_tab").children().eq(2).addClass("on").siblings().removeClass();}
		if(list4-200 < position){$(".sub_tab").children().eq(3).addClass("on").siblings().removeClass();}


	});
});


//카운터 애니메이션
$(function(){

	// 카운터 01
	$(window).scroll(function scrollHandler(){
		var position = $(window).scrollTop();
		if(2300 < position){
			counter01();
			$(window).off("scroll", scrollHandler);
		}
	});

	// 카운터 02
	$(window).scroll(function scrollHandler(){
		var position = $(window).scrollTop();
		if(2600 < position){
			counter02();
			$(window).off("scroll", scrollHandler);
		}
	});

	function counter01(){
		$(".counter_01").rollingCounter({
			animate : true,
			attrCount : "data-count",
			delayTime : 70 ,
			rollingCount : 100,
			waitTime : 1 ,
			easing : "easeOutBounce",
			duration : 1000
		});
	}

	function counter02(){
		$(".counter_02").rollingCounter({
			animate : true,
			attrCount : "data-count",
			delayTime : 70 ,
			rollingCount : 100,
			waitTime : 1 ,
			easing : "easeOutBounce",
			duration : 1000
		});
	}
});






//bx슬라이드
$(function(){
	mySlider = $(".slide_box").bxSlider({
		mode:"horizontal",  // 가로 수평으로 슬라이드
		speed:500,			// 이동 속도를 설정
		pager:false,		// 현재 위치 페이징 표시 여부 설정
		moveSlides:3,		// 슬라이드 이동시 갯수 설정
		slideWidth:810,		// 슬라이드 마다 너비 설정
		slideHeight:345,		// 슬라이드 마다 너비 설정
		minSlides:3,		// 최초 노출 개수를 설정
		maxSlides:3,		// 최대 노출 개수를 설정
		slideMargin:10,		// 슬라이드간의 간격을 설정
		auto:true,			// 자동으로 흐를지 설정
		autoHover:true,		// 마우스 오버시 정지시킬지 설정
		controls:false		// 이전 다음 버튼 노출 여부 설정
	});
	
//	↓이전 버튼을 클릭하면 이전 슬라이드로 전환됩니다.
	$(".prev").on("click",function(){
		mySlider.goToPrevSlide(); //이전 슬라이드 배너로 이동됩니다.
		return false;
	});
//	↓다음 버튼을 클릭하면 이전 슬라이드로 전환됩니다.
	$(".next").on("click",function(){
		mySlider.goToNextSlide(); //다음 슬라이드 배너로 이동됩니다.
		return false;
	});

});






//인테리어 이미지 박스
$(function(){
	$(window).scroll(function scrollHandler(){
		var position = $(window).scrollTop();
		if(6500 < position){
			$("#section04 .img-wrap > li").css({"transform":"scale(1,1)"});
			$(window).off("scroll", scrollHandler);
		}
	});
});





//슬라이드 01---------------------------------------------------------------------
$(document).ready(function(){
	
	var $slide = $("#slide_banner")// 슬라이드
	var $btn = $(".main01-pagination > li > a"); // 버튼
	var $down = $("#main01 .downBtn");//아래로 버튼
	var nowidx = 0;
	var setIntervalId;
	
	var winWidth;
	var slideWidth;


	
	//리사이즈
	$(window).on("load resize", function(){
		winWidth = $(window).width();
		slideWidth = $(window).width()*3;

		MainWidth();
		
	});


	//가로폭 최적화 함수
	function MainWidth(){
		$("#main-visual ul").css({"width":(slideWidth)});
		$("#main-visual ul li").css({"width":(winWidth)});
	}

		
	//윈도우 로드 이벤트
	$(window).on("load",function() {
		$slide.hide().eq(nowidx).addClass("on").show(); // nowidx에 해당하는슬라이드만 노출
		$btn.eq(nowidx).parent().addClass("on").siblings()
		.removeClass("on");// 인디케이터 활성화
		autoPlay();// 자동실행함수호출

	});



	// move 함수
	function move() {
		var left = nowidx*winWidth;
		$slide.stop().animate({
			"left" : -left
		},2000,'easeOutQuart');

		$btn.eq(nowidx).parent().addClass("on").siblings().removeClass("on");// 인디케이터 활성화

		oldidx = nowidx;

	}


	// 인디케이터에 대한 클릭이벤트 구문
	$btn.on("click", function(evt) { // hasClass : 참거짓. 앞에 !일시 거짓
		nowidx = $btn.index($(this)); // 현재의 nowidx를 불러온 뒤에
			move(); // 위에서 만든 슬라이드 인디케이터 변환함수 호출
		evt.preventDefault();
	});




	// 자동재생 함수
	function autoPlay() {
		setIntervalId = setInterval(function() { // function() =익명함수
			nextidx();
			move();
		}, 5000);
	}

	//자동재생 멈춤 함수
	$('.arrow > a,.main01-pagination').on({		
		mouseover:function(){		//wrap에 마우스 오버시
			clearInterval(setIntervalId)	//인터벌 메서드 삭제
		},
		mouseout:function(){	//마우스 아웃시에는
			autoPlay();			//timer를 다시 실행
		}
	});



	// 다음번 인덱스 번호 추출
	function nextidx() {
		if (nowidx > 1) {
			nowidx = 0;
		} else {
			nowidx++;
		}
	}


	// 다음버튼에 대한 클릭이벤트 구문
	$("#main01 .slides-next").on("click", function(evt) {
		if (nowidx > 1) {
			nowidx = 0;
		} else {
			nowidx++;
		}
		move(); // 위에서 만든 슬라이드 인디케이터 변환함수 호출
		evt.preventDefault();
	});


	// 이전버튼에 대한 클릭이벤트 구문
	$("#main01 .slides-prev").on("click", function(evt) {
		if (nowidx < 1) {
			nowidx = 2;
		} else {
			nowidx--;
		}
		move(); // 위에서 만든 슬라이드 인디케이터 변환함수 호출
		evt.preventDefault();
	});



	//하단 스크롤 버튼 클릭이벤트
	$down.on("click", function(){
		$("html,body").animate({
			"scrollTop":"900"
			},1000,"easeInOutCirc");
		return false;
	});

	
});












//슬라이드 02 시작---------------------------------------------------------------------
$(document).ready(function(){
	

	var $btn = $(".main02-pagination > li > a"); // 버튼
	var $slide = $("#main02 > ul > li")// 슬라이드
	var nowidx = 0;
	var oldidx = nowidx; // 이전에 선택된 슬라이드의 인덱스번호
	var $down = $("#main02 .downBtn");//아래로 버튼
	var setIntervalId;


		
	$(window).on("load",function() {

		$slide.hide().eq(nowidx).addClass("on").show(); // nowidx에 해당하는
																// 슬라이드만 노출
		$btn.eq(nowidx).parent().addClass("on").siblings()
		.removeClass("on");// 인디케이터 활성화
		autoPlay();// 자동실행함수호출

	});



	// 슬라이드 무브함수
	function fadeAction() {
		$slide.eq(oldidx).stop().fadeOut(1000);// 이전 슬라이드 사라짐
		$slide.eq(nowidx).stop().fadeIn(1000);// nowidxd에 해당하는 슬라이드 나타남
		titAnimate();

		$btn.eq(nowidx).parent().addClass("on").siblings().removeClass(
				"on");// 인디케이터 활성화
		oldidx = nowidx;

	}

	// 인디케이터에 대한 클릭이벤트 구문
	$btn.on("click", function(evt) { // hasClass : 참거짓. 앞에 !일시 거짓
		nowidx = $btn.index($(this)); // 현재의 nowidx를 불러온 뒤에
		if (oldidx != nowidx) { // oldidx랑 비교
			fadeAction(); // 위에서 만든 슬라이드 인디케이터 변환함수 호출
		}
		evt.preventDefault();
	});

	// 자동재생 함수
	function autoPlay() {
		setIntervalId = setInterval(function() { // function() =익명함수
			nextidx();
			fadeAction();

		}, 5000);
	}


	//자동재생 멈춤 함수
	$('.main02-pagination a').on({		
		mouseover:function(){
			clearInterval(setIntervalId)
		},
		mouseout:function(){
			autoPlay();
		}
	});




	// 다음번 인덱스 번호 추출
	function nextidx() {
		if (nowidx > 2) {
			nowidx = 0;
		} else {
			nowidx++;
		}
	}

	// 다음버튼에 대한 클릭이벤트 구문
	$("#main02 .slides-next").on("click", function(evt) {
		if (nowidx > 2) {
			nowidx = 0;
		} else {
			nowidx++;
		}
		fadeAction(); // 위에서 만든 슬라이드 인디케이터 변환함수 호출
		evt.preventDefault();
	});
	// 이전버튼에 대한 클릭이벤트 구문
	$("#main02 .slides-prev").on("click", function(evt) {
		if (nowidx < 1) {
			nowidx = 3;
		} else {
			nowidx--;
		}
		fadeAction(); // 위에서 만든 슬라이드 인디케이터 변환함수 호출
		evt.preventDefault();
	});

	//하단 스크롤 버튼 클릭이벤트
	$down.on("click", function(){
		$("html,body").animate({
			"scrollTop":"1800"
			},1000,"easeInOutCirc");
		return false;
	});


	function titAnimate(){
		$(".txt_icon_wrap").css({"top":"50px","opacity":"0"}).stop().animate({"top":"0","opacity":"1"},1500,'easeInOutBack');
		$(".txt_title_wrap").css({"top":"50px","opacity":"0"}).stop().delay(100).animate({"top":"0","opacity":"1"},1500,'easeInOutBack');
		$(".txt_inpo_wrap").css({"top":"50px","opacity":"0"}).stop().delay(200).animate({"top":"0","opacity":"1"},1500,'easeInOutBack');
		$(".txt_inpo_link").css({"top":"50px","opacity":"0"}).stop().delay(300).animate({"top":"0","opacity":"1"},1500,'easeInOutBack');
	}
	
});// 슬라이드 02 끝



//슬라이드 03---------------------------------------------------------------------
$(document).ready(function(){
	
		var $container = $(".box-wrap > .box-slides > ul");

		var $button = $(".main03-pagination > li");
				
					
		$button.on("click", function() {

			var tg = $(this);
			var idx = tg.index();

			tg.siblings().removeClass("on");
			tg.addClass("on");

			tg.parents().children("ul").animate({
				left : -380 * idx
			});

			return false;

		});


});

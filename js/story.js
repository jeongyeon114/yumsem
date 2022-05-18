//비디오 사이즈 최적화------------------------------------------------------------------------------------
$(function(){
		var screenWidth = screen.width; //스크린 가로값
		var nowMargin = screenWidth/2;
		$(".video-wrap").css({"width":screenWidth,"marginLeft":-nowMargin});
});



//스크롤 이미지 페이드인---------------------------------------------------------------------------------
$(function(){
	
	$(window).scroll(function scrollHandler(){
		var top = $(window).scrollTop();

		//section02
		$("#section02 .keyword_a").animate({"top":"0","opacity":"1"},800,'easeOutQuad');
		$("#section02 .keyword_b").delay(150).animate({"top":"0","opacity":"1"},800,'easeOutQuad');
		$("#section02 .keyword_c").delay(250).animate({"top":"0","opacity":"1"},800,'easeOutQuad');
		$("#section02 .keyword_txt").delay(350).animate({"top":"30px","opacity":"1"},800,'easeOutQuad');

		//section03
		if(top>800){
			$("#section03 .rotate_img").animate({"opacity":"1"},1000,'easeOutQuad');
		}
		if(top>600){
			$("#section03 .logo").animate({"top":"0","opacity":"1"},1500,'easeInOutBack');
			$("#section03 .tit").delay(150).animate({"top":"0","opacity":"1"},1500,'easeInOutBack');
			$("#section03 .text").delay(150).animate({"top":"0","opacity":"1"},1500,'easeInOutBack');
			$("#section03 .more").delay(250).animate({"top":"0","opacity":"1"},1500,'easeInOutBack');
		}

		//section04
		if(top>1300){
			$("#section04 h3.tit").animate({"top":"0","opacity":"1"},1500,'easeInOutBack');
			$(".txt_1").delay(150).animate({"top":"0","opacity":"1"},1500,'easeInOutBack');
			$("#section04 img").delay(150).animate({"top":"0","opacity":"1"},1500,'easeInOutBack');
			$(".txt_2").delay(250).animate({"top":"0","opacity":"1"},1500,'easeInOutBack');
			$(window).off("scroll", scrollHandler);
		}

	});


});



//이미지 반복 회전
$(function rotate(){
	var rot = 0;
	setInterval(function() {
		rot++;
		$(".rotate_img").css({'transform':'rotate(' + (rot * 30)  + 'deg)','z-index':'-100'});
		console.log(rot)
	},3000);
});






// 이미지 스크롤시 애니메이션 ----------------------------------------------------------------------------
$(function(){

		$(window).on('scroll', function(){
			
			var scrollTop = $(this).scrollTop(); 
			var imgFloat = $(".float-img").offset().top;

	
			console.log(scrollTop)

			if(scrollTop > imgFloat){
				$('.float-img').stop().animate({
					'top':(-(scrollTop-imgFloat-3000)*0.3)

				},1000)
			}else if(scrollTop < imgFloat)
				$('.float-img').stop().animate({
					'top':(-(scrollTop-imgFloat-3000)*0.3)

				},1000)


		});


});



//갤러리 리스트 애니메이트-------------------------------------------------------------------------------
$(function(){
	
	var $menu = $("ol.gallery-menu > li");
	var $box = $("ul.gallery-list");
	var $moreBtn = $(".btn-more");
	var hasOn;
	var nowidx;


	//more버튼 클릭시
	$moreBtn.on("click",function(){	
		$(this).removeClass("on");
		$box.css({"height":"1788px"}).children().removeClass("off").addClass("on");
		return false;
	});


	//menu버튼 클릭시
	$menu.on("click", function(){
		nowidx = $(this).index();

		$(this).addClass("on").siblings().removeClass();

		if(nowidx == 0){
			allList();
			$moreBtn.addClass("on");
		}else if(nowidx == 1){
			manuList1();

		}else if(nowidx == 2){
			manuList2();

		}else if(nowidx == 3){
			manuList3();
		}else{
			manuList4();
		}

		return false;
	});



	//메뉴 - 전체보기
	function allList(){
		$box.css({"height":"1250px"});
		$(".m1,.m2,.m3,.m4").removeClass("off").addClass("on");	
		$box.children("li").eq(1).css({"left":"302px"});
		$box.children("li").eq(2).css({"left":"604px"});
		$box.children("li").eq(3).css({"top":"174px","left":"0"});
		$box.children("li").eq(4).css({"top":"170px","left":"302px"});
		$box.children("li").eq(5).css({"top":"174px","left":"604px"});
		$box.children("li").eq(6).css({"top":"344px","left":"302px"});
		$box.children("li").eq(7).css({"top":"403px","left":"604px"});
		$box.children("li").eq(8).css({"top":"573px","left":"0"});
		$box.children("li").eq(9).css({"top":"573px","left":"302px"});
		$box.children("li").eq(10).css({"top":"802px","left":"604px"});
		$box.children("li").eq(11).css({"top":"972px","left":"0"});
		$box.children("li").eq(12).css({"top":"972px","left":"302px"}).addClass("off");
		$box.children("li").eq(13).css({"top":"1250px","left":"604px"}).addClass("off");
		$box.children("li").eq(14).css({"top":"1176px","left":"0"}).addClass("off");
		$box.children("li").eq(15).css({"top":"1380px","left":"0"}).addClass("off");
		$box.children("li").eq(16).css({"top":"1420px","left":"302px"}).addClass("off");
		$box.children("li").eq(17).css({"top":"1454px","left":"604px"}).addClass("off");
		$box.children("li").eq(18).css({"top":"1584px","left":"0"}).addClass("off");
	}


	//메뉴1 - 얌샘피플
	function manuList1(){
		$moreBtn.removeClass("on");
		$box.css({"height":"400px"});
		$(".m1").removeClass("off").addClass("on");
		$(".m2,.m3,.m4").removeClass("on").addClass("off");

		$box.children("li").eq(5).css({"top":"0","left":"0"});
		$box.children("li").eq(8).css({"top":"0","left":"302px"});
		$box.children("li").eq(9).css({"top":"0","left":"604px"});
	}

	//메뉴2 - 인테리어
	function manuList2(){
		$moreBtn.removeClass("on");
		$box.css({"height":"1000px"});
		$(".m2").removeClass("off").addClass("on");
		$(".m1,.m3,.m4").removeClass("on").addClass("off");
		$box.children("li").eq(3).css({"top":"0"});
		$box.children("li").eq(6).css({"top":"0"});
		$box.children("li").eq(7).css({"top":"0"});
		$box.children("li").eq(10).css({"top":"229px","left":"302px"});
		$box.children("li").eq(12).css({"top":"399px","left":"0"});
		$box.children("li").eq(13).css({"top":"399px","left":"604px"});
		$box.children("li").eq(15).css({"top":"603px","left":"604px"});
		$box.children("li").eq(16).css({"top":"677px"});
		$box.children("li").eq(17).css({"top":"807px","left":"604px"});
	}

	//메뉴3 - 연구소
	function manuList3(){
		$moreBtn.removeClass("on");
		$box.css({"height":"400px"});
		$(".m3").removeClass("off").addClass("on");
		$(".m1,.m2,.m4").removeClass("on").addClass("off");
		$box.children("li").eq(14).css({"top":"0","left":"0"});
	}

	//메뉴4 - 생산공장
	function manuList4(){
		$moreBtn.removeClass("on");
		$box.css({"height":"400px"});
		$(".m4").removeClass("off").addClass("on");
		$(".m1,.m2,.m3").removeClass("on").addClass("off");
		$box.children("li").eq(0).css({"top":"0","left":"0"});
		$box.children("li").eq(1).css({"top":"0","left":"302px"});
		$box.children("li").eq(2).css({"top":"0","left":"604px"});
		$box.children("li").eq(11).css({"top":"174px","left":"0"});
	}


	//앵커 무력화
	$("ul.gallery-list > li.box > a").on("click",function(){
		return false;
	});
	
});
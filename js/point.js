


//�Ǹ޴�
$(function(){
	var list1 = $("#section01").offset().top;
	var list2 = $("#section02").offset().top;
	var list3 = $("#section03").offset().top;
	var list4 = $("#section04").offset().top;
	
	//Ŭ����
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

	//��ũ�ѽ�
	$(window).on("scroll",function(){
		var position = $(this).scrollTop();

		//����
		if(747 < position){
			$(".sub_tab").css({"position":"fixed", "top":"20px", "left":"50%","margin-left":"-244px"});
		}else if(747 > position){			
			$(".sub_tab").css({"position":"relative", "top":"0px"});
		}
		
		//onŬ����
		if(0 < position){$(".sub_tab").children().removeClass();}
		if(300 < position){$(".sub_tab").children().eq(0).addClass("on").siblings().removeClass();}
		if(list2-200 < position){$(".sub_tab").children().eq(1).addClass("on").siblings().removeClass();}
		if(list3-200 < position){$(".sub_tab").children().eq(2).addClass("on").siblings().removeClass();}
		if(list4-200 < position){$(".sub_tab").children().eq(3).addClass("on").siblings().removeClass();}


	});
});


//ī���� �ִϸ��̼�
$(function(){

	// ī���� 01
	$(window).scroll(function scrollHandler(){
		var position = $(window).scrollTop();
		if(2300 < position){
			counter01();
			$(window).off("scroll", scrollHandler);
		}
	});

	// ī���� 02
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






//bx�����̵�
$(function(){
	mySlider = $(".slide_box").bxSlider({
		mode:"horizontal",  // ���� �������� �����̵�
		speed:500,			// �̵� �ӵ��� ����
		pager:false,		// ���� ��ġ ����¡ ǥ�� ���� ����
		moveSlides:3,		// �����̵� �̵��� ���� ����
		slideWidth:810,		// �����̵� ���� �ʺ� ����
		slideHeight:345,		// �����̵� ���� �ʺ� ����
		minSlides:3,		// ���� ���� ������ ����
		maxSlides:3,		// �ִ� ���� ������ ����
		slideMargin:10,		// �����̵尣�� ������ ����
		auto:true,			// �ڵ����� �带�� ����
		autoHover:true,		// ���콺 ������ ������ų�� ����
		controls:false		// ���� ���� ��ư ���� ���� ����
	});
	
//	������ ��ư�� Ŭ���ϸ� ���� �����̵�� ��ȯ�˴ϴ�.
	$(".prev").on("click",function(){
		mySlider.goToPrevSlide(); //���� �����̵� ��ʷ� �̵��˴ϴ�.
		return false;
	});
//	����� ��ư�� Ŭ���ϸ� ���� �����̵�� ��ȯ�˴ϴ�.
	$(".next").on("click",function(){
		mySlider.goToNextSlide(); //���� �����̵� ��ʷ� �̵��˴ϴ�.
		return false;
	});

});






//���׸��� �̹��� �ڽ�
$(function(){
	$(window).scroll(function scrollHandler(){
		var position = $(window).scrollTop();
		if(6500 < position){
			$("#section04 .img-wrap > li").css({"transform":"scale(1,1)"});
			$(window).off("scroll", scrollHandler);
		}
	});
});




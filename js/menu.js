
$(function(){
	//��ũ�ѽ�
	$(window).on("scroll",function(){
		var position = $(this).scrollTop();

		
		
		//����
		if(306 < position){
			$(".product_tab").css({"position":"fixed", "top":"20px", "left":"50%","margin-left":"-270px"});
		}else if(306 > position){			
			$(".product_tab").css({"position":"relative", "top":"0px", "left":"0","margin":"0 auto 80px"});
		}
	});
		

});




/* SVGŸ��Ʋ �ִϸ��̼�
walkway,TweenMax ���ø� ����*/
$(function(){

		var svg2 = new Walkway({
          selector: '#Layer_1',
          duration: 2500,
          easing: 'linear'
        }).draw(function() {
          console.dir('Finished diamond!');
        });

		$(function(){
			TweenMax.set($('#section01').find('.txt01'),{alpha:0,y:50});
				var _Walk = new Walkway({
					selector: '#Layer_1',
					duration: 3000
				});
				_Walk.draw(function(){
					var _target = $(String(this.selector));
					TweenMax.to($('.path01'),0.8,{fill:'#bec726'});
					TweenMax.to($('.path01'),0.8,{stroke:'transparent'});
					TweenMax.to($('.path02'),0.8,{fill:'#fbb813'});
					TweenMax.to($('.path02'),0.8,{stroke:'transparent'});
					TweenMax.to($('#section01').find('.txt01'),0.8,{alpha:1,y:0,ease:Quad.easeOut});
				});
				TweenMax.set($('#Layer_1').find('path'),{fill:'transparent'})
		});

		$(document).ready(function(){
	
		});		
});	
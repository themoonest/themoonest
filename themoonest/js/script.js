// loading 시작
jQuery(function($){
	$(document).ready(function(){
		$('.loading').addClass('on');
		for(i=0;i<$('.ld_moon img').length;i++){
			(function(x){
				setTimeout(function(){
					$('.ld_moon img').eq(x).show()
					$('.ld_moon img').not(':eq('+x+')').hide();
				}, x * 50);
			})(i);
		}
		$(window).on('scroll touchmove mousewheel', function(event){
			event.preventDefault();
			event.stopPropagation();
			return false;
		});
	});
	// loading 끝

	// loading 외의 스크립트 전체 시작
	setTimeout(function(){

		$('.loading').removeClass('on');
		$('.moon img').fadeIn(2000);

		// click, hover 시작
		var win_H=$(window).height();
		(function(){
			var filter="win16|win32|win64|mac|macintel";
			if(navigator.platform){
				if(filter.indexOf(navigator.platform.toLowerCase())<0){
					$('.section').height(win_H);
					$('.controls').hide();
					$('.pf_cnt').on('click', function(){
						if($(this).hasClass('ck')){
							$(this).removeClass('ck');
						} else {
							$('.pf_cnt').removeClass('ck');
							$(this).addClass('ck');
						}
					});
				} else {

					//pc 
					$('.container').addClass('pc');

					// fullpage
					var ctl_nm=['MAIN', 'PORTFOLIO', 'CONTACT'];
					var ctl_nb=['01', '02', '03'];
					$('#fullpg').fullpage({
						anchors: ['visual', 'portfolio', 'contact'],
						menu: '.controls',
						afterLoad: function(anchorLink, idx){
							var activeElement;
							function colorC(n){
								n_edit=n - 1;
								$('.c_list').eq(n_edit).find('a').text(ctl_nm[n_edit]);
							}
							function colorB(){
								$('.controls').removeClass('on_d').addClass('on_b');
							}
							function colorD(){
								$('.controls').removeClass('on_b').addClass('on_d');
							}
							if(idx==1){
								activeElement=$('#visual');
								colorC(idx);
								colorB();
								$('.c_list').eq(1).find('a').text('02');
								$('.c_list').eq(2).find('a').text('03');
							} else if(idx==2){
								activeElement=$('#portfolio');
								colorC(idx);
								colorD();
								$('.c_list').eq(0).find('a').text('01');
								$('.c_list').eq(2).find('a').text('03');
							} else if(idx==3){
								activeElement=$('#contact');
								colorC(idx);
								colorD();
								$('.c_list').eq(0).find('a').text('01');
								$('.c_list').eq(1).find('a').text('02');
							}
						}
					});
				}
			}
		})();

		// click, hover 끝
		if($(window).height()<=700){
			$('.pf_slide').height('90%');
		}
		// typing 시작
		(function(){
			var y=[];
			for(i=0;i<$('.del').length;i++){
				y[i]=i;
				(function(x){
					setTimeout(function(){

						$('.del').eq(x).addClass('selected');
					}, 1000+Number((x+4)+ '00'));
				})(i);
			}

			for(i=0;i<9;i++){
				(function(x){
					y.reverse();
					setTimeout(function(){
						$('.del').eq(y[x]).removeClass('selected');
					}, Number(3500)+ Number((x+2)+ '00'));
				})(i);
			}

			for(i=0;i<$('.name').length;i++){
				(function(x){
					setTimeout(function(){
						$('.name').eq(x).addClass('selected');
					}, Number(4500)+ Number((x+2)+ '00'));
				})(i);
			}

			setTimeout(function(){
				$('.bar').removeClass('bar');
			}, 4800);
		})();

		// typing 끝

		// star_1 시작
		(function(){
			var originalCircle=$('.star_value');
			var star_1_W=$('.star_1').width();
			var star_1_H=$('.star_1').height();
			for(var i=0;i<60;i++){

				var ran_x=Math.floor(Math.random()*(star_1_W));
				var ran_y=Math.floor(Math.random()*(star_1_H));
				var clo=originalCircle.clone();
				originalCircle.before(clo);

				clo.attr({
					'cx': ran_x,
					'cy': ran_y
				});
			}
			for(var i=0;i<($('.star_value').length)/ 3;i++){

				var ran_time=Math.floor(Math.random()*(100))+ 3;
				$('.star_value').eq(i).attr({
					'r': '1.5'
				});
				if(i>0 && i<$('.star_value').length/12){
					$('.star_value').eq(i).addClass('kira');
					$('.star_value').eq(i).attr({
						'filter': 'url(#blur)'
					});
				} else if(i>$('.star_value').length/12 && i<$('.star_value').length/6){
					$('.star_value').eq(i).addClass('kirakira');
				}

			}
		})();

		// star_1 끝

		// star_2 시작
		var originalCircle=$('.star_2 circle');
		var win_W=$(window).width();
		$('.star_2').attr({
			'width': win_W+800,
			'height': win_H+800
		});
		for(var i=0;i<300;i++){
			var ran_x=Math.floor(Math.random()*(win_W+800));
			var ran_y=Math.floor(Math.random()*(win_H+800));
			var ran_x_edit=ran_x+Math.floor(Math.random()*(100));
			var ran_y_edit=ran_y+Math.floor(Math.random()*(100));
			var ran_time=Math.floor(Math.random()*(100))+ 3;

			var clo=originalCircle.clone();
			originalCircle.before(clo);

			clo.attr({
				'cx': ran_x,
				'cy': ran_y
			});
			clo.find('animate').first().attr({
				'values': ran_x+";"+ran_x_edit+";"+ran_x+";",
				'dur': ran_time+'s'
			});

			clo.find('animate').last().attr({
				'values': ran_y+";"+ran_y_edit+";"+ran_y+";",
				'dur': ran_time+'s'
			});
		}
		for(var i=0;i<($('.star_2 circle').length)/ 2;i++){

			var ran_time=Math.floor(Math.random()*(100))+ 3;
			$('.star_2 circle').eq(i).attr({
				'r': '1.5',
				'filter': 'url(#blurF)'
			});

			$('.star_2 circle').eq(i).addClass('kira');
		}
		// star_2 끝

		// pf slide 시작
		var ck=0;
		var pf_size;
		$(window).on('resize', function(){
			ck=0;
			$('.pf_cnt').show();
			for(i=0;i<$('.pf_cnt').length;i++){

				if($(window).outerWidth()> 1280){
					pf_size=3;
					$('.pf_cnt').eq(3+i).hide();
				} else if($(window).outerWidth()> 768){
					pf_size=2;
					$('.pf_cnt').eq(2+i).hide();
				} else if($(window).outerWidth()> 0){
					pf_size=1;
					$('.pf_cnt').eq(1+i).hide();
				}
			}
		}).resize();
		(function(){
			var len=$('.pf_cnt').length;

			function slide(i, t){
				if($(t).hasClass('next')){
					$('.pf_cnt').eq(i - 1).hide();
					$('.pf_cnt').eq(pf_size+i - 1).show();
				} else if($(t).hasClass('prev')){
					$('.pf_cnt').eq(i+pf_size).hide();
					$('.pf_cnt').eq(i).show();

				}
			}

			$('.arrow').on('click', function(){
				if($(this).hasClass('prev')){
					ck==0? ck=0 : --ck;
				} else {
					ck==len - pf_size? ck=len - pf_size : ++ck;
				}
				slide(ck, this);
			});
		})();
		// pf slide 끝

		// mail form 시작
		(function(){
			$('html').on('click',function(e){ 
				if(!$(e.target).hasClass('eml_name')){
					$('.eml_name').attr({
						placeholder:' 회신 받을 메일 주소'
					});
				} else {
					$('.eml_name').attr({
						placeholder:''
					});
				}
				if(!$(e.target).hasClass('eml_tit')){
					$('.eml_tit').attr({
						placeholder:' 메일 제목'
					});
				} else {
					$('.eml_tit').attr({
						placeholder:''
					});
				}
				if(!$(e.target).hasClass('eml_cnt')){
					$('.eml_cnt').attr({
						placeholder:' 실제로 동작하는 폼입니다.'
					});
				} else {
					$('.eml_cnt').attr({
						placeholder:''
					});
				}
			});
		})();
		// mail form 끝
	}, 1100);

	//마지막
});
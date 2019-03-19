var algo = algo || {};
algo =(()=>{
	var init =x=>{
		algo.$.init(x);
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
			$.getScript($.js()+'/compo.js',()=>{
				$('#nav').children().eq(0).html($$.a({id : 'seq', url:'#'}).text('수열'));
				$('#nav').children().eq(1).html($$.a({id : 'math', url:'#'}).text('수학'));
				$('#nav').children().eq(2).html($$.a({id : 'sort', url:'#'}).text('정렬'));
				$('#nav').children().eq(3).html($$.a({id : 'arr', url:'#'}).text('배열'));
				$('#nav').append($$.li({id:'app'}))
				$('#nav').children().eq(4).html($$.a({id : 'app', url:'#'}).text('응용'));
				$('#que_1').text('수열 1 - 등차수열의 합');
				$('#que_2').text('수열 2 - 등비수열의 합');
				form();
				$('#answer_btn_1').text('결과보기').addClass('cursor').click(()=>{
					$.ajax({
						url : $.ctx()+'/algo/seq/1',
						type : 'post',
						data : JSON.stringify(
								{start:$('#startNum').val(),
									end:$('#endNum').val(),
									diff:$('#diffNum').val()}),
						dataType : 'json',
						contentType : "application/json; charset=utf-8",
						success : d=>{
							$('#result').html($$.h({id: 'h_res',num: '2'})).text('결과값 :' +d.result);
						},
						error : e=>{
							alert('AJAX 실패');
						}
					});
				});
				
				$('#reset_btn').text('리셋').addClass('cursor').click(()=>{
					form.input();
				})
				
		})
	};
	var form =()=>{
		$('p#result').html($$.form().append($$.label({name:'form-group'}).text('startNum')).append('</br>')
						.append($$.input({type: 'text', id:'startNum'})).append('</br>')
						.append($$.label({name:'form-group'}).text('endNum')).append('</br>')
						.append($$.input({type: 'text', id:'endNum'})).append('</br>')
						.append($$.label({name:'form-group'}).text('diffNum')).append('</br>')
						.append($$.input({type: 'text', id:'diffNum'})));
	}
	return{init:init,
		onCreate : onCreate};
})();



algo.$ ={
		init : (x)=>{
			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				algo.onCreate();
			})
		}
};
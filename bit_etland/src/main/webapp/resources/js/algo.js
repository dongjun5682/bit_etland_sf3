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
			nav();
			rm();
			que('등차수열의 합계');
			$('#right_content').prepend($$.div({id:'right_start'}));
			$('#leave_a_comment').before('<div id="right_end"/>')
			$('#right_start').nextUntil('#right_end').wrapAll('<div id="new_div"></div>');
			var str = $('#new_div').html();
			$('#new_div').remove();
			$('#right_end').remove();
			var arr = [
				{id:'a' ,val :'등차수열의 합계'},
				{id:'b' ,val :'등비수열의 합계'},
				{id:'c' ,val :'팩토리수열의 합계'},
				{id:'d' ,val :'피보나치수열의 합계'}
			]
			$.each(arr,(i,j)=>{
					$('#right_start').append(str)
					$('#question').attr('id','question_'+j.id);
					$('#question_'+j.id).text(j.val);
			});
		})
	};
	var nav =()=>{
		$('#nav').children().eq(0).html($$.a({id : 'seq', url:'#'}).text('수열'));
		$('#nav').children().eq(1).html($$.a({id : 'math', url:'#'}).text('수학'));
		$('#nav').children().eq(2).html($$.a({id : 'sort', url:'#'}).text('정렬'));
		$('#nav').children().eq(3).html($$.a({id : 'arr', url:'#'}).text('배열'));
		$('#nav').append($$.li({id:'app'}))
		$('#nav').children().eq(4).html($$.a({id : 'app', url:'#'}).text('응용'));
		
	}
	var que = (x)=>{
		$('#question').text(x); 
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
					$('#result').html($$.h({id: 'h_res',num: '2'}).text('결과값 :' +d.result));
				},
				error : e=>{
					alert('AJAX 실패');
				}
			});
		});
		$('#reset_btn').text('리셋').addClass('cursor').click(()=>{
			form();
		})
		
	}
	var rm =()=>{
		$('#rm').before('<div id="del_start_2"/>')
		$('#rm_end').after('<div id ="del_end_2">')
		$('#del_start_2').nextUntil('#del_end_2').wrap().remove();
		
	}
	
	var form =()=>{
		$('p#result').html($$.form({id:'form'}).append($$.label({name:'form-group'}).text('startNum')).append('</br>')
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
function sequence(){
	_sequence.nav();
	_sequence.remove();
	_sequence.question('등차수열의 합계');
	$('#right_content').prepend($$.div({id:'right_start'}));
	$('#leave_a_comment').before('<div id="right_end"/>')
	$('#right_start').nextUntil('#right_end').wrapAll('<div id="new_div"></div>');
	let str = $('#new_div').html();
	$('#new_div').remove();
	$('#right_end').remove();
	let arr = [
		{id:'a' ,val :'등차수열의 합계'},
		{id:'b' ,val :'등비수열의 합계'},
		{id:'c' ,val :'팩토리수열의 합계'},
		{id:'d' ,val :'피보나치수열의 합계'}
		];
	$.each(arr,(i,j)=>{
			$('#right_start').append(str)
			$('#question').attr('id','question_'+j.id);
			$('#question_'+j.id).text(j.val);
			$('.buttons').empty();
			$('<span class="label label-danger"></span>')
			.text('결과')
			.addClass('cursor')
			.appendTo('.buttons')
			.click(()=>{
				let data = {
						start:$('#startNum').val(),
						end:$('#endNum').val(),
						diff:$('#diffNum').val()};
				$.ajax({
					url : $.ctx()+'/algo/seq/1',
					type : 'post',
					data : JSON.stringify(data),
					dataType : 'json',
					contentType : "application/json; charset=utf-8",
					success : d=>{
						$('#result').empty().html($$.h({id: 'h_res',num: '2'}).text('결과값 : ' +d.result));
						$('#form').remove();
						alert('결과값이나오고 폼이 삭제');
					},
					error : e=>{
						alert('AJAX 실패');
					}
				});
			});
			
			$('<span class="label label-warning"></span>')
			.text('리셋')
			.addClass('cursor')
			.appendTo('.buttons')
			.click(()=>{
				_sequence.inputForm();
				$('#right_start > form').remove();
			});
	});
}


var _sequence = {
		inputForm : ()=>{
			$('p#result').html($$.form({id:'form'}).append($$.label({name:'form-group'}).text('StartNum')).append('</br>')
							.append($$.input({type: 'text', id:'startNum'})).append('</br>')
							.append($$.label({name:'form-group'}).text('EndNum')).append('</br>')
							.append($$.input({type: 'text', id:'endNum'})).append('</br>')
							.append($$.label({name:'form-group'}).text('DiffNum')).append('</br>')
							.append($$.input({type: 'text', id:'diffNum'})));
		},
		question : (x)=>{
			_sequence.inputForm();
			$('#question').text(x); 
		},
		remove : ()=>{
			$('#rm').before('<div id="del_start_2"/>')
			$('#rm_end').after('<div id ="del_end_2">')
			$('#del_start_2').nextUntil('#del_end_2').wrap().remove();
			
		},
		nav : ()=>{
			$('#nav').children().eq(0).html($$.a({id : 'seq', url:'#'}).text('수열'));
			$('#nav').children().eq(1).html($$.a({id : 'math', url:'#'}).text('수학'));
			$('#nav').children().eq(2).html($$.a({id : 'sort', url:'#'}).text('정렬'));
			$('#nav').children().eq(3).html($$.a({id : 'arr', url:'#'}).text('배열'));
			$('#nav').append($$.li({id:'app'}))
			$('#nav').children().eq(4).html($$.a({id : 'app', url:'#'}).text('응용'));
			
		}
}


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
				$('#que_1').text('수열 1 - 1+2+3+4+…+100까지의 합계 (do~while)');
				$('#que_2').text('수열 2 - 1-2+3-4+5-6+…+99-100의 합계 (do~while, while, if) ');
				
		})
	};
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
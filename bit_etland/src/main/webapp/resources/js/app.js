var app = app || {};
app.path = (()=>{
	var init =x=>{
		app.session.init(x);
		alert(app.$.ctx());
		onCreate();
	}
	var onCreate = ()=>{
		setContentView();
	}
	var setContentView =()=>{
		
	}
	return{init : init}
})();

app.session = (()=>{
	var init =x=>{
		onCreate(x);
	}
	var onCreate =x=>{
		sessionStorage.setItem('ctx',x);
		sessionStorage.setItem('js',x+'/resources/js/');
		sessionStorage.setItem('css',x+'/resources/css/');
		sessionStorage.setItem('img',x+'/resources/img/');
	}
	var getPath =()=>{
		return session.Storage.getItem('ctx',x);
	}
	return {init : init}
})();


app.$ = {
		ctx : ()=>{return sessionStorage.getItem('ctx')},
		js : ()=>{return sessionStorage.getItem('js')},
		css : ()=>{return sessionStorage.getItem('css')},
		img : ()=>{return sessionStorage.getItem('img')}	
	};


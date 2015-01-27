var enter=document.querySelector('.account_menu_enter');
var close=document.querySelector('.login_popup_close');
var login_popup=document.querySelector('.login_popup');							
var form=login_popup.querySelector('.form');
var login=form.querySelector('input[name="login"]');
var password=form.querySelector('input[name="password"]');
var slogin=localStorage.getItem('login');

	enter.addEventListener('click', function(event){
		event.preventDefault();		
		login_popup.classList.add('login_popup_show');
		login.focus();
		if(slogin){
			login.value=slogin;
			password.focus();
		}
	}, false);


	close.addEventListener('click', function(event){
		event.preventDefault();		
		login_popup.classList.remove('login_popup_show');
	}, false);

	form.addEventListener('submit', function(event){
		if(!login.value || !password.value){
			event.preventDefault();	
			login_popup.classList.add('login_popup_error');

			console.log('gggggggggg');
		}
		else{
			localStorage.setItem('login', login.value);
		}
	}, false);

	window.addEventListener('keydown', function(event){
		if(event.keyCode==27 && login_popup.classList.contains('login_popup_show')){
			event.preventDefault();	
			login_popup.classList.remove('login_popup_show');
		}
	}, false)
fired = false
window.addEventListener("scroll", function(){
	var element = document.querySelector('#about');
	var position = element.getBoundingClientRect();
	scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
	if(scrollTop >= 10 && ! fired){
		document.getElementById("navheader").classList.add('navback-scrolled');
		fired = true;
	}
	else if(scrollTop == 0){
		document.getElementById("navheader").classList.remove('navback-scrolled');
		fired = false;
	}
	
	if(position.top <= 20){
		activate('about-nav');
	}
	else if (position.top > 20){
		activate('home-nav');
	}
});
function activate(id){
	element = document.getElementById(id);
	elements = document.querySelectorAll('a.active');
	for(i = 0; i < elements.length; i++)
		elements[i].classList.remove('active');
	element.classList.add('active');
}

const inViewport = (entries, observer) => {
	entries.forEach(entry => {
		entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
	});
};
const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}; 
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
	Obs.observe(EL, obsOptions);
});
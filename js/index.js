var fired = false;
window.addEventListener("scroll", function(){
  if (document.body.scrollTop >= 10 && fired === false) {
  	console.log(document.body.scrollTop);
    fired = true;
  }
}, true)
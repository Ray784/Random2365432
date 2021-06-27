const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const type = params.type;

const valid = ['mba', 'banking', 'ipm', 'ssc', 'interview']
const isValid = valid.includes(type);

const imagesElem = document.getElementById("carousel-imgs");
const indicatorElem = document.getElementById("carousel-ind");
const linksElem = document.getElementById("links");
const navElem = document.getElementById("info-nav");


const files = {
	"mba": {
		"images": ["./images/slide.svg", "./images/slide.svg", "./images/slide.svg", "./images/slide.svg"],
		"links" : {
			"Prestigious IIMs": {
				"IIM Ahmedabad": "https://iima.ac.in", 
				"IIM Bangalore": "https://iimb.ac.in", 
				"IIM Calcutta": "https://iimcal.ac.in", 
				"IIM Lucknow": "http://iiml.ac.in", 
				"IIM Kozhikode": "https://iimk.ac.in"
			},
			"Other Links": {
				"IIT Delhi": "https://dms.iitd.ac.in/admission-mba/", 
				"SP JIMR": "https:/www.spjain.org", 
				"IIT Bombay": "https://www.som.iitb.ac.in/", 
				"NITTE": "https://nsom.ac.in", 
			}
		}
	},
	"banking": {
		"images": ["./images/slide.svg", "./images/slide.svg", "./images/slide.svg", "./images/slide.svg"],
		"links" : {
			"Important Links": {
				"IBPS PO and Clerk": "https://www.ibps.in/", 
				"SBI PO and Clerk": "#"
			}
		}
	},
	"ssc": {
		"images": ["./images/slide.svg", "./images/slide.svg", "./images/slide.svg", "./images/slide.svg"],
		"links" : {
			"Important Links": {
				"Ixxxxx": "#", 
				"xxxxxxxx": "#"
			}
		}
	},
	"ipm": {
		"images": ["./images/slide.svg", "./images/slide.svg", "./images/slide.svg", "./images/slide.svg"],
		"links" : {
			"Important Links": {
				"xxxxxx": "#", 
				"xxxxxx": "#"
			}
		}
	},
	"interview": {
		"images": ["./images/slide.svg", "./images/slide.svg", "./images/slide.svg", "./images/slide.svg"],
		"links" : {
			"Important Links": {
				"xxxxxx": "#", 
				"xxxxxx": "#"
			}
		}
	}
}

function getCarouselImageItem(string){
	let div = document.createElement('div');
	div.classList.add("carousel-item");
	let img = document.createElement('img');
	img.src = string;
	img.classList.add("d-block");
	img.classList.add("w-100");
	div.appendChild(img);
	return div;
}

function getLinksDiv(head, links){
	let div = document.createElement('div');
	div.classList.add("col-md-6");
	div.classList.add("text-padded");
	div.classList.add("col-lg-3");
	let h4 = document.createElement('h4');
	h4.innerHTML = head;
	div.appendChild(h4)
	for(let link in links){
		a = document.createElement('a');
		a.setAttribute("href", links[link]);
		a.setAttribute("target", "_blank");
		a.innerHTML = link;
		div.appendChild(a);
		div.innerHTML += "<br>";
	}
	return div;
}

function getIndicatorItem(i){
	let button = document.createElement('button');
	button.setAttribute("data-bs-target", "#infoCarousel");
	button.setAttribute("data-bs-slide-to", i);
	return button;
}

function prepareImageDiv(images){
	for(let i = 0; i < images.length; i++){
		imgDiv = getCarouselImageItem(images[i])
		indButton = getIndicatorItem(i)

		if(i == 0){
			imgDiv.classList.add("active");
			indButton.classList.add("active");
			indButton.setAttribute("aria-current", "true");
		}
		imagesElem.appendChild(imgDiv);
		indicatorElem.appendChild(indButton);
	}
}

function prepareLinksDiv(links){
	for(let i in links){
		console.log(i, links[i])
		div = getLinksDiv(i, links[i]);
		linksElem.appendChild(div);
	}
}

if(isValid){
	navElem.innerHTML += type
	prepareImageDiv(files[type]['images']);
	prepareLinksDiv(files[type]['links']);
}else
	window.location = "../error.html"


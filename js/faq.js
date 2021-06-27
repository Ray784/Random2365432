const faqs = {
	"Some random question?"			 : "A good answer with a  beautiful explanation.",
	"Some another random question?"  : "A good answer with a  beautiful explanation.",
	"Some genuine question?"		 : "A good answer with a  beautiful explanation.",
	"Some another genuine question?" : "A good answer with a  beautiful explanation.",
	"Some random question2?"			 : "A good answer with a  beautiful explanation.",
	"Some random question3?"			 : "A good answer with a  beautiful explanation.",
	"Some random question4?"			 : "A good answer with a  beautiful explanation.",
	"Some random question5?"			 : "A good answer with a  beautiful explanation.",
}
const accordionElem = document.getElementById("FAQaccordion");

function createAccordionItem(question, answer, i){
	let div = document.createElement('div');
	div.classList.add("accordion-item");

	let h2 = document.createElement('h2');
	h2.classList.add('accordion-header');
	h2.setAttribute('id', 'heading' + i);
	
	let button = document.createElement('button');
	button.classList.add('accordion-button');
	button.classList.add('collapsed');
	button.setAttribute("data-bs-toggle", "collapse");
	button.setAttribute("data-bs-target", "#collapse" + i);
	button.setAttribute("aria-expanded" ,"false");
	button.setAttribute("aria-controls", "collapse" + i);
	button.innerHTML = question;

	h2.appendChild(button);

	let innerDiv = document.createElement('div');
	innerDiv.classList.add('accordion-collapse');
	innerDiv.classList.add('collapse');
	innerDiv.setAttribute("id", "collapse" + i);
	innerDiv.setAttribute("aria-labelledby", "heading" + i);
	innerDiv.setAttribute("data-bs-parent", "#FAQaccordion");

	let innerMostDiv = document.createElement('div');
	innerMostDiv.classList.add("accordion-body");
	innerMostDiv.innerHTML = answer;

	innerDiv.appendChild(innerMostDiv);

	div.appendChild(h2);
	div.appendChild(innerDiv);

	return div;
}

let i = 0;
for(let question in faqs){
	i += 1;
	accordionElem.appendChild(createAccordionItem(question, faqs[question], i));
}
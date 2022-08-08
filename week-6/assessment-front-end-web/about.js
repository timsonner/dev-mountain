console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form submitted")
	console.log('form submit');
}

function handleMouseOver(evt) {
	alert("You're winning at life.")
}

let form = document.querySelector('#contact');
let imageMain = document.querySelector('#image-main')

form.addEventListener('submit', handleSubmit);
imageMain.addEventListener("mouseover", handleMouseOver)
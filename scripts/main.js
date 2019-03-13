var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/dino.png') {
		myImage.setAttribute ('src','images/lovely.jpg');
	}else{
		myImage.setAttribute ('src','images/dino.png');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');
function setUserName() {
  var myName = prompt('введите своё имяо плииз');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Ти дебил, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
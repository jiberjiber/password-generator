// Assignment Code
let lengthSlider = document.querySelector("#lengthSlider");
let lengthDisplay = document.querySelector("#lengthDisplay");
lengthDisplay.innerHTML = lengthSlider.value;

lengthSlider.oninput = function () {
	lengthDisplay.innerHTML = this.value;
}

function generatePassword() {
	/*const capitalsObj = document.querySelector("#capitals");
	const lowercaseObj = document.querySelector("#lowercase");
	const numbersObj = document.querySelector("#numbers");
	const specialsObj = document.querySelector("#specials");
	const lengthObj = document.querySelector("#length");
	const length = lengthObj.options[lengthObj.selectedIndex].value;
	*/

	for (let i = 1; i < document.forms[0].length; i++) {
		if (!document.forms[0].elements[1].checked
			&& !document.forms[0].elements[2].checked
			&& !document.forms[0].elements[3].checked
			&& !document.forms[0].elements[4].checked) {
			alert("You must choose an option other than length!");
			return;
		}
	}

	let validChars = "";
	let password = "";

	const lengthInput = document.forms[0].elements[0].value;

	for (let i = 1; i < document.forms[0].length; i++) {
		if (document.forms[0].elements[i].checked) {
			validChars = validChars.concat(document.forms[0].elements[i].value);
		} else {
			continue;
		}
	}

	for (let i = 1; i < lengthInput; i++) {
		password += validChars.charAt(Math.floor(Math.random() * validChars.length));
	}

	return password;
}

var goBtn = document.querySelector("#go");
var stopBtn = document.querySelector("#stop");

goBtn.addEventListener("click",startLoop);
stopBtn.addEventListener("click",stopLoop);

// Write password to the #password input
function writePassword() {

	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}


let loop = window.setInterval(function (){
	writePassword();
}, 100);

function stopLoop(){
	window.clearInterval(loop);
}

function startLoop(){
	loop = window.setInterval(function (){
	writePassword();
}, 100);
}


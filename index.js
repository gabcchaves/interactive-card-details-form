'use strict';

// Validate form
function validateForm() {
	// Clear error messages
	let inputErrorMsgs = document.querySelectorAll(".input-error");
	for (let i = 0; i < inputErrorMsgs.length; i++) {
		inputErrorMsgs[i].innerHTML = "";
	}

	// Error signal
	let success = true;

	// Check for empty fields
	let inputFields = document.querySelectorAll(".card-form form input:not(input[type=submit])");
	for (let i = 0; i < inputFields.length; i++) {
		if (inputFields[i].value == '') {
			inputFields[i].closest('.form-field').lastElementChild.innerHTML = "Can't be blank";
			success = false;
		} else {
			inputFields[i].closest('.form-field').lastElementChild.innerHTML = "";
		}
	}

	// Check for invalid provided data
	let cardNumber = document.querySelector('#fcard_number');
	let expMonth = document.querySelector('#fexp_month');
	let expYear = document.querySelector('#fexp_year');
	let cvc = document.querySelector('#fcvc');
	
	if (cardNumber.value.match(/[a-zA-Z]/) != null) {
		cardNumber.closest('.form-field').lastElementChild.innerHTML = "Wrong format, numbers only";
		success = false;
	} else if (! /^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber.value)) {
		cardNumber.closest('.form-field').lastElementChild.innerHTML = "Wrong pattern";
		success = false;
	}

	if (expMonth.value.match(/[a-zA-Z]/) != null) {
		expMonth.closest('.form-field').lastElementChild.innerHTML = "Wrong format, numbers only";
		success = false;
	} else if (! /^\d{2}$/.test(expMonth.value)) {
		expMonth.closest('.form-field').lastElementChild.innerHTML = "Wrong pattern";
		success = false;
	}

	if (expYear.value.match(/[a-zA-Z]/) != null) {
		expYear.closest('.form-field').lastElementChild.innerHTML = "Wrong format, numbers only";
		success = false;
	} else if (! /^\d{2}$/.test(expYear.value)) {
		expYear.closest('.form-field').lastElementChild.innerHTML = "Wrong pattern";
		success = false;
	}

	if (cvc.value.match(/[a-zA-Z]/) != null) {
		cvc.closest('.form-field').lastElementChild.innerHTML = "Wrong format, numbers only";
		success = false;
	} else if (! /^\d{3}$/.test(cvc.value)) {
		cvc.closest('.form-field').lastElementChild.innerHTML = "Wrong pattern";
		success = false;
	}

	if (success) {
		document.cardForm.style.display = "none";

		document.querySelector("#card-number").innerHTML = inputFields[1].value;
		document.querySelector("#cardholder-name").innerHTML = inputFields[0].value;
		document.querySelector("#exp-date").innerHTML = '' + inputFields[2].value + '/' + inputFields[3].value;
		document.querySelector("#cvc").innerHTML = inputFields[4].value;

		document.querySelector("#complete-msg").style.display = "block";
	}
}

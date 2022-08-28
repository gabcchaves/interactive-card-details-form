'use strict';

// Validate form
function validateForm() {
	// Check for empty fields
	let inputFields = document.querySelectorAll(".card-form form input:not(input[type=submit])");
	for (let i = 0; i < inputFields.length; i++) {
		console.log(inputFields[i]);
	}
}

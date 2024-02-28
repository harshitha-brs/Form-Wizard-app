/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Step 2 form
Description: Logic for step 2 form
(c) Copyright by BRS with Nyros. 
**/

// Validation for the form 2 [radio buttons and dropdown] for signup-step2.html
function validate() {
  let plan = document.forms["myform"]["plan"].value;
  let sel_opt = document.forms["myform"]["sel_opt"].value;

  if (plan == "") {
    document.getElementById("error1").innerHTML = "Please select anyone";

    return false;
  } else if (plan == "a" || plan == "b" || plan == "c") {
    document.getElementById("error1").innerHTML = "";
  }

  if (sel_opt == "Select an Option") {
    document.getElementById("error2").innerHTML = "Please select anyone";
    return false;
  } else if (sel_opt == "a" || sel_opt == "b" || sel_opt == "c") {
    document.getElementById("error2").innerHTML = "";
  }
}

// var profileInput = document.getElementById("linkedinProfile");
// var errorMessage = document.getElementById("errorMessage");
// var formSubmitted = false;

// function populateLinkedInURL() {
//   profileInput.value = "https://www.linkedin.com/in/";
// }

// window.addEventListener("beforeunload", function(event) {
//   if (!formSubmitted && profileInput.value.trim() !== "") {
//     event.preventDefault();
//     event.returnValue =
//       "LinkedIn profile cannot be empty. Please enter your LinkedIn URL followed by the username.";
//   }
// });

// function validateForm() {
//   formSubmitted = true;
//   return validateInput();
// }

// function validateInput() {
//   var input = profileInput.value.trim();
//   var linkedInPattern = /https?:\/\/(?:www\.)?linkedin\.com\/in\/[^\/]+/;

//   if (!linkedInPattern.test(input)) {
//     errorMessage.textContent =
//       "Please enter a valid LinkedIn URL (e.g., https://www.linkedin.com/in/username)";
//     errorMessage.style.color = "red";
//     return false;
//   } else {
//     errorMessage.textContent = "";
//     return true;
//   }
// }

var profileInput = document.getElementById("linkedinProfile");
var errorMessage = document.getElementById("errorMessage");
var formSubmitted = false;

function populateLinkedInURL() {
  profileInput.value = "https://www.linkedin.com/in/";
}

window.addEventListener("beforeunload", function(event) {
  if (!formSubmitted && profileInput.value.trim() !== "") {
    event.preventDefault();
    event.returnValue =
      "LinkedIn profile cannot be empty. Please enter your LinkedIn URL followed by the username.";
  }
});

function validateForm() {
  formSubmitted = true;
  return validateInput();
}

function validateInput() {
  var input = profileInput.value.trim();
  var linkedInPattern = /^https?:\/\/(?:www\.)?linkedin\.com\/in\/[a-zA-Z]+$/;

  if (!linkedInPattern.test(input)) {
    errorMessage.textContent =
      "Please enter a valid LinkedIn URL with only letters in the username.";
    errorMessage.style.color = "red";
    profileInput.style.borderColor = "red";
    return false;
  } else {
    errorMessage.textContent = "";
    errorMessage.style.color = ""; // Reset error message color
    profileInput.style.borderColor = ""; // Reset input border color
    return true;
  }
}

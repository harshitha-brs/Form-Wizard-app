/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Step 3 form
Description: Logic for step 3 form
(c) Copyright by BRS with Nyros. 
**/

// Date and time picker
let dateToday = new Date();

$(function() {
  $("#date_picker").dtpicker({ minDate: dateToday });
});

// function textValidation() {
//   let textarea = document.getElementById("address");
//   let inputValue = textarea.value.trim();
//   let letterRegex = /[a-zA-Z]/;
//   let numberRegex = /[0-9]/;
//   let specialCharRegex = /[^a-zA-Z0-9\s]/; // Regex to match any character that is not a letter, number, or space
//   let show = "address";

//   if (
//     !letterRegex.test(inputValue) ||
//     !numberRegex.test(inputValue) ||
//     inputValue === "" ||
//     specialCharRegex.test(inputValue)
//   ) {
//     document.getElementById(show).innerHTML =
//       "&#10008; Please enter both letters and numbers";
//     document.getElementById(show).style.color = "red";
//     textarea.style.border = "1px solid red";
//     return false;
//   } else {
//     document.getElementById(show).innerHTML = "";
//     textarea.style.border = "1px solid #1758C1";
//     return true;
//   }
// }

// const address = document.getElementById("address");
// const maxLength = 60;
// const warnLength = 10;
// const charCount = document.getElementById("charCount");
// charCount.textContent = `${maxLength}/${maxLength}`;
// if (input.type === "textarea") {
//   if (input.value.trim().length === 0) {
//     alert(`Enter ${inputLabel}`);
//     input.focus();
//     return;
//   }
//   if (input.value.trim().length > 2) {
//     alert(`${inputLabel} cannot exceed 150 characters`);
//     input.focus();
//     return;
//   }
//   if (input.value.trim().length < 60) {
//     alert(`${inputLabel} cannot be less than 15 characters`);
//     input.focus();
//     return;
//   }
// }

function textValidation() {
  let textarea = document.getElementById("address");
  let inputValue = textarea.value.trim();
  let letterRegex = /[a-zA-Z]/;
  let numberRegex = /[0-9]/;
  let specialCharRegex = /[^a-zA-Z0-9\s-]/;
  let minLength = textarea.getAttribute("min") || 2;
  let maxLength = textarea.getAttribute("max") || 50;
  let show = "address";
  let errorMessage = ""; // Variable to store error message

  if (
    !letterRegex.test(inputValue) ||
    !numberRegex.test(inputValue) ||
    inputValue === "" ||
    specialCharRegex.test(inputValue)
  ) {
    errorMessage =
      "&#10008; Please enter the address with characters and numbers";
  } else if (inputValue.length < minLength) {
    errorMessage = "&#10008; Enter minimum " + minLength + " characters";
  } else if (inputValue.length > maxLength) {
    errorMessage = "&#10008; Enter maximum " + maxLength + " characters";
  }

  if (errorMessage) {
    // Show the first error only
    document.getElementById(show).innerHTML = errorMessage;
    document.getElementById(show).style.color = "red";
    textarea.style.border = "1px solid red";
    textarea.style.color = "red";
    return false;
  } else {
    // If no errors, clear any previous error message
    document.getElementById(show).innerHTML = "&#10004; OK";
    document.getElementById(show).style.color = "green";
    textarea.style.border = "1px solid #1758C1";
    textarea.style.color = "black";
    return true;
  }
}

function validateForm(e) {
  e.preventDefault();

  const address = document.getElementById("address");
  const inputValue = address.value.trim();
  const maxLength = 60;
  const warnLength = 10;
  const charCount = document.getElementById("charCount");
  charCount.textContent = `${maxLength}/${maxLength}`;

  address.addEventListener("input", function() {
    const remainingChars = maxLength - address.value.length;

    if (remainingChars <= warnLength) {
      charCount.classList.add("text-danger");
    } else {
      charCount.classList.remove("text-danger");
    }
    if (remainingChars <= "") {
      address.value = address.value.slice(0, maxLength);
    }

    charCount.textContent = `${Math.max(remainingChars, "")}/${maxLength}`;
  });
}

const address = document.getElementById("address");
address.addEventListener("input", function() {
  textValidation();
  validateForm(event);
});
document.getElementById("address").addEventListener("click", function() {
  let show = "address";
  document.getElementById(show).innerHTML = "";
  document.getElementById(show).style.color = "";
  this.style.border = "";
});

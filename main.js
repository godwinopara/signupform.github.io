const form = document.querySelector("form");

const formInputs = document.querySelectorAll("input");

//==============================================================//
//==============================================================//

formInputs.forEach((input) => {
  const inputError = document.querySelector(`.${input.name}`);
  const inputErrorImage = document.querySelector(`.error-img-${input.name}`);

  input.addEventListener("input", (e) => {
    if (input.validity.valid) {
      inputError.textContent = "";
      input.style.border = "1px solid #b9b6d3";
      inputErrorImage.style.display = "none";
    } else {
      showError();
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let success = false;

  formInputs.forEach((input) => {
    if (!input.validity.valid) {
      showError();
    } else {
      success = true;
    }
  });

  if (success === true) {
    alert("Form submitted successfully");
    formInputs.forEach((input) => {
      input.value = "";
    });
  }
});

function showError() {
  formInputs.forEach((input) => {
    const inputError = document.querySelector(`.${input.name}`);
    const inputErrorImage = document.querySelector(`.error-img-${input.name}`);

    if (input.validity.typeMismatch) {
      //
      inputError.textContent = "Looks like the is not a valid Email";
      input.style.border = "1px solid red";
      inputErrorImage.style.display = "block";
      //
    } else if (input.validity.valueMissing) {
      //
      inputError.textContent = `${input.name} cannot be empty`;
      input.style.border = "1px solid red";
      inputErrorImage.style.display = "block";
    }
  });
}


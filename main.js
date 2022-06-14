const form = document.querySelector("form");

const formInputs = document.querySelectorAll("input");

//==============================================================//
//==============================================================//

formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    const inputError = document.querySelector(`.${input.name}`);
    if (input.validity.valid) {
      inputError.textContent = "";
      input.style.border = "1px solid #b9b6d3";
    } else {
      showError();
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  formInputs.forEach((input) => {
    if (!input.validity.valid) {
      showError();
    }
  });
});

function showError() {
  formInputs.forEach((input) => {
    const inputError = document.querySelector(`.${input.name}`);

    if (input.validity.typeMismatch) {
      //
      inputError.textContent = "Looks like the is not a valid Email";
      input.style.border = "1px solid red";
      //
    } else if (input.validity.valueMissing) {
      //
      inputError.textContent = `${input.name} cannot be empty`;
      input.style.border = "1px solid red";
    }
  });
}


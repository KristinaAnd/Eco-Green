let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);


 function validateForm(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('.form__input');
    const data = {};

    let isValid = true;

    inputs.forEach(input => {
      if (input.value.trim() === '') {
        alert(`Пожалуйста, заполните поле "${input.placeholder}".`);
        isValid = false;
      } else {
        data[input.placeholder] = input.value.trim();
      }
    });

    return isValid ? data : null;
  }

  document.getElementById('a-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    const formData = validateForm('a-form');
    if (formData) {
      alert(`Registration details:\nName: ${formData['Name']}\nEmail: ${formData['Email']}`);
    }
  });

  document.getElementById('b-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const formData = validateForm('b-form');
    if (formData) {
      alert(`Login details:\nEmail: ${formData['Email']}`);
    }
  });
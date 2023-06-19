const formGroup = document.querySelectorAll(".formGroup");
const patternUserName = /^[a-zA-Z]{2,14}$/;
const patternMail = /@/;
const patternPhone = /^[0-9]{10}$/;
const patternPassword = /^[a-zA-Z0-9]{6,14}$/;
const patternAdress = /^[a-zA-Z0-9/:,.ç,ğ,ü,I,Ş,Ğ,Ü,ş]{1,100}$/;
const form = document.querySelector("form");
const register = document.getElementById("register");
const alertMessage = document.querySelector(".alertMessage");
const input = document.querySelectorAll("input");
const registerTitle = document.querySelector(".registerTitle");

register.addEventListener("click", (e) => {
  e.preventDefault();
  input.forEach((item) => {
    if (item.classList.contains("right")) {
      register.setAttribute("disabled", "");
      register.style.backgroundColor = "rgb(1, 101, 1)";
      registerTitle.textContent = "Register Successful";
      alertMessage.textContent = "Registration Successful";
    } else {
      alertMessage.textContent =
        "Please Fill all areas and Make Sure Spelled it Right";
    }
  });
});

formGroup.forEach((item) => {
  item.addEventListener("keyup", () => {
    const handleUsername = form.username.value;
    const handleLastname = form.lastname.value;
    const handleEmail = form.email.value;
    const handleNumber = form.phonenumber.value;
    const handlePassword = form.password.value;
    const handlePasswordr = form.passwordr.value;
    const handleAdress = form.adress.value;

    let checkUsername = patternUserName.test(handleUsername);
    let checkLastname = patternUserName.test(handleLastname);
    let checkMail = patternMail.test(handleEmail);
    let checkPhone = patternPhone.test(handleNumber);
    let checkPassword = patternPassword.test(handlePassword);
    let checkPasswordr = patternPassword.test(handlePasswordr);
    let checkAdress = patternAdress.test(handleAdress);

    if (checkUsername) {
      form.username.classList.add("right");
    } else {
      form.username.classList.remove("right");
    }

    if (checkLastname) {
      form.lastname.classList.add("right");
    } else {
      form.lastname.classList.remove("right");
    }

    if (checkMail) {
      form.email.classList.add("right");
    } else {
      form.email.classList.remove("right");
    }

    if (checkPhone) {
      form.phonenumber.classList.add("right");
    } else {
      form.phonenumber.classList.remove("right");
    }

    if (checkPassword && checkPasswordr && handlePassword == handlePasswordr) {
      form.password.classList.add("right");
      form.passwordr.classList.add("right");
    } else {
      form.password.classList.remove("right");
      form.passwordr.classList.remove("right");
    }

    if (checkAdress) {
      form.adress.classList.add("right");
    } else {
      form.adress.classList.remove("right");
    }
  });
});

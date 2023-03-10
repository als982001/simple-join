const usernameBtn = document.querySelector("#username-btn");
const passwordBtn = document.querySelector("#password-btn");
const passwordCfmBtn = document.querySelector("#password-confirmation-btn");

const wrongIdMsg = document.querySelector("#wrong-id-msg");
const wrongPasswordMsg = document.querySelector("#wrong-password-msg");
const passwordMismatchMsg = document.querySelector("#password-mismatch-msg");

const passwordField = document.querySelector("#password-field");
const passwordCfmField = document.querySelector("#password-confirmation-field");
const joinField = document.querySelector(".join-field");

const username = document.querySelector(".username");
const password = document.querySelector(".password");
const passwordCfm = document.querySelector(".password-retype");
const joinBTn = document.querySelector(".join-btn");

const beforePassIcon = "π";
const afterPassIcon = "ππ»";

/* 
function isMoreThan4Length(value) {
  return value.length >= 4;
}

function isMatch(password1, password2) {
  return password1 === password2;
}

// [μ ν¨μ± κ²μ¦ ν¨μ]: μμ΄ λλ μ«μλ§ κ°λ₯
function onlyNumberAndEnglish(str) {
  return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}

// [μ ν¨μ± κ²μ¦ ν¨μ]: μ΅μ 8μ μ΄μνλ©΄μ, μνλ²³κ³Ό μ«μ λ° νΉμλ¬Έμ(@$!%*#?&) λ νλ μ΄μ ν¬ν¨
function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    str
  );
} */

const hideAllErrorMsg = () => {
  wrongIdMsg.classList.add("msg-hide");
  wrongPasswordMsg.classList.add("msg-hide");
  passwordMismatchMsg.classList.add("msg-hide");
};

const handleUsernameBtnClicked = () => {
  event.preventDefault();

  if (isMoreThan4Length(username.value)) {
    // μμ΄λ νλμ λ²νΌ νμ€νΈ λ³κ²½
    usernameBtn.textContent = "Clear!";

    // μμ΄λ μλ ₯ μμ΄μ½ λ³κ²½
    document.querySelector(
      "#username-field .input-line .input-icon"
    ).textContent = afterPassIcon;

    // μμ΄λ μλ ₯ λΆκ°λ₯νκ²
    username.setAttribute("disabled", true);

    // μλ¬ λ©μΈμ§λ€ μ λΆ μ­μ 
    hideAllErrorMsg();

    // λΉλ°λ²νΈ μλ ₯ νλ νμ
    passwordField.classList.remove("field-hide");
    passwordField.classList.add("show-field");
  } else {
    // μμ΄λ κΈμ μλ₯Ό μΆ©μ‘±νμ§ λͺ»νλ€κ³  μλ¦Ό
    wrongIdMsg.classList.remove("msg-hide");
  }
};

const handlePasswordBtnClicked = () => {
  event.preventDefault();

  if (password.value.length >= 8) {
    // μμ΄λ νλμ λ²νΌ νμ€νΈ λ³κ²½
    passwordBtn.textContent = "Clear!";

    // μμ΄λ μλ ₯ μμ΄μ½ λ³κ²½
    document.querySelector(
      "#password-field .input-line .input-icon"
    ).textContent = afterPassIcon;

    // μμ΄λ μλ ₯ λΆκ°λ₯νκ²
    password.setAttribute("disabled", true);

    // μλ¬ λ©μΈμ§λ€ μ λΆ μ­μ 
    hideAllErrorMsg();

    // λΉλ°λ²νΈ μλ ₯ νλ νμ
    passwordCfmField.classList.remove("field-hide");
    passwordCfmField.classList.add("show-field");
  } else {
    // μμ΄λ κΈμ μλ₯Ό μΆ©μ‘±νμ§ λͺ»νλ€κ³  μλ¦Ό
    wrongPasswordMsg.classList.remove("msg-hide");
  }
};

const handlePasswordCfmBtnClicked = () => {
  event.preventDefault();

  console.log("μΌμμμμ!!!");

  if (isMatch(password.value, passwordCfm.value)) {
    console.log("μ°νΈ μ°νΈ!!!");
    // μμ΄λ νλμ λ²νΌ νμ€νΈ λ³κ²½
    passwordCfmBtn.textContent = "Clear!";

    // μμ΄λ μλ ₯ μμ΄μ½ λ³κ²½
    document.querySelector(
      "#password-confirmation-field .input-line .input-icon"
    ).textContent = afterPassIcon;

    // μμ΄λ μλ ₯ λΆκ°λ₯νκ²
    passwordCfm.setAttribute("disabled", true);

    // μλ¬ λ©μΈμ§λ€ μ λΆ μ­μ 
    hideAllErrorMsg();

    // λΉλ°λ²νΈ μλ ₯ νλ νμ
    joinField.classList.remove("field-hide");
    joinField.classList.add("show-field");
  } else {
    passwordMismatchMsg.classList.remove("msg-hide");
  }
};

const handleJoinBtnClicked = () => {
  alert("νμκ°μμ μΆνλλ¦½λλ€!");
};

usernameBtn.addEventListener("click", handleUsernameBtnClicked);
passwordBtn.addEventListener("click", handlePasswordBtnClicked);
passwordCfmBtn.addEventListener("click", handlePasswordCfmBtnClicked);
joinBTn.addEventListener("click", handleJoinBtnClicked);

// loginImg.style.removeProperty("display");
// joinImg.style.display = "none";

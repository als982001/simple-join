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

const beforePassIcon = "👉";
const afterPassIcon = "👍🏻";

/* 
function isMoreThan4Length(value) {
  return value.length >= 4;
}

function isMatch(password1, password2) {
  return password1 === password2;
}

// [유효성 검증 함수]: 영어 또는 숫자만 가능
function onlyNumberAndEnglish(str) {
  return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}

// [유효성 검증 함수]: 최소 8자 이상하면서, 알파벳과 숫자 및 특수문자(@$!%*#?&) 는 하나 이상 포함
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
    // 아이디 필드의 버튼 텍스트 변경
    usernameBtn.textContent = "Clear!";

    // 아이디 입력 아이콘 변경
    document.querySelector(
      "#username-field .input-line .input-icon"
    ).textContent = afterPassIcon;

    // 아이디 입력 불가능하게
    username.setAttribute("disabled", true);

    // 에러 메세지들 전부 삭제
    hideAllErrorMsg();

    // 비밀번호 입력 필드 표시
    passwordField.classList.remove("field-hide");
    passwordField.classList.add("show-field");
  } else {
    // 아이디 글자 수를 충족하지 못했다고 알림
    wrongIdMsg.classList.remove("msg-hide");
  }
};

const handlePasswordBtnClicked = () => {
  event.preventDefault();

  if (password.value.length >= 8) {
    // 아이디 필드의 버튼 텍스트 변경
    passwordBtn.textContent = "Clear!";

    // 아이디 입력 아이콘 변경
    document.querySelector(
      "#password-field .input-line .input-icon"
    ).textContent = afterPassIcon;

    // 아이디 입력 불가능하게
    password.setAttribute("disabled", true);

    // 에러 메세지들 전부 삭제
    hideAllErrorMsg();

    // 비밀번호 입력 필드 표시
    passwordCfmField.classList.remove("field-hide");
    passwordCfmField.classList.add("show-field");
  } else {
    // 아이디 글자 수를 충족하지 못했다고 알림
    wrongPasswordMsg.classList.remove("msg-hide");
  }
};

const handlePasswordCfmBtnClicked = () => {
  event.preventDefault();

  console.log("으아아아아!!!");

  if (isMatch(password.value, passwordCfm.value)) {
    console.log("우호 우호!!!");
    // 아이디 필드의 버튼 텍스트 변경
    passwordCfmBtn.textContent = "Clear!";

    // 아이디 입력 아이콘 변경
    document.querySelector(
      "#password-confirmation-field .input-line .input-icon"
    ).textContent = afterPassIcon;

    // 아이디 입력 불가능하게
    passwordCfm.setAttribute("disabled", true);

    // 에러 메세지들 전부 삭제
    hideAllErrorMsg();

    // 비밀번호 입력 필드 표시
    joinField.classList.remove("field-hide");
    joinField.classList.add("show-field");
  } else {
    passwordMismatchMsg.classList.remove("msg-hide");
  }
};

const handleJoinBtnClicked = () => {
  alert("회원가입을 축하드립니다!");
};

usernameBtn.addEventListener("click", handleUsernameBtnClicked);
passwordBtn.addEventListener("click", handlePasswordBtnClicked);
passwordCfmBtn.addEventListener("click", handlePasswordCfmBtnClicked);
joinBTn.addEventListener("click", handleJoinBtnClicked);

// loginImg.style.removeProperty("display");
// joinImg.style.display = "none";

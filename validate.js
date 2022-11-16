const form = document.querySelector(".form");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const passwrd = document.querySelector(".passwrd");
const cpasswrd = document.querySelector(".cpasswrd");

const sendResponse = (usernameVal, successRate, count) => {
  if (successRate === count);
  swal("Welcome!");
  //alert("Registration SuccessFul");
  //location.href = `demo.php?username = ${usernameVal}`;
};

const successMsg = (usernameVal) => {
  var formControl = document.getElementsByClassName("form-control");
  var count = formControl.length - 1;

  for (var i = 0; i < formControl.length; i++) {
    if (formControl[i].className === "form-control success") {
      var successRate = 0 + i;
      sendResponse(usernameVal, successRate, count);
    } else {
      return false;
    }
  }
};

//Input Email Function Defintion
const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) {
    return false;
  }

  var dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) {
    return false;
  }
  if (dot === email.length - 1) {
    return false;
  } else return true;
};

//Validate Error And success Message functions
const setErrMsg = (input, errormsg) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsg;
  small.style.visibilty = "visible";
};
const setSuccessMsg = (input) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control success";
  small.innerText = "";
  small.style.visibilty = "hidden";
};

//Validate function
const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwrdVal = passwrd.value.trim();
  const cpasswrdVal = cpasswrd.value.trim();

  //Validate Username
  if (usernameVal === "") {
    setErrMsg(username, "Username cannot be blank");
  } else if (usernameVal.length <= 2) {
    setErrMsg(username, "Username must be atleast 3 characters");
  } else {
    setSuccessMsg(username);
  }

  // Validate Email
  if (emailVal === "") {
    setErrMsg(email, "Email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setErrMsg("Not a valid Email");
  } else if (emailVal <= 2) {
    setErrMsg(email, "Username must be atleast 3 characters");
  } else {
    setSuccessMsg(email);
  }

  //Validate Phone
  if (phoneVal === "") {
    setErrMsg(phone, "Phone cannot be blank");
  } else if (phoneVal.length != 10) {
    setErrMsg(phone, "Phone must be of 10 digits");
  } else {
    setSuccessMsg(phone);
  }

  //Validate Password
  if (passwrdVal === "") {
    setErrMsg(passwrd, "Password cannot be blank");
  } else if (passwrdVal.length <= 8) {
    setErrMsg(passwrd, "Password must be atleast 8 digits");
  } else {
    setSuccessMsg(passwrd);
  }

  //Validate confirm Password
  if (cpasswrdVal === "") {
    setErrMsg(cpasswrd, "Confirm Password cannot be blank");
  } else if (passwrdVal != cpasswrdVal) {
    setErrMsg(cpasswrd, "Password not matching");
  } else {
    setSuccessMsg(cpasswrd);
  }

  successMsg(usernameVal);
};

//Calling Validate Function
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

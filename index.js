let button = document.querySelector("button");
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let privacy = document.querySelector("#privacy");
let fistNameSpan = document.querySelector("#first-name-span");
let lastNameSpan = document.querySelector("#last-name-span");
let emailSpan = document.querySelector("#email-span");
let queryTypeSpan = document.querySelector("#query-type-span");
let messageSpan = document.querySelector("#message-span");
let privacySpan = document.querySelector("#privacy-span");

button.addEventListener("click", (e) => {
  event.preventDefault();

  let firstNameValue = firstName.value;
  let lastNameValue = lastName.value;
  let emailValue = email.value;
  let messageValue = message.value;
  let privacyValue = privacy.checked;

  if (firstNameValue === "") {
    fistNameSpan.classList.remove("hidden");
    fistNameSpan.textContent = "Please enter your first name";
  } else {
    fistNameSpan.classList.add("hidden");
  }

  if (lastNameValue === "") {
    lastNameSpan.classList.remove("hidden");
    lastNameSpan.textContent = "Please enter your last name";
  } else {
    lastNameSpan.classList.add("hidden");
  }

  if (emailValue === "") {
    emailSpan.classList.remove("hidden");
    emailSpan.textContent = "Please enter your email";
  } else {
    emailSpan.classList.add("hidden");
  }

  const queryType = document.querySelector('input[name="query-type"]:checked');

  if (!queryType) {
    queryTypeSpan.classList.remove("hidden");
    queryTypeSpan.textContent = "Please select a query type";
  } else {
    queryTypeSpan.classList.add("hidden");
  }

  if (messageValue === "") {
    messageSpan.classList.remove("hidden");
    messageSpan.textContent = "Please enter your message";
  } else {
    messageSpan.classList.add("hidden");
  }

  if (privacyValue === false) {
    privacySpan.classList.remove("hidden");
    privacySpan.textContent =
      "To submit this form, Please consent to being contacted";
  } else {
    privacySpan.classList.add("hidden");
  }
});

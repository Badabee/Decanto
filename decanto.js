let arrow = document.getElementById("arrow");
let runner = document.getElementById("run");
let validateEmail = document.getElementById("validateEmail");
let error = document.getElementById("error-message");

function validateEmailValidation(field, event) {
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (field.value == '') {
        error.innerHTML = "Please enter your Email Address";
        event.preventDefault();
    } else if (!field.value.match(regExp)) {
        error.innerHTML = "Please enter a valid email";
        event.preventDefault();
    } else {
        error.innerHTML = "";
    }
}

function validateNews(e) {
    newsLetterValidation(newsLetter, e);
}
newsletterForm.addEventListener("submit", validateNews);
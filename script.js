const form = document.querySelector(".form");
const scrollImage = document.querySelector(".scrollimg");
const submitButton = document.querySelector(".submitbtn")
const input = document.querySelectorAll("input");
const password = document.getElementById("pw");
const confirmPassword = document.getElementById("confirmpw");

function scrollToForm(){
    submitButton.scrollIntoView({behavior: "smooth"});
}

scrollImage.addEventListener("click", scrollToForm);


input.forEach(input => {
  input.addEventListener("input", () => {
    const label = input.nextElementSibling;
    if (input.value !== "") {
      label.style.transform = "translateY(-20px)";
    } else {
      label.style.transform = "";
    }
  });
});

function checkForMatchingPasswords(){
    if(password.value !== confirmPassword.value){
        confirmPassword.setCustomValidity("Password mismatch alert! Your passwords need to be identical");
    }
    else {
        confirmPassword.setCustomValidity("");
    }
};

password.addEventListener("input", checkForMatchingPasswords);
confirmPassword.addEventListener("input", checkForMatchingPasswords);
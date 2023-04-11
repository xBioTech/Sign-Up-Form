const form = document.querySelector(".form");
const scrollImage = document.querySelector(".scrollimg");
const submitButton = document.querySelector(".submitbtn")


function scrollToForm(){
    submitButton.scrollIntoView({behavior: "smooth"});
}

scrollImage.addEventListener("click", scrollToForm);
const form = document.querySelector(".form");
const scrollImage = document.querySelector(".scrollimg");


function scrollToForm(){
    scrollImage.scrollIntoView({behavior: "smooth"});
}

scrollImage.addEventListener("click", scrollToForm);
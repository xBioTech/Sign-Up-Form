const form = document.querySelector(".form");
const scrollImage = document.querySelector(".scrollimg");
const submitButton = document.querySelector(".submitbtn")
const input = document.querySelectorAll("input");


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
let button = document.querySelector(".arrow"),
    navbar = document.querySelector(".navbar");
let TextArea = document.querySelector(".text-center");



button.addEventListener("click", () => {
   navbar.classList.toggle("display"); 
   TextArea.classList.toggle("textareahide");
})


function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

const sections = document.querySelectorAll('section'); 

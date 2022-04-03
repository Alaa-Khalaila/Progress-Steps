const line = document.querySelector(".line");
const circles = document.querySelectorAll(".circle");

const prev = document.querySelector("#prev-btn");
const next = document.querySelector("#next-btn");

let currentStep = 1;

const nextStep = () => {
  currentStep++;
  for (let i = 0; i < currentStep; i++) {
    circles[i].classList.add("active");
  }

  line.style.width = (100 / (circles.length - 1)) * (currentStep - 1) + "%";

  if (currentStep > 1) {
    prev.disabled = false;
  }
  if (currentStep == circles.length) {
    next.disabled = true;
  }
};

const prevStep = () => {
  currentStep--;
  circles[currentStep].classList.remove("active");
  line.style.width = (100 / (circles.length - 1)) * (currentStep - 1) + "%";
  next.disabled = false;
  
  if (currentStep == 1) {
    prev.disabled = true;
  }
};

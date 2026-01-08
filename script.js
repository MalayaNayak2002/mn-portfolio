

// ===== Skills animation on scroll =====
const skillCards = document.querySelectorAll(".skill-card");

window.addEventListener("scroll", () => {
  const triggerPoint = window.innerHeight - 100;

  skillCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerPoint) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 120); // stagger animation
    }
  });
});

// ===== Projects animation on scroll =====
const projectCards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
  const triggerPoint = window.innerHeight - 100;

  projectCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerPoint) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 150); // stagger animation
    }
  });
});


// Resume download
const resumeBtn = document.getElementById("resume-btn");

resumeBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "assets/Malaya Nayak Resume.pdf";
  link.download = "Malaya Nayak Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// Education animation
const eduCards = document.querySelectorAll(".education-card");

window.addEventListener("scroll", () => {
  const triggerPoint = window.innerHeight - 100;

  eduCards.forEach((card, index) => {
    if (card.getBoundingClientRect().top < triggerPoint) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 150);
    }
  });
});



// Navbar scroll animation
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right = "0";
}

function closemenu(){
  sidemenu.style.right = "-200px";
}


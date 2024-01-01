const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);


const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });

const buttonSend = document.getElementById("button__send");
const inputName = document.getElementById("input__name");
const inputEmail = document.getElementById("input__email");
const inputMessage = document.getElementById("input__message");
const body = document.body

buttonSend.addEventListener("click", (e) => {
  e.preventDefault();

  if (body.classList.contains("dark__mode")) {
    if (!inputName.value || !inputEmail.value || !inputMessage.value) {
      Swal.fire({
        title: "Ingrese todos los campos",
        icon: "error",
        color: "#fff",
        background: "#1f2a3a",
        timer: 3000,
        confirmButtonColor: "#ff9f1c",
      });
    } else {
      Swal.fire({
        title: "Correo Enviado Exitosamente",
        icon: "success",
        iconColor: "#ff9f1c",
        color: "#fff",
        background: "#1f2a3a",
        confirmButtonColor: "#ff9f1c",
        timer: 3000,
      });
    }
  } else {
    if (!inputName.value || !inputEmail.value || !inputMessage.value) {
      Swal.fire({
        title: "Ingrese todos los campos",
        icon: "error",
        timer: 3000,
        confirmButtonColor: "#ff9f1c",
      });
    } else {
      Swal.fire({
        title: "Correo Enviado Exitosamente",
        icon: "success",
        iconColor: "#ff9f1c",
        confirmButtonColor: "#ff9f1c",
        timer: 3000,
      });
    }
  }
});

const buttonDarkMode = document.getElementById("dark__mode");
const header = document.getElementById("header");
const links = document.getElementsByTagName("a");

buttonDarkMode.addEventListener("click", (e) => {
  e.preventDefault();

  if (window.innerWidth <= 767) {
    body.classList.toggle("dark__mode");
    header.classList.toggle("dark__mode");
    if (links[0].style.color == "white") links[0].style.color = "black"
    else links[0].style.color = "white"
  }

  else {
    body.classList.toggle("dark__mode");
    header.classList.toggle("dark__mode");
    for (let i = 0; i < 7; i++) {
      if (links[i].style.color == "white") links[i].style.color = "black";
      else links[i].style.color = "white";
    }
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 767) {
    if (body.classList.contains("dark__mode")) links[0].style.color = "white"
    else links[0].style.color = "black"
    for (let i = 1; i < 7; i++) {
      links[i].style.color = "white"
    }
  }
  else {
    if (body.classList.contains("dark__mode")) {
      for (let i = 0; i < 7; i++) {
        links[i].style.color = "white"
      }
    }
    else {
      for (let i = 0; i < 7; i++) {
        links[i].style.color = "black"
      }
    }
  }
})
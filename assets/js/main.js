/*=============== TAMPILKAN MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== TAMPILAN MENU =====*/
/* Memvalidasi jika konstanta ada */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU TERSEMBUNYI =====*/
/*Memvalidasi jika konstanta ada */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== HAPUS MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // Ketika kita mengklik setiap nav__link, kita menghapus kelas show-menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===============  MENGUBAH HEADER LATAR BELAKANG  ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // Saat gulir lebih besar dari tinggi viewport 80, tambahkan kelas scroll-header ke tag header
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*===============  PERTANYAAN Akordeon ===============*/
const accordionItems = document.querySelectorAll(".questions__item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".questions__header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".questions__content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/*=============== SCROLL BAGIAN TAUTAN AKTIF  ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*===============   TAMPILKAN SCROLL KE ATAS ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  //    Saat scroll lebih tinggi dari 400 tinggi viewport, tambahkan class show-scroll ke tag a dengan class scroll-top
  if (this.scrollY >= 400) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*===============    TEMA TERANG GELAP ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

//   Topik yang dipilih sebelumnya (jika pengguna dipilih)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//  Kami memperoleh tema saat ini yang dimiliki antarmuka dengan memvalidasi kelas tema gelap
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// Kami memvalidasi jika pengguna sebelumnya memilih topik
if (selectedTheme) {
  // Jika validasi terpenuhi, kami bertanya apa masalahnya untuk mengetahui apakah kami mengaktifkan atau menonaktifkan gelap
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Aktifkan / nonaktifkan tema secara manual dengan tombol
themeButton.addEventListener("click", () => {
  // Menambahkan atau menghapus tema gelap / ikon
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Kami menyimpan tema dan ikon saat ini yang dipilih pengguna
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL TAMPILKAN ANIMASI ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.home__data`);
sr.reveal(`.home__img`, { delay: 500 });
sr.reveal(`.home__social`, { delay: 600 });
sr.reveal(`.about__img, .contact__box`, { origin: "left" });
sr.reveal(`.about__data, .contact__form`, { origin: "right" });
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`, {
  interval: 100,
});

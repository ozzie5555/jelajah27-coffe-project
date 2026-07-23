const header = document.querySelector("#site-header");
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  mobileMenu.classList.toggle("open", open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("menu-open", open);
}

menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

mobileLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

window.addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", window.scrollY > 40),
  { passive: true }
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const journeyContent = {
  Kyoto: {
    number: "08",
    lat: "35.6762° N",
    lng: "135.6503° E",
    story:
      "“Di sebuah machiya kecil, kami belajar bahwa ketenangan juga bisa diseduh. Perlahan, presisi, tanpa terburu-buru.”",
    memory: "A quiet morning in Gion",
    cup: "Kyoto Morning"
  },
  Istanbul: {
    number: "12",
    lat: "41.0082° N",
    lng: "28.9784° E",
    story:
      "“Aroma rempah dari gang tua bertemu kopi yang pekat—sebuah percakapan hangat yang terus kami ingat.”",
    memory: "Sunset over Karaköy",
    cup: "Istanbul Blend"
  },
  Paris: {
    number: "17",
    lat: "48.8566° N",
    lng: "2.3522° E",
    story:
      "“Di meja kecil dekat jendela, kota terasa melambat. Kopi hitam, buku terbuka, dan pagi yang tidak meminta apa-apa.”",
    memory: "Rain on Rue Montorgueil",
    cup: "Paris Roast"
  },
  Alps: {
    number: "21",
    lat: "46.8182° N",
    lng: "8.2275° E",
    story:
      "“Udara dingin membuat espresso terasa lebih jujur: singkat, hangat, dan tepat seperti rumah di tengah perjalanan.”",
    memory: "First snow in Lauterbrunnen",
    cup: "Alpine Espresso"
  },
  Bali: {
    number: "27",
    lat: "8.3405° S",
    lng: "115.0920° E",
    story:
      "“Perjalanan akhirnya membawa kami pulang. Di antara sawah dan pagi tropis, semua cerita menemukan mejanya.”",
    memory: "Homecoming in Ubud",
    cup: "Bali Sunrise"
  }
};

const journeyButtons = document.querySelectorAll(".journey-index button");
const journeyEyebrow = document.querySelector(".journey-content .eyebrow");
const journeyName = document.querySelector(".journey-title h2");
const journeyCoordinates = document.querySelectorAll(".journey-title span");
const journeyStory = document.querySelector(".journey-story");
const journeyDetails = document.querySelectorAll(".journey-meta b");

journeyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const place = button.dataset.place;
    const data = journeyContent[place];
    journeyButtons.forEach((item) => item.classList.toggle("active", item === button));
    journeyEyebrow.textContent = `The journey collection · No. ${data.number}`;
    journeyName.textContent = place;
    journeyCoordinates[0].textContent = data.lat;
    journeyCoordinates[1].textContent = data.lng;
    journeyStory.textContent = data.story;
    journeyDetails[0].textContent = data.memory;
    journeyDetails[1].textContent = data.cup;
  });
});

const filterButtons = document.querySelectorAll(".filters button");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    galleryItems.forEach((item) => {
      item.classList.toggle(
        "hidden",
        filter !== "all" && item.dataset.category !== filter
      );
    });
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

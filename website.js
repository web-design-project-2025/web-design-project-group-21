const translations = {
  en: {
    hero: "Book your trip now!",
    book: "Book",
    bestDeals: "Best deals at the moment",
    explore: "Explore Sweden",
    viewDeal: "View deal",
    viewAll: "View all of our deals",
    footer: {
      newsletter:
        "Get exclusive inspiration for your next trip –<br>subscribe to our newsletter.",
      help: "Helpcenter",
      terms: "Terms & conditions",
      legal: "Legal information",
      cookie: "Cookie settings",
      privacy: "Privacy",
    },
  },
  sv: {
    hero: "Boka din resa nu!",
    book: "Boka",
    bestDeals: "Bästa erbjudandena just nu",
    explore: "Utforska Sverige",
    viewDeal: "Visa erbjudande",
    viewAll: "Visa alla erbjudanden",
    footer: {
      newsletter:
        "Få exklusiv inspiration till din nästa resa –<br>prenumerera på vårt nyhetsbrev.",
      help: "Hjälpcenter",
      terms: "Villkor",
      legal: "Juridisk information",
      cookie: "Cookie-inställningar",
      privacy: "Integritetspolicy",
    },
  },
};

let currentLang = "en";
function switchLang() {
  currentLang = currentLang === "en" ? "sv" : "en";
  document.getElementById("lang-label").textContent =
    currentLang === "en" ? "English / Swedish" : "Svenska / Engelska";
  document.getElementById("hero-title").textContent =
    translations[currentLang].hero;
  document.querySelector(".book-btn").textContent =
    translations[currentLang].book;
  document.getElementById("best-deals").textContent =
    translations[currentLang].bestDeals;
  document.getElementById("explore-title").textContent =
    translations[currentLang].explore;
  document
    .querySelectorAll(".view-deal-btn")
    .forEach((btn) => (btn.textContent = translations[currentLang].viewDeal));
  document.getElementById("view-all-btn").textContent =
    translations[currentLang].viewAll;
  document.getElementById("footer-newsletter").innerHTML =
    translations[currentLang].footer.newsletter;
  document.getElementById("footer-help").textContent =
    translations[currentLang].footer.help;
  document.getElementById("footer-terms").textContent =
    translations[currentLang].footer.terms;
  document.getElementById("footer-legal").textContent =
    translations[currentLang].footer.legal;
  document.getElementById("footer-cookie").textContent =
    translations[currentLang].footer.cookie;
  document.getElementById("footer-privacy").textContent =
    translations[currentLang].footer.privacy;
}

function searchTrips() {
  const destination = document.getElementById("destination").value;
  const arrival = document.getElementById("arrival").value;
  const departure = document.getElementById("departure").value;
  const region = document.getElementById("region").value;
  alert(
    `Searching trips to ${
      destination || region
    }\nFrom: ${arrival} To: ${departure}`
  );
}

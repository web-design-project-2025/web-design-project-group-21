/*page 1*/
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

document.getElementById("view-all-btn").addEventListener("click", function () {
  window.location.href = "page2.html";
});

/*page 2*/
const cities = ["stockholm", "goteborg"];

function showSuggestions() {
  const input = document.getElementById("searchInput");
  const val = input.value.toLowerCase();
  const list = document.getElementById("autocomplete-list");
  list.innerHTML = "";
  if (!val) return;
  cities
    .filter((city) => city.includes(val))
    .forEach((city) => {
      const div = document.createElement("div");
      div.textContent = city;
      div.onclick = () => {
        input.value = city;
        list.innerHTML = "";
        handleSearch();
      };
      list.appendChild(div);
    });
}

function handleSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  document.getElementById("cityFilter").value = "all";
  document.querySelectorAll(".ticket").forEach((ticket) => {
    const location = ticket.getAttribute("data-location");
    ticket.style.display = location.includes(query) ? "flex" : "none";
  });
}

function toggleFavorite(button) {
  const ticket = button.closest(".ticket");
  const id = ticket.querySelector("h3").textContent;
  const isFav = button.textContent === "♥";
  button.textContent = isFav ? "♡" : "♥";

  let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (isFav) {
    favorites = favorites.filter((f) => f !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function switchLang() {
  const translations = {
    en: {
      cinemaTitle: "Cinema with Transport – 300 SEK",
      cinemaDesc:
        "Enjoy a movie night made easy! This combo deal includes a cinema ticket and public transport. It's a convenient and affordable way to enjoy films and get around with ease.",
      cultureTitle: "Culture Trip with Transport – 400 SEK",
      cultureDesc:
        "This package includes access to museums and landmarks with public transport – a simple, affordable way to explore culture and get around hassle-free.",
      moreInfo: "more info",
      sort: "Sort by:",
      price: "Price:",
      city: "City:",
      toggle: "English / Swedish",
    },
    sv: {
      cinemaTitle: "Bio med transport – 300 SEK",
      cinemaDesc:
        "Njut av en enkel biokväll! Denna kombobiljett inkluderar biobiljett och kollektivtrafik för smidig transport.",
      cultureTitle: "Kulturresa med transport – 400 SEK",
      cultureDesc:
        "Paketet inkluderar museer och landmärken med kollektivtrafik – enkelt och prisvärt sätt att utforska kultur.",
      moreInfo: "mer info",
      sort: "Sortera efter:",
      price: "Pris:",
      city: "Stad:",
      toggle: "Svenska / Engelska",
    },
  };

  const current = document
    .getElementById("lang-toggle")
    .textContent.includes("English")
    ? "sv"
    : "en";
  const t = translations[current];

  document.getElementById("lang-toggle").textContent = t.toggle;
  document.querySelectorAll(".ticket")[0].querySelector("h3").textContent =
    t.cinemaTitle;
  document.querySelectorAll(".ticket")[0].querySelector("p").textContent =
    t.cinemaDesc;
  document
    .querySelectorAll(".ticket")[0]
    .querySelector("button:last-of-type").textContent = t.moreInfo;

  document.querySelectorAll(".ticket")[1].querySelector("h3").textContent =
    t.cultureTitle;
  document.querySelectorAll(".ticket")[1].querySelector("p").textContent =
    t.cultureDesc;
  document
    .querySelectorAll(".ticket")[1]
    .querySelector("button:last-of-type").textContent = t.moreInfo;

  document.querySelector("label[for='sortSelect']").textContent = t.sort;
  document.querySelector("label[for='priceRange']").textContent = t.price;
  document.querySelector("label[for='cityFilter']").textContent = t.city;
}

function applySortFilter() {
  const sortValue = document.getElementById("sortSelect").value;
  const maxPrice = parseInt(document.getElementById("priceRange").value);
  const city = document.getElementById("cityFilter").value;
  const searchQuery = document
    .getElementById("searchInput")
    .value.toLowerCase();
  document.getElementById("priceValue").textContent = maxPrice;

  const allTickets = Array.from(document.querySelectorAll(".ticket"));

  // Filter based on all inputs
  allTickets.forEach((ticket) => {
    const price = parseInt(ticket.dataset.price);
    const location = ticket.dataset.location.toLowerCase();
    const visible =
      price <= maxPrice &&
      (city === "all" || location === city) &&
      (location.includes(searchQuery) || searchQuery === "");
    ticket.style.display = visible ? "flex" : "none";
  });

  // Sort only visible tickets
  const visibleTickets = allTickets.filter(
    (ticket) => ticket.style.display !== "none"
  );
  if (sortValue.includes("price")) {
    visibleTickets.sort((a, b) =>
      sortValue === "price-asc"
        ? a.dataset.price - b.dataset.price
        : b.dataset.price - a.dataset.price
    );
  } else if (sortValue.includes("location")) {
    visibleTickets.sort((a, b) =>
      sortValue === "location-asc"
        ? a.dataset.location.localeCompare(b.dataset.location)
        : b.dataset.location.localeCompare(a.dataset.location)
    );
  }

  const container = document.querySelector("main");
  const filters = document.querySelector(".filters");
  const nonFilterElements = Array.from(container.children).filter(
    (child) => !child.classList.contains("filters")
  );
  nonFilterElements.forEach((child) => container.removeChild(child));
  visibleTickets.forEach((ticket) => container.appendChild(ticket));
  container.insertBefore(filters, container.firstChild);
}

//*page 3*//
const Cities = ["stockholm", "goteborg", "malmo"];

function handleSearchInput() {
  const input = document.getElementById("searchInput");
  const val = input.value.toLowerCase();
  const list = document.getElementById("autocomplete-list");
  list.innerHTML = "";
  if (!val) return;

  cities
    .filter((city) => city.includes(val))
    .forEach((city) => {
      const div = document.createElement("div");
      div.textContent = city;
      div.onclick = () => {
        input.value = city;
        list.innerHTML = "";
        alert(`Searching tickets in ${city}`);
      };
      list.appendChild(div);
    });
}

function switchLang() {
  const translations = {
    en: {
      title: "Stockholm Cinema deal",
      type: "🎬 Cinema Ticket",
      desc: "Experience the latest movies in top cinemas across Sweden. Enjoy a wide selection of international blockbusters and local Swedish films in a comfortable, modern setting.",
      price: "Price: 100 SEK per person",
      valid: "🎟 Valid for one-time entry",
      cities:
        "📍 Available in major cities including Stockholm, Gothenburg, Malmö, and more",
      note: "Choose your date, time, and preferred cinema to book your ticket today!",
      cart: "Add to cart",
      toggle: "English / Swedish",
    },
    sv: {
      title: "Biobiljett i Stockholm",
      type: "🎬 Biobiljett",
      desc: "Se de senaste filmerna på de bästa biograferna i Sverige. Njut av internationella storfilmer och svenska filmer i en bekväm och modern miljö.",
      price: "Pris: 100 SEK per person",
      valid: "🎟 Gäller för engångsinträde",
      cities: "📍 Tillgänglig i städer som Stockholm, Göteborg, Malmö och fler",
      note: "Välj datum, tid och biograf för att boka din biljett redan idag!",
      cart: "Lägg i kundvagn",
      toggle: "Svenska / Engelska",
    },
  };

  const langBtn = document.getElementById("lang-toggle");
  const currentLang = langBtn.textContent.includes("English") ? "sv" : "en";
  const t = translations[currentLang];

  document.getElementById("title").textContent = t.title;
  document.getElementById("type").textContent = t.type;
  document.getElementById("desc").textContent = t.desc;
  document.getElementById("price").textContent = t.price;
  document.getElementById("valid").textContent = t.valid;
  document.getElementById("cities").textContent = t.cities;
  document.getElementById("note").textContent = t.note;
  document.getElementById("cart-btn").textContent = t.cart;
  langBtn.textContent = t.toggle;
}

/*page 4*/
function togglePassword() {
  const pw = document.getElementById("password");
  pw.type = pw.type === "password" ? "text" : "password";
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("No user registered yet. Please sign up first.");
    return;
  }

  const match =
    (email === user.email || email === user.username) &&
    password === user.password;

  if (match) {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Incorrect email/username or password.");
  }
}

function switchLang() {
  const toggleBtn = document.getElementById("lang-toggle");
  const current = toggleBtn.textContent.includes("English") ? "sv" : "en";

  const t = {
    en: {
      login: "Log in",
      email: "Email or username",
      password: "Password",
      forgot: "Forgot password?",
      continue: "Continue",
      signup: "Don't have an account? Sign up here",
      toggle: "English / Swedish",
    },
    sv: {
      login: "Logga in",
      email: "E-post eller användarnamn",
      password: "Lösenord",
      forgot: "Glömt lösenord?",
      continue: "Fortsätt",
      signup: "Har du inget konto? Registrera dig här",
      toggle: "Svenska / Engelska",
    },
  };

  const lang = t[current];
  toggleBtn.textContent = lang.toggle;
  document.querySelector(".login-form h2").textContent = lang.login;
  document.querySelector("label[for='email']").textContent = lang.email;
  document.querySelector("label[for='password']").textContent = lang.password;
  document.querySelector(".forgot").textContent = lang.forgot;
  document.querySelector(".submit-btn").textContent = lang.continue;
  document.querySelector(".signup-link").innerHTML = lang.signup;
}

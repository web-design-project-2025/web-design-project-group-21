const cities = ["stockholm", "goteborg"];

function showSuggestions() {
  const input = document.getElementById("searchInput");
  const val = input.value.toLowerCase();
  const list = document.getElementById("autocomplete-list");
  list.innerHTML = "";
  if (!val) return;
  cities.filter(city => city.includes(val)).forEach(city => {
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
  document.querySelectorAll(".ticket").forEach(ticket => {
    const location = ticket.getAttribute("data-location");
    ticket.style.display = location.includes(query) ? "flex" : "none";
  });
}

function toggleFavorite(button) {
  const ticket = button.closest('.ticket');
  const id = ticket.querySelector('h3').textContent;
  const isFav = button.textContent === '♥';
  button.textContent = isFav ? '♡' : '♥';

  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  if (isFav) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function switchLang() {
  const translations = {
    en: {
      cinemaTitle: "Cinema with Transport – 300 SEK",
      cinemaDesc: "Enjoy a movie night made easy! This combo deal includes a cinema ticket and public transport. It's a convenient and affordable way to enjoy films and get around with ease.",
      cultureTitle: "Culture Trip with Transport – 400 SEK",
      cultureDesc: "This package includes access to museums and landmarks with public transport – a simple, affordable way to explore culture and get around hassle-free.",
      moreInfo: "more info",
      sort: "Sort by:",
      price: "Price:",
      city: "City:",
      toggle: "English / Swedish"
    },
    sv: {
      cinemaTitle: "Bio med transport – 300 SEK",
      cinemaDesc: "Njut av en enkel biokväll! Denna kombobiljett inkluderar biobiljett och kollektivtrafik för smidig transport.",
      cultureTitle: "Kulturresa med transport – 400 SEK",
      cultureDesc: "Paketet inkluderar museer och landmärken med kollektivtrafik – enkelt och prisvärt sätt att utforska kultur.",
      moreInfo: "mer info",
      sort: "Sortera efter:",
      price: "Pris:",
      city: "Stad:",
      toggle: "Svenska / Engelska"
    }
  };

  const current = document.getElementById("lang-toggle").textContent.includes("English") ? "sv" : "en";
  const t = translations[current];

  document.getElementById("lang-toggle").textContent = t.toggle;
  document.querySelectorAll(".ticket")[0].querySelector("h3").textContent = t.cinemaTitle;
  document.querySelectorAll(".ticket")[0].querySelector("p").textContent = t.cinemaDesc;
  document.querySelectorAll(".ticket")[0].querySelector("button:last-of-type").textContent = t.moreInfo;

  document.querySelectorAll(".ticket")[1].querySelector("h3").textContent = t.cultureTitle;
  document.querySelectorAll(".ticket")[1].querySelector("p").textContent = t.cultureDesc;
  document.querySelectorAll(".ticket")[1].querySelector("button:last-of-type").textContent = t.moreInfo;

  document.querySelector("label[for='sortSelect']").textContent = t.sort;
  document.querySelector("label[for='priceRange']").textContent = t.price;
  document.querySelector("label[for='cityFilter']").textContent = t.city;
}

function applySortFilter() {
  const sortValue = document.getElementById("sortSelect").value;
  const maxPrice = parseInt(document.getElementById("priceRange").value);
  const city = document.getElementById("cityFilter").value;
  const searchQuery = document.getElementById("searchInput").value.toLowerCase();
  document.getElementById("priceValue").textContent = maxPrice;

  const allTickets = Array.from(document.querySelectorAll(".ticket"));

  // Filter based on all inputs
  allTickets.forEach(ticket => {
    const price = parseInt(ticket.dataset.price);
    const location = ticket.dataset.location.toLowerCase();
    const visible = (
      price <= maxPrice &&
      (city === "all" || location === city) &&
      (location.includes(searchQuery) || searchQuery === "")
    );
    ticket.style.display = visible ? "flex" : "none";
  });

  // Sort only visible tickets
  const visibleTickets = allTickets.filter(ticket => ticket.style.display !== "none");
  if (sortValue.includes("price")) {
    visibleTickets.sort((a, b) => sortValue === "price-asc"
      ? a.dataset.price - b.dataset.price
      : b.dataset.price - a.dataset.price);
  } else if (sortValue.includes("location")) {
    visibleTickets.sort((a, b) => sortValue === "location-asc"
      ? a.dataset.location.localeCompare(b.dataset.location)
      : b.dataset.location.localeCompare(a.dataset.location));
  }

  const container = document.querySelector("main");
  const filters = document.querySelector(".filters");
  const nonFilterElements = Array.from(container.children).filter(child => !child.classList.contains("filters"));
  nonFilterElements.forEach(child => container.removeChild(child));
  visibleTickets.forEach(ticket => container.appendChild(ticket));
  container.insertBefore(filters, container.firstChild);
} 

/*page 1*/
document.getElementById("view-all-btn").addEventListener("click", function () {
  window.location.href = "page2.html";
});

function searchTrips() {
  window.location.href = "activities.html";
}

function renderProducts(list) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "ticket";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}" style="width:100%; max-width:250px; border-radius:6px" />
      <div>
        <h3>${p.title}</h3>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px">
        <p style="margin: 8px 0;"><strong>${p.price} SEK</strong></p>
<a href="details.html?id=${p.id}" class="book-btn">More Info</a>

    `;
    container.appendChild(card);
  });
}

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

let allProducts = [];

async function loadActivities() {
  const res = await fetch("Products.json");
  const data = await res.json();
  allProducts = data;
  renderProducts(data);
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
      </div>
    `;
    container.appendChild(card);
  });
}

function applyFilters() {
  let filtered = [...allProducts];
  const city = document.getElementById("filterCity").value;
  const price = document.getElementById("filterPrice").value;
  const sort = document.getElementById("sortType").value;

  if (city !== "all") {
    filtered = filtered.filter((p) => p.city === city);
  }

  if (price === "low") {
    filtered = filtered.filter((p) => p.price < 500);
  } else if (price === "high") {
    filtered = filtered.filter((p) => p.price >= 500);
  }

  if (sort === "priceAsc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceDesc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "alpha") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  renderProducts(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  loadActivities();

  document
    .getElementById("filterCity")
    .addEventListener("change", applyFilters);
  document
    .getElementById("filterPrice")
    .addEventListener("change", applyFilters);
  document.getElementById("sortType").addEventListener("change", applyFilters);

  document.getElementById("cartIcon").addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      alert("Your cart is empty.");
    } else {
      window.location.href = "CART.html";
    }
  });
});

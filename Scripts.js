function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}


async function loadProductDetail() {
  const productId = getQueryParam("id");
  if (!productId) return;

  const res = await fetch("products.json");
  const products = await res.json();
  const product = products.find(p => p.id === productId);

  if (!product) return;

  const container = document.getElementById("product-detail");
  container.innerHTML = `
    <div class="detail-box">
      <img src="${product.image}" class="detail-img" alt="${product.title}" />
      <div class="detail-info">
        <h1>${product.title}</h1>
        <p>${product.description}</p>
        <p><strong>Price:</strong> ${product.price} SEK</p>
        <p class="note">${product.note}</p>
        <button id="bookBtn">Book now</button>
      </div>
    </div>
  `;

  document.getElementById("bookBtn").addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to cart!`);
  });
}

if (window.location.pathname.includes("details.html")) {
  window.addEventListener("DOMContentLoaded", loadProductDetail);
}

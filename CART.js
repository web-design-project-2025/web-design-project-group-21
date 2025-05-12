const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById('cart-items');

const translations = {
  en: {
    cartTitle: "Your cart",
    empty: "Your cart is empty.",
    addAnother: "+ Add another deal",
    checkout: "Checkout"
  },
  sv: {
    cartTitle: "Din varukorg",
    empty: "Din varukorg är tom.",
    addAnother: "+ Lägg till ett erbjudande till",
    checkout: "Till kassan"
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function renderCart() {
  document.querySelector("h2").textContent = translations[currentLang].cartTitle;
  document.querySelector(".add-btn").textContent = translations[currentLang].addAnother;
  document.querySelector(".checkout-btn").textContent = translations[currentLang].checkout;

  cartContainer.innerHTML = '';
  if (cart.length === 0) {
    cartContainer.innerHTML = `<p>${translations[currentLang].empty}</p>`;
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div class="cart-info">1 x ${item.title} 🎟️</div>
      <div class="cart-actions">
        <button onclick="editItem(${index})">✏️</button>
        <button onclick="removeItem(${index})">🗑️</button>
      </div>
    `;
    cartContainer.appendChild(div);
  });
}

function editItem(index) {
  const item = cart[index];
  window.location.href = item.link || 'spots.html';
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}


renderCart();

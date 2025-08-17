document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("orderDetails");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    if (cart.length === 0) {
      container.innerHTML = "<p>Your cart is empty</p>";
      return;
    }
  
    let total = 0;
    const html = cart.map(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      return `
        <div class="summary-line">
          <span>${item.title} x ${item.quantity}</span>
          <span>${itemTotal} SEK</span>
        </div>
      `;
    }).join("");
  
    container.innerHTML = `
      ${html}
      <div class="summary-line total">
        <span>Total</span>
        <span><strong>${total} SEK</strong></span>
      </div>
    `;
  });
  

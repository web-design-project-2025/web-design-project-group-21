const faqs = [
  "How do I contact customer support?",
  "How do I book a flight/hotel/tour through the site?",
  "Can I change or cancel my reservation?",
  "What payment methods do you accept?",
  "Will I receive a confirmation email after booking?",
  "Do you offer travel guides or itineraries?",
  "Can I customize my travel package?",
  "How do I find the best travel deals?",
];

function renderFAQs(filter = "") {
  const list = document.getElementById("faq-list");
  list.innerHTML = "";
  faqs
    .filter((q) => q.toLowerCase().includes(filter.toLowerCase()))
    .forEach((q) => {
      const li = document.createElement("li");
      li.textContent = q;
      list.appendChild(li);
    });
}

document.getElementById("search-input").addEventListener("input", (e) => {
  renderFAQs(e.target.value);
});

renderFAQs();

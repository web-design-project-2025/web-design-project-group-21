// 🔍 Stap 1: Haal de ID uit de URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// 🔍 Stap 2: Definieer je lijst met producten (voor nu hardcoded)
const list = [
  {
    id: "1",
    title: "Activity 1",
    price: 200,
    image: "img/activity1.jpg",
    description: "Description for activity 1"
  },
  {
    id: "2",
    title: "Activity 2",
    price: 300,
    image: "img/activity2.jpg",
    description: "Description for activity 2"
  },
  // Voeg meer items toe...
];

// 🔍 Stap 3: Zoek het juiste item op
const product = list.find((item) => item.id === id);

// 🔍 Stap 4: Toon het product in de pagina
if (product) {
  const container = document.getElementById("product-detail");
  container.innerHTML = `
    <h1>${product.title}</h1>
    <img src="${product.image}" alt="${product.title}" style="width:300px; border-radius:6px;" />
    <p><strong>Price:</strong> ${product.price} SEK</p>
    <p>${product.description}</p>
  `;
} else {
  // Als het product niet gevonden wordt
  document.getElementById("product-detail").innerHTML = "<p>Product not found.</p>";
}

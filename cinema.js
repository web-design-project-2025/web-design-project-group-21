const cities = ["stockholm", "goteborg", "malmo"];

function handleSearchInput() {
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
      cities: "📍 Available in major cities including Stockholm, Gothenburg, Malmö, and more",
      note: "Choose your date, time, and preferred cinema to book your ticket today!",
      cart: "Add to cart",
      toggle: "English / Swedish"
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
      toggle: "Svenska / Engelska"
    }
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
// TOOGLE
const navbarnav = document.querySelector(".navbar-nav");

//klilk menu

document.querySelector("#menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// klik diluar menu
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
// Menambahkan interaksi hover dengan animasi pada card
const optionCards = document.querySelectorAll(".option-card");

optionCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    card.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.2)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  });
});

// Menambahkan efek klik pada tombol "Lihat Detail"
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Anda akan diarahkan ke halaman detail produk.");
    // Di sini Anda bisa menambahkan logika untuk navigasi atau fitur lainnya
  });
});

document.querySelectorAll(".details-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const card = e.target.closest(".option-card");
    const name = card.dataset.name;
    const price = card.dataset.price;
    const description = card.dataset.description;
    const img = card.dataset.img;

    // Redirect to the detail page with URL parameters
    const url = `detailSAYUR.html?name=${encodeURIComponent(
      name
    )}&price=${encodeURIComponent(price)}&description=${encodeURIComponent(
      description
    )}&img=${encodeURIComponent(img)}`;
    window.location.href = url;
  });
});

document.querySelectorAll(".details-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const card = e.target.closest(".option-card");
    const name = card.dataset.name;
    const price = card.dataset.price;
    const description = card.dataset.description;
    const img = card.dataset.img;

    // Redirect to the detail page with URL parameters
    const url = `detailBUAH.html?name=${encodeURIComponent(
      name
    )}&price=${encodeURIComponent(price)}&description=${encodeURIComponent(
      description
    )}&img=${encodeURIComponent(img)}`;
    window.location.href = url;
  });
});

// Логику менять не нужно — задача челленджа только в вёрстке/стилях (index.html, style.css).

// Фильтр меню по категории
const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll("#menuList li");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.cat;
    menuItems.forEach((item) => {
      item.style.display = cat === "all" || item.dataset.cat === cat ? "" : "none";
    });
  });
});

// Форма бронирования столика
document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("bookName").value.trim();
  const phone = document.getElementById("bookPhone").value.trim();
  const guests = document.getElementById("bookGuests").value;

  if (!name || !phone) return;

  const result = document.getElementById("bookingResult");
  result.textContent = `Спасибо, ${name}! Столик на ${guests} гостей забронирован. Мы свяжемся с вами по номеру ${phone}.`;
  e.target.reset();
  document.getElementById("bookGuests").value = 2;
});

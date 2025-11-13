
const hello = confirm('Welcome to our English project dictionary!');

const searchInput = document.getElementById('searchInput');
const listItems = document.querySelectorAll('#verbList li');

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase().trim();
  listItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? '' : 'none';
  });
});


const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

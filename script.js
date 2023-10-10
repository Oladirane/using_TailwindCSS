tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
      },
    },
  },
};

const hamb = document.getElementById("hamburger");
const list = document.getElementById("liste");
const listitems = document.querySelectorAll(".list-items");

hamb.addEventListener("click", () => {
  hamb.classList.toggle("active");
  list.classList.toggle("active");
});

listitems.forEach((e) => {
  e.addEventListener('click', () => {
    hamb.classList.remove('active')
    list.classList.remove('active')
  })
})
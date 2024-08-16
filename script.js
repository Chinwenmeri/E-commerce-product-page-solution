let count = 0
const cartNum = document.getElementById("cart_num")
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-shoe");
// const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

// closeModal.addEventListener("click", () => {
//   modal.close();
// });

function increment() {
  count+=1
  cartNum.innerText = count
}
function decrement() {
  count-=1
  cartNum.innerText = count
}
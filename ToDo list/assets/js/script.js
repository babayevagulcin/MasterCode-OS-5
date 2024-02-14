let todoForm = document.querySelector(".todo__form");
let todoInput = document.querySelector(".todoInput");
let todoCheckbox = document.querySelector(".todo__checkbox");
let todoList = document.querySelector(".todo__list");
let todoListItem = document.querySelector(".todo__list-item");
let todoListItemFooter = document.querySelector(".todo__list-item--footer");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (todoInput.value) {
    let createItem = createTodo();
    todoList.insertAdjacentHTML("afterbegin", createItem);
  }
});
function createTodo() {
  return `
      <li class="todo__list-item">
       <div class="todo__checkbox" onclick="createCheck(this)" ></div>
       <p class="todo__text">${todoInput.value}</p>
     </li>
  `;
}
// function createCheck() {
//   let todoCheckbox = document.querySelector(".todo__checkbox");
//   if (){
//     let checkImg = document.createElement("img");
//     checkImg.setAttribute("src", "./assets/img/Group 3.png");
//     todoCheckbox.appendChild(checkImg);
//   }
// }

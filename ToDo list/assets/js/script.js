let form = document.querySelector("form");
let todoList = document.querySelector(".todo__list");
let todoLabel = document.querySelector(".todoLabel");
let todoInput = document.querySelector(".todoInput");
let todoListItemFooter = document.querySelector(".todo__list-item--footer");
// todoInput.addEventListener("input", function (e) {
//   e.preventDefault();
//   if (todoInput) {
//     let todoListItem = document.createElement("li");
//     let todoLabelCheck = document.createElement("label");
//     let inputCheckbox = document.createElement("input");
//     inputCheckbox.setAttribute("type", "checkbox");

//     todoListItem.classList.add(".todo__list-item");
//     todoListItem.classList.add("todoLabel");
//     inputCheckbox.id = "inputCheckbox";

//     todoList.append(todoListItem);
//     todoListItem.append(todoLabelCheck);
//     todoLabelCheck.append(inputCheckbox);
//     todoListItem.innerHTML += todoInput.value;

//     console.log(todoListItem);
//   }
// });
todoInput.addEventListener("input", function (e) {
  e.preventDefault();
  if (todoInput) {
    let todoListItem = document.createElement("li");
    todoListItem.innerHTML += `
    <li class="todo__list-item">
    <label for="" class="todoLabel">
      <input type="checkbox" name="checkbox" id="inputCheckbox" />
      ${todoInput.value}
    </label>
    </li>
    `;
    todoListItem.classList.add(".todo__list-item");
    todoList.append(todoListItem);
    console.log(todoListItem);
  }
});

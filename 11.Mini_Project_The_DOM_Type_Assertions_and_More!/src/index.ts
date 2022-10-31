/*
// const btn = document.getElementById("btn");
// the exclamation sign at the end tells TS that the variable is not going to be null, it exists !
const btn = document.getElementById("btn")!;

// the ? after btn tells js that if the btn exists , then run what is after the [.]
btn?.addEventListener("click", function () {
  alert("CLICKED!");
});
*/
//  TYPE ASSERTIONS
/*
let mystery: unknown = "Hello World!!!";

const numChars = (mystery as string).length;
*/
/*
 ** TYPE ASSERTIONS WITH THE DOM
 */
// const btn = document.getElementById("btn")! as HTMLButtonElement;
// const input = document.getElementById("todoInput")! as HTMLInputElement;

// btn.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });

// // Type assertions can also be done by this
// const testInput = document.getElementById("todoInput");
// let testInputValue = (<HTMLInputElement>testInput).value;

/*
 **  Working with Events
 */

interface Todo {
  text: string;
  completed: boolean;
}
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoInput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todoList")! as HTMLUListElement;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("submitted");
// });

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function handleSubmit(event: SubmitEvent) {
  event.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  todos.push(newTodo);
  createTodo(newTodo);
  saveTodos();
  input.value = "";
}

function createTodo(todo: Todo) {
  const newLI = document.createElement("LI");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", function () {
    todo.completed = checkbox.checked;
    saveTodos();
  });

  newLI.append(todo.text);
  newLI.append(checkbox);
  list.append(newLI);
  input.value = "";
}
form.addEventListener("submit", handleSubmit);

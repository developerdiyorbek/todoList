const input = document.querySelector("#input");
const list = document.querySelector("#list");
const taskCount = document.querySelector("#counter");

// counter
let taskCounter = 0;
function updateCounter() {
  taskCount.innerHTML = taskCounter;
}

function addTask() {
  if (input.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("LI");
    li.textContent = input.value;
    list.appendChild(li);
    let span = document.createElement("SPAN");
    span.innerHTML = "\u00d7";

    li.appendChild(span);
    taskCounter++;
    updateCounter();
  }
  input.value = "";
}
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      taskCounter--;
      updateCounter();
    }
  },
  false
);

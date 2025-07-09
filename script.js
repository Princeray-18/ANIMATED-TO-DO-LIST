function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function () {
    li.classList.add("removed");
    setTimeout(() => li.remove(), 300);
  });

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

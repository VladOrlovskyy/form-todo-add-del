document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("addTaskBtn");
    const input = document.querySelector(".input-container input");
    const list = document.querySelector(".todo-list");

    button.addEventListener("click", () => {
        const taskText = input.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.className = "todo-list-item";
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            li.innerText = taskText;
            list.appendChild(li);
            li.appendChild(deleteBtn);
            input.value = "";

            deleteBtn.addEventListener("click", () => {
                const confirmation = confirm("Are you sure you want to delete this task?");
                if (confirmation) {
                    list.removeChild(li);
                }
            });
        } else {
            alert("Please enter a task.");
        }
    });

    list.addEventListener("click", (event) => {
        if (event.target.tagName === "li") {
            const confirmation = confirm("Are you sure you want to delete this task?");
            if (confirmation) {
                event.target.remove();
            }
        }
    });
});

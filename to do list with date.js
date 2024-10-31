const inputBox = document.getElementById("input-box");
const dateInput = document.getElementById("date-input");
const timeInput = document.getElementById("time-input");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create task item
        let li = document.createElement("li");

        // Create a div to hold task text and date/time side by side
        let taskContent = document.createElement("div");
        taskContent.className = "task-content";

        // Task text
        let taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.innerHTML = inputBox.value;

        // Date and time
        let taskDateTime = document.createElement("span");
        taskDateTime.className = "task-date-time";
        taskDateTime.innerHTML = `${dateInput.value || ''} ${timeInput.value || ''}`;

        // Append task text and date/time to task content container
        taskContent.appendChild(taskText);
        taskContent.appendChild(taskDateTime);

        // Add delete button
        let deleteBtn = document.createElement("span");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerHTML = "\u00d7";

        // Append task content and delete button to list item
        li.appendChild(taskContent);
        li.appendChild(deleteBtn);

        listContainer.appendChild(li);
    }

    inputBox.value = '';
    dateInput.value = '';
    timeInput.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggles checked class
        saveData();
    } else if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove(); // Deletes the task
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

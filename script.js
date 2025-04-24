document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (!taskText) {
            alert('Vui lòng nhập tên công việc!');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        //sửa công việc
        li.onclick = () => {
            const newTaskText = prompt('Sửa công việc:', li.textContent);
            if (newTaskText) li.textContent = newTaskText;
        };

        //xóa công việc
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        deleteButton.onclick = (event) => {
            event.stopPropagation(); 
            taskList.removeChild(li);
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';

        // đánh dấu công việc hoàn thành
        li.onclick = () => {
            li.classList.toggle('completed');
        };
    };

    addTaskButton.onclick = addTask;
    taskInput.onkeypress = (event) => {
        if (event.key === 'Enter') addTask();
    };
});
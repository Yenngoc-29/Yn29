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

        // Tùy chọn sửa công việc
        li.onclick = () => {
            const newTaskText = prompt('Sửa công việc:', li.textContent);
            if (newTaskText) li.textContent = newTaskText;
        };

        // Tùy chọn xóa công việc
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        deleteButton.onclick = (event) => {
            event.stopPropagation(); // Ngăn chặn sự kiện click trên li
            taskList.removeChild(li);
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = ''; // Xóa ô nhập sau khi thêm công việc

        // Đánh dấu công việc hoàn thành
        li.onclick = () => {
            li.classList.toggle('completed');
        };
    };

    addTaskButton.onclick = addTask;
    taskInput.onkeypress = (event) => {
        if (event.key === 'Enter') addTask();
    };
});
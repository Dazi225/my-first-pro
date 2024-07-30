function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }
  
    const taskList = document.getElementById('task-list');
  
    const li = document.createElement('li');
    li.textContent = taskText;
  
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.className = 'done';
    doneButton.onclick = function() {
      li.classList.toggle('done');
      const status = li.querySelector('.status');
      if (li.classList.contains('done')) {
        status.textContent = 'Your task is done';
        status.style.display = 'inline';
      } else {
        status.textContent = '';
        status.style.display = 'none';
      }
    };
  
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove';
    removeButton.onclick = function() {
      taskList.removeChild(li);
    };
  
    const status = document.createElement('span');
    status.className = 'status';
  
    li.appendChild(doneButton);
    li.appendChild(removeButton);
    li.appendChild(status);
    taskList.appendChild(li);
  
    taskInput.value = '';
  }
    
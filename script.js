var task_container = document.querySelector('.to-do-list-tasks');
var add_button = document.querySelector('.submit-button');
var list = document.querySelector('#task-list');


function getTask(){
   let task = document.querySelector('.task-field').value; 

   return task;
}




add_button.addEventListener("click", ()=>{
    let task = getTask();

    if (task.length > 0){
        const valid_task = document.createElement('li');
        valid_task.classList.add('each-task');

        const row = document.createElement('span');
        row.classList.add('task-name');
        row.innerHTML=task;

        const delete_button = document.createElement('img');
        delete_button.classList.add('delete-button');
        delete_button.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMFJREFUSEvtlNEJwzAMRC+btJukm3SVTtJukozSUcqDBoJrS2eC6U8MIZgo9ySd5UmD1zRYXycg7fDfW3SX9ArSvEiao5ioAsSfkt6SrhUI4nzn/WhBIgA/Ll+BErKJk/0q6daqMvOgBrHFgWYAYkoI1aSZbxU5gBLCPmzLvl09AAwlc1bL+B8rHEDZc/Y8FiQD1AyNTldXBdFpsSHOoLUM3UOYA+K6KiDYuSoAVcXdOUhvzCggM/mQ+FmB1b7hHnwAC+InGed+jX8AAAAASUVORK5CYII=";
        
        row.appendChild(delete_button);
        valid_task.appendChild(row);

        list.append(valid_task);

    }

    // reset the task input bar
    document.querySelector('.task-field').value = "";

} 
);


list.addEventListener("click", function(e){    
    if (e.target.classList.value == 'delete-button'){
        e.target.parentElement.remove();
    }

    else if (e.target.classList.value == 'task-name'){
        e.target.style.textDecoration = 'line-through';
        
    }
}
)






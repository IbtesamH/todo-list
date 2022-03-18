window.addEventListener('load', () => {
    const form = document.querySelector('.new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('.task-list');



    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if(!task) {
            alert("Please fill out the form");
            return;
        }

        const task_el = document.createElement('div');
        task_el.classList.add('task-container');
        task_el.innerText = input.value;
        list_el.appendChild(task_el);
        input.value = "";

        const edit = document.createElement('button');
        edit.innerText = 'Complete'
        edit.classList.add('button');
        edit.classList.add('edit');
        

        const delete_btn = document.createElement('button');
        delete_btn.innerText = 'delete'
        delete_btn.classList.add('button');
        delete_btn.classList.add('delete');

        const actions = document.createElement('div');
        actions.appendChild(edit);
        actions.appendChild(delete_btn);

        task_el.appendChild(actions);

    


        delete_btn.addEventListener('click', ()=> {
            list_el.removeChild(task_el);
        })

        edit.addEventListener('click', () =>{
            task_el.style.textDecoration = 'line-through';
            task_el.style.opacity = .5;
        });
    });
});
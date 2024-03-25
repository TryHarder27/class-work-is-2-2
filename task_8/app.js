const checkInput = () => {
    let input = document.querySelector('#todoInput').value;
    let button = document.querySelector('#todoBtn');
    if ( input !== "" ) {
        button.disabled = false;
     } else {
        button.disabled = true;
    }
}

const addTask = () => {
    let task = document.querySelector('#todoInput').value;
    let li = document.createElement('li');
    li.textContent = task;
    document.querySelector('#todoList').appendChild(li);
    document.querySelector('#todoInput').value = "";
    let button = document.querySelector('#todoBtn').disabled = true;
}

const input = document.querySelector('input');
const btn = document.querySelector('.onclick');
const Notcompleted = document.querySelector('.NotCompleted');
const Completed = document.querySelector('.Completed');




btn.addEventListener('click', addList);

function addList(e) {
    
    const checkBtn = document.createElement('button');
    const newLi = document.createElement('li');
    const delBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if (input.value !== '') {
        newLi.textContent = input.value;
        input.value = '';
        Notcompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }

    checkBtn.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none';
    });

    delBtn.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove();
    });
}
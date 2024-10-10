const input = document.querySelector('#input');
const btn = document.querySelector('.button');
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
        input.value = ''; // Clear input field after adding
        Notcompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }

    // Mark as completed
    checkBtn.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove(); // Remove from Not Completed
        Completed.appendChild(parent); // Add to Completed
        checkBtn.style.display = 'none'; // Hide the check button once task is completed
    });

    // Delete task
    delBtn.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove(); // Remove the list item from DOM
    });
}

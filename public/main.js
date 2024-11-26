const addPlayerBtn = document.getElementById('addBtn');
const modalField = document.querySelector('.modal');
const closeModalField = document.querySelector('.close-btn');

addPlayerBtn.addEventListener('click', function() {
    modalField.classList.remove('hidden');
    modalField.classList.add('block');
});

closeModalField.addEventListener('click', function() {
    modalField.classList.remove('block');
    modalField.classList.add('hidden');
})
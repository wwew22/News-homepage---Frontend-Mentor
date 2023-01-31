
function toggleMe() {
    let x = document.getElementsByClassName("hide");
    let y = document.getElementsByClassName("show");

    for (let i = 0; i < x.length; i++) {
        x[i].classList.toggle("show");
    }

}

const open = document.querySelector('#open-modal');
const closeModalBtn = document.querySelector('#close');
const modal = document.querySelector('.modal-container');
// Open modal
open.addEventListener('click', () => {
    modal.style.display = 'block';
// add modal-active class
    document.body.classList.add('modal-active');
});
// Close modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
// remove modal-active class
    document.body.classList.remove('modal-active');
});

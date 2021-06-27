const toggle = document.getElementById('toggle');

const modal = document.getElementById('modal');

toggle.addEventListener('change', e => {

    modal.classList.toggle('show-modal')
})


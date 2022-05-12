const zoekveld = document.querySelector('form')
const zoekknop = document.querySelector('button:nth-of-type(3)')

function toggleZoeken() {
    zoekveld.classList.toggle('onzichtbaar')
}

zoekknop.addEventListener('click', toggleZoeken)
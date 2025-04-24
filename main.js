'use strict'

function revelarConteudo() {
    const conteudo = document.getElementById('conteudo');
    if (conteudo.style.display === 'none') {
        conteudo.style.display = 'block'; 
    } else {
        conteudo.style.display = 'none'; 
    }
}


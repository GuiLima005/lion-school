'use strict'

// import {teste} from '../api/teste.js'

const criarCurso = (cursos) => {

    const card = document.createElement('a')
    card.classList.add('curso')    
    card.href = './turma.html'
    card.id = cursos.sigla

    card.onclick = () => {
        localStorage.setItem("sigla", card.id);
        localStorage.setItem("nomeDoCurso", cursos.nome);
      };

    const icone = document.createElement('img')
    icone.classList.add('icone')
    icone.src = cursos.icon

    const nome = document.createElement('span')
    nome.textContent = cursos.sigla

    card.append(icone, nome)
    
    return card
}

const carregarCurso = async () => {

    const url = `http://localhost:8080/v1/lion-school/cursos`

    const response = await fetch(url)

    const data = await response.json()

    let cursos = data.curso

    const novoCurso = document.getElementById('boxs')
    const cursosCard = cursos.map(criarCurso)

    novoCurso.replaceChildren(...cursosCard)    
}

carregarCurso()
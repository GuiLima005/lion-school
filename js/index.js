'use strict'

// import {teste} from '../api/teste.js'

const criarCurso = (cursos) => {

    const card = document.createElement('a')
    card.classList.add('curso')    
    card.href = './turma.html'

    const icone = document.createElement('img')
    icone.classList.add('icone')
    icone.src = cursos.icon

    const nome = document.createElement('span')
    nome.textContent = cursos.sigla

    card.append(icone, nome)
    
    return card
}

const carregarCurso = async () => {

    const novoCurso = document.getElementById('boxs')
    const card = await linkCursos()

    const cursosCard = card.map(criarCurso)

    novoCurso.replaceChildren(...cursosCard)    
}

const linkCursos = async () => {

    const url = `http://localhost:8080/v1/lion-school/cursos`

    const response = await fetch(url)
    const data = await response.json()
    
    return data.curso

}

carregarCurso()
'use strict'

const criarCurso = (curso) => {

    const card = document.createElement('a')
    card.classList.add('curso')    
    card.href = './turma.html'
    card.id = curso.sigla

    card.onclick = () => {
        localStorage.setItem("sigla", card.id);
        localStorage.setItem("nomeDoCurso", curso.nome);
      };

    const icone = document.createElement('img')
    icone.classList.add('icone')
    icone.src = curso.icon
    icone.alt = "icone do curso"

    const nome = document.createElement('span')
    nome.textContent = curso.sigla

    card.append(icone, nome)
    
    return card
}

const carregarCurso = async () => {

    const url = `http://localhost:8080/v1/lion-school/cursos`

    const response = await fetch(url)

    const data = await response.json()


    console.log(data);

    const novoCurso = document.getElementById('boxs')
    const cursosCard = data.curso.map(criarCurso)

    novoCurso.replaceChildren(...cursosCard)    
}

carregarCurso()

// let dicipli = curso.disciplinas.split(' ').map(word => word.charAt(0)).join('')
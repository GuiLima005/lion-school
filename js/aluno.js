'use strict'

const criarAluno = (aluno) => {
    

    let nome = localStorage.getItem("nome")
    let nomeAluno = document.querySelector(".nome")
    nomeAluno.innerHTML = nome

    let foto = localStorage.getItem("foto")
    let novaFoto = document.querySelector(".aluno")
    novaFoto.src= foto

    // const cardAluno = document.createElement('div')
    // cardAluno.classList.add('card-aluno')

    // const img = document.createElement('img')
    // img.classList.add('aluno')
    // img.src = aluno.foto

    // const nome = document.createElement('p')
    // nome.classList.add('nome')
    // nome.textContent = aluno.nome

    // cardAluno.append(img, nome)

    // return cardAluno
}

const criarNotas = (diciplina) => {

    criarAluno()

    const materia = document.createElement('div')
    materia.classList.add('materia')

    const media = document.createElement('p')

    const nota = document.createElement('div')
    
    if (diciplina.media >= 65) {

        media.classList.add("media-azul")
        media.textContent = diciplina.media

        nota.classList.add("nota-alta");
        nota.style.height = `${diciplina.media}%`
       
    } else if (diciplina.media < 65 && diciplina.media >= 50) {

        media.classList.add("media-amarela")
        media.textContent = diciplina.media

        nota.classList.add("nota-media");
        nota.style.height =`${diciplina.media}%`

    
    } else if (diciplina.media < 50) {

        media.classList.add("media-vermelha") 
        media.textContent = diciplina.media

        nota.classList.add("nota-baixa")
        nota.style.height = `${diciplina.media}%`
    }
  

    const barra = document.createElement('div')
    barra.classList.add('barra')

    const sigla = document.createElement('p')
    sigla.classList.add('sigla')
    // sigla.textContent = diciplina.nome


    materia.append(media, barra, sigla)
    barra.append(nota)
    
    return materia

}

const carregarAluno = async () => {

    let matricula = localStorage.getItem("matricula")
    const url = `http://localhost:8080/v1/lion-school/matricula?matricula=${matricula}`

    const response = await fetch (url)
    
    const data = await response.json()


    console.log(data)

    const novoAluno = document.getElementById('card-nota')
    const alunoCard = data.diciplina.map(criarNotas)

    novoAluno.replaceChildren(...alunoCard)
}
carregarAluno()
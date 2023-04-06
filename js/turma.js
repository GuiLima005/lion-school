'use strict'

const criarTitle = () => {
    let title = localStorage.getItem("nomeDoCurso");
    let titleCourse = document.querySelector(".title");
    titleCourse.innerHTML = title;
    
}

const criarListaAlunos = (aluno) => {

    criarTitle()

    const cardAluno = document.createElement('a')
    cardAluno.href = './aluno.html'
    cardAluno.id = aluno.matricula

    if (aluno.status == "Cursando") {
        cardAluno.classList.add('alunos-cursando')
    } else {
        cardAluno.classList.add('alunos-finalizado')
    }

    cardAluno.onclick = () => {
        localStorage.setItem("matricula", cardAluno.id);
    };

    const img = document.createElement('img')
    img.classList.add('aluno')
    img.src = aluno.foto

    const nome = document.createElement('p')
    nome.classList.add('nome')
    nome.textContent = aluno.nome

    cardAluno.append(img, nome)

    return cardAluno
}

const carregarListaAlunos  = async () => {

    let siglaCurso = localStorage.getItem("sigla");
    const url = `http://localhost:8080/v1/lion-school/alunos/curso?sigla=${siglaCurso}`

    const response = await fetch(url)

    const data = await response.json()

    console.log(data);
    

    const novoAluno = document.getElementById('container-alunos')
    const alunosCard = data.alunos.map(criarListaAlunos)

    novoAluno.replaceChildren(...alunosCard)
}

carregarListaAlunos()

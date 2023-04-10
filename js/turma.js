'use strict'

const criarTitle = () => {
    let title = localStorage.getItem("nomeDoCurso")
    let titleCourse = document.querySelector(".title")
    titleCourse.innerHTML = title
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
        localStorage.setItem("matricula", cardAluno.id)
        localStorage.setItem("foto", img.id)
        localStorage.setItem("nome", nome.id)
    }

    const img = document.createElement('img')
    img.classList.add('aluno')
    img.src = aluno.foto
    img.id = aluno.foto
    img.alt = 'alunos'

    const nome = document.createElement('p')
    nome.classList.add('nome')
    nome.textContent = aluno.nome
    nome.id = aluno.nome

    var select = document.getElementById('status')
    
    // Função para pegar o valor dos options
    select.addEventListener('change', function () {
        let valor = select.value

        console.log(valor)

        if (valor == 'Status') {
            cardAluno.style.display = 'flex'

        } else if (valor != aluno.status) {
            cardAluno.style.display = 'none'
            
        } else if (valor == aluno.status) {
            cardAluno.style.display = 'flex'      
        }
    })

    // var selectAno = document.getElementById('status')
    // let valorAno

    // selectAno.addEventListener('change', function () {
    //     valorAno = selectAno.value

    //     console.log(valorAno)

    //     if (valorAno == 'ano') {
    //         cardAluno.style.display = 'flex'

    //     } else if (valorAno != aluno.conclusao) {
    //         cardAluno.style.display = 'none'
            
    //     } else if (valorAno == aluno.conclusao) {
    //         cardAluno.style.display = 'flex'      
    //     }
    // })

    cardAluno.append(img, nome)

    return cardAluno

}

const carregarListaAlunos = async () => {

    let siglaCurso = localStorage.getItem("sigla")
    const url = `http://localhost:8080/v1/lion-school/alunos/curso?sigla=${siglaCurso}`

    const response = await fetch(url)

    const data = await response.json()

    console.log(data);

    const novoAluno = document.getElementById('container-alunos')
    const alunosCard = data.alunos.map(criarListaAlunos)

    novoAluno.replaceChildren(...alunosCard)
}
carregarListaAlunos()

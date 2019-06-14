const filmes = [
    {
        "nome": "Moonlight",
        "diretor": "Barry Jenkins",
        "genero": "Drama",
        "image": "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f3/Moonlight_%28filme%29.png/200px-Moonlight_%28filme%29.png",
        "descrição": "Black trilha uma jornada de autoconhecimento enquanto tenta escapar do caminho fácil da criminalidade e do mundo das drogas de Miami. Encontrando amor em locais surpreendentes, ele sonha com um futuro maravilhoso."
    },
    {},
    {},
    {},
    {},
]

let container = document.querySelector('.container')

filmes.forEach(filme => {

    let box = document.createElement('div')
    box.setAttribute('class','fotinha')
    container.appendChild (box)

    let imagem = document.createElement('img')
    imagem.src = filme.image
    box.appendChild(imagem);

    let texto = document.createElement('div')
    texto.setAttribute('class','textinho')
    container.appendChild(texto)

    let titulo = document.createElement('h1')
    titulo.innerHTML = filme.nome
    texto.appendChild(titulo)

    let direct = document.createElement('p')
    direct.innerHTML = filme.diretor
    texto.appendChild(direct)

    let gender = document.createElement('p')
    gender.innerHTML = filme.genero
    texto.appendChild(gender)

    let desc = document.createElement('p')
    desc.innerHTML = filme.descrição
    texto.appendChild(desc)

});
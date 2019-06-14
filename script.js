const filmes = [
    {
        "nome": "Moonlight",
        "diretor": "Barry Jenkins",
        "genero": "Drama",
        "image": "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f3/Moonlight_%28filme%29.png/200px-Moonlight_%28filme%29.png",
        "descricao": "Black trilha uma jornada de autoconhecimento enquanto tenta escapar do caminho fácil da criminalidade e do mundo das drogas de Miami. Encontrando amor em locais surpreendentes, ele sonha com um futuro maravilhoso."
    },
    {
        "nome": "Annabelle",
        "diretor": " John R. Leonetti",
        "genero": "Terror",
        "image": "https://m.media-amazon.com/images/M/MV5BOTQwZmQyYzEtODk5ZC00OTY3LWExMjAtYzRjNWFhNGM3MzBlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
        "descricao": "John Form acha que encontrou o presente ideal para sua esposa grávida, uma boneca vintage. No entanto, a alegria do casal não dura muito. Uma noite terrível, membros de uma seita satânica invadem a casa do casal em um ataque violento. Ao tentarem invocar um demônio, eles mancham a boneca de sangue, tornando-a receptora de uma entidade do mal."
    },
    {
        "nome": "A Bela e a Fera",
        "diretor": "Bill Condon",
        "genero": "Fantasia",
        "image": "data:image/jpeg;base64,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",
        "descricao": "Moradora de uma pequena aldeia francesa, Bela tem o pai capturado pela Fera e decide entregar sua vida ao estranho ser em troca da liberdade do progenitor. No castelo ela conhece objetos mágicos e descobre que a Fera é na verdade um príncipe que precisa de amor para voltar à forma humana."
    },
    {
        "nome": "Pantera Negra",
        "diretor": "Ryan Coogler",
        "genero": "Ação",
        "image": "http://br.web.img3.acsta.net/r_1920_1080/pictures/17/10/17/11/37/2513262.jpg",
        "descricao": "Conheça a história de T'Challa, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores. Entre as suas habilidades estão a velocidade, inteligência e os sentidos apurados."
    },
    {
        "nome": "Questão de Tempo",
        "diretor": "Richard Curtis",
        "genero": "Romance",
        "image": "https://i.pinimg.com/originals/bc/ff/ba/bcffba0c628dc8a378dbf2fb604c8137.jpg",
        "descricao": "Depois de descobrir que ele pode viajar no tempo, o jovem Tim Lake usa sua habilidade para ganhar o coração da mulher dos seus sonhos e salvar seu amigo de um desastre profissional."
    },
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
    desc.innerHTML = filme.descricao
    texto.appendChild(desc)
    
});
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
        "image": "https://www.cafecomfilme.com.br/media/k2/items/cache/fbd810dbe9eba310a4db4eed080d5185_XL.jpg?t=1507547667",
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



function buscar(){

    filmes.forEach(filme => {

        let input = document.querySelector('.mh-search-input')
    
        if (input.value == " " || input.value == ""){

            let caixa = document.createElement('div');
            caixa.setAttribute('class','caixinha')
            container.appendChild(caixa)

            let box = document.createElement('div')
            box.setAttribute('class','fotinha')
            caixa.appendChild (box)
        
            let imagem = document.createElement('img')
            imagem.src = filme.image
            box.appendChild(imagem);
        
            let texto = document.createElement('div')
            texto.setAttribute('class','textinho')
            caixa.appendChild(texto)
        
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
        }else if (input.value == "apagar"){
    
            container.innerHTML = ""
        }else{
            console.log("fodeu")
        }
    
    });

}

let botao = document.querySelector('.botao')
botao.onclick = buscar;
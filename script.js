const filmes = [
    {
        nome: "Moonlight",
        diretor: "Barry Jenkins",
        genero: "Drama",
        image: "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f3/Moonlight_%28filme%29.png/200px-Moonlight_%28filme%29.png",
        descricao: "Black trilha uma jornada de autoconhecimento enquanto tenta escapar do caminho fácil da criminalidade e do mundo das drogas de Miami. Encontrando amor em locais surpreendentes, ele sonha com um futuro maravilhoso."
    },
    {
        nome: "Annabelle",
        diretor: "John R. Leonetti",
        genero: "Terror",
        image: "https://m.media-amazon.com/images/M/MV5BOTQwZmQyYzEtODk5ZC00OTY3LWExMjAtYzRjNWFhNGM3MzBlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
        descricao: "John Form acha que encontrou o presente ideal para sua esposa grávida, uma boneca. No entanto, a alegria do casal não dura muito. Uma noite terrível, membros de uma seita satânica invadem a casa do casal em um ataque violento. Ao tentarem invocar um demônio, eles mancham a boneca, tornando-a receptora de uma entidade."
    },
    {
        nome: "A Bela e a Fera",
        diretor: "Bill Condon",
        genero: "Fantasia",
        image: "https://www.cafecomfilme.com.br/media/k2/items/cache/fbd810dbe9eba310a4db4eed080d5185_XL.jpg?t=1507547667",
        descricao: "Moradora de uma pequena aldeia francesa, Bela tem o pai capturado pela Fera e decide entregar sua vida ao estranho ser em troca da liberdade do progenitor. No castelo ela conhece objetos mágicos e descobre que a Fera é na verdade um príncipe que precisa de amor para voltar à forma humana."
    },
    {
        nome: "Pantera Negra",
        diretor: "Ryan Coogler",
        genero: "Ação",
        image: "http://br.web.img3.acsta.net/r_1920_1080/pictures/17/10/17/11/37/2513262.jpg",
        descricao: "Conheça a história de T'Challa, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores. Entre as suas habilidades estão a velocidade, inteligência e os sentidos apurados."
    },
    {
        nome: "Questão de Tempo",
        diretor: "Richard Curtis",
        genero: "Romance",
        image: "https://i.pinimg.com/originals/bc/ff/ba/bcffba0c628dc8a378dbf2fb604c8137.jpg",
        descricao: "Depois de descobrir que ele pode viajar no tempo, o jovem Tim Lake usa sua habilidade para ganhar o coração da mulher dos seus sonhos e salvar seu amigo de um desastre profissional."
    },
    {
        nome: "Uma Linda Mulher",
        diretor: "Garry Marshall",
        genero: "Romance",
        image:"https://s2.glbimg.com/NwXHua9WxtS7gyKLKRa99jpbwd8=/top/e.glbimg.com/og/ed/f/original/2015/03/23/pretty-woman-1990.jpg",
        descricao: "DescriçãoDurante uma viagem de negócios a Los Angeles, Edward, um executivo que compra e fragmenta empresas para vendê-las, encontra a prostituta Vivian. Edward a contrata para ficar com ele durante uma semana a fim de acompanhá-lo nos jantares de negócios. Os dois se aproximam e descobrem que há vários obstáculos para serem superados até que possam unir seus mundos tão diferentes."
    }

]


let container = document.querySelector('.container')
// let lateral = document.querySelector('.lateral')
let input = document.querySelector('.mh-search-input')
let caixa = document.createElement('div');
caixa.setAttribute('class','caixinha')

function pesquisarFilme(){
    for( let i=0; i <= filmes.length; i++ ){  

            for (let j=0; j <= filmes.length; j++){

                if(input.value == filmes[j].nome || input.value == filmes[j].genero || input.value == filmes[j].diretor){

                    caixa.innerHTML = `
                    <div class="fotinha">
                       <img src="${filmes[j].image}" alt="${filmes[j].nome}">
                    </div>
                   <div class="textinho">
                       <h1>${filmes[j].nome}</h1>
                       <p>Diretor: ${filmes[j].diretor}</p>
                       <p>Gênero: ${filmes[j].genero}</p>
                       <p>Sinopse: ${filmes[j].descricao}</p>
                   </div>
                    `
                    container.appendChild(caixa)
                }
            
            }
    } 
}

function criar(){
    filmes.forEach(filme => {

        let caixa = document.createElement('div');
        caixa.setAttribute('class','caixinha')
        caixa.innerHTML = `
                <div class="fotinha">
                   <img src="${filme.image}" alt="${filme.nome}">
                </div>
               <div class="textinho">
                   <h1>${filme.nome}</h1>
                   <p>Diretor: ${filme.diretor}</p>
                   <p>Sinopse: ${filme.descricao}</p>
               </div>
        `
        container.appendChild(caixa)
    })
}

let botao = document.querySelector('.botao')
botao.onclick = pesquisarFilme;


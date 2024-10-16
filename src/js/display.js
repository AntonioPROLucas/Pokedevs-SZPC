let sectionCartoes = document.querySelector(".cartoes-pokedev");
let sectionLista = document.querySelector(".lista");

let resultadoCartoes = "";
let resultadoBotoes = "";

for (let cartao of cartoesPokedev){
    resultadoCartoes +=
    `<div class="${cartao.classe}" id="${cartao.id}">
        <div class="cartao-topo">
            <div class="detalhes">
                <h2 class="nome">${cartao.nome}</h2>
                <span>${cartao.span}</span>
            </div>
          
            <span class="tipo">${cartao.tipo}</span>
          
                <div class="cartao-imagem">
                    <img src="./src/img/${cartao.img}" alt=${cartao.alt} />
                </div>
            </div>
          
            <div class="cartao-informacoes">
                <div class="descricao">
                  <h3>Descrição</h3>
          
                  <p>${cartao.descricao}</p>
                </div>
            </div>
        </div>`
}

// Atualiza a seção de resultados com os elementos HTML gerados
sectionCartoes.innerHTML += resultadoCartoes;

for (let cartao of cartoesPokedev){
    resultadoBotoes +=
    `<li class="${cartao.classeDoBotao}" id="${cartao.idBotao}">
                        <img src="./src/img/${cartao.img}" alt="">
                        <span>${cartao.nome}</span>
                    </li>`
}

sectionLista.innerHTML += resultadoBotoes;
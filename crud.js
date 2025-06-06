let lista = [];
let contadora1 = 0;

function adicionar() {
    let campo = document.querySelector(".campo").value
    lista.push(campo);
    contadora1 += 1;
    exibir();
}

function remover(i) {
    lista.splice(i, 1);
    exibir();
}

function limpar() {
    lista = [];
    contadora1 = 0;
    exibir();
}

function editar(i) {
    const personagem_novo = prompt("Digite o novo nome do personagem:", lista[i]);
    if (personagem_novo !== null && personagem_novo.trim() !== "") {
        lista[i] = personagem_novo.trim();
        exibir();
    }
}



function exibir() {
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerHTML = '';
    let contadora = 0;

    for (let item of lista) {
        conteudo.innerHTML += `
            <div>
                ${item}
                <button onclick="remover(${contadora})">Remover</button>
                <button onclick="editar(${contadora})">Editar</button>
            </div>
        `;
        contadora += 1;
    }
}








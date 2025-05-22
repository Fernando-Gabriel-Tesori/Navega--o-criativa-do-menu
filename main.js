// Seleciona o elemento com a classe "navegacao"
let navegacao = document.querySelector(".navegacao");

// Seleciona o elemento com a classe "fechar"
let fechar = document.querySelector(".fechar");

// Quando o usuário clicar na navegação, adiciona a classe "ativo"
navegacao.onclick = function () {
  navegacao.classList.add("ativo");
};

// Quando o usuário clicar no botão de fechar, remove a classe "ativo"
fechar.onclick = function () {
  navegacao.classList.remove("ativo");
};

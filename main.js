const botaoMenu = document.getElementById("abrirMenu");
const botaoFechar = document.getElementById("fecharMenu");

// Abrir o menu
botaoMenu.addEventListener("click", () => {
  botaoMenu.classList.add("ativo");
});

// Fechar o menu
botaoFechar.addEventListener("click", () => {
  botaoMenu.classList.remove("ativo");
});

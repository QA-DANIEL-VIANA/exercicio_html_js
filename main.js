document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let valorCampoA = parseFloat(document.getElementById("campoA").value);
    let valorCampoB = parseFloat(document.getElementById("campoB").value);

    if (valorCampoB > valorCampoA) {
        exibirMensagem("Formulário válido!", "positiva");
    } else {
        exibirMensagem("O número B deve ser maior que o número A.", "negativa");
    }
});

function exibirMensagem(mensagem, tipo) {
    let mensagemElement = document.getElementById("mensagem");
    mensagemElement.innerHTML = "";

    let paragrafo = document.createElement("p");
    paragrafo.textContent = mensagem;
    paragrafo.classList.add(tipo);

    mensagemElement.appendChild(paragrafo);
}

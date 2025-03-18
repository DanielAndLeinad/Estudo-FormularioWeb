function alterarTexto(){
    document.getElementById("titulo").textContent = "O texto foi alterado usando DOM!"

}

function mudarCorFundo(){
    document.body.style.backgroundColor = "#04E157"

}

function abrirNovaPagina(){
    windows.open("https://www.google.com", "_blank")
}

function mostrarInfoNavegador(){
    alert("Você está usando: " + navigator.userAgent)
}
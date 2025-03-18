function coletInf(){
    let nome = prompt("Qual seu nome?")
    let idade = prompt("Qual sua idade?")

    document.getElementById("mensagem").innerHTML = "Olá" + nome + "! você tem" + idade + " anos"
    if (idadew < 18){
        alert("voce é de menor")
    } else{
        alert("voce é de maior")
    }
}
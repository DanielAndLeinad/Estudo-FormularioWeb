function adicionarRegistro(){
    while(true){
        let confirmar = confirm("Deseja adicionar um novo registro?");
        if(!confirmar){
            break;
        }

        let nome = prompt("Digite o nome do aluno:");
        let idade = prompt("Digite a idade do aluno:");

        if(nome && idade){
            let tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];
            let novaLinha = tabela.insertRow();

            let celulaNome = novaLinha.insertCell(0);
            let celulaIdade = novaLinha.insertCell(1);

            celulaNome.textContent = nome;
            celulaIdade.textContent = idade;

        }else {
            alert("Por favor, preencha todos os campos!");
        }

    }
}
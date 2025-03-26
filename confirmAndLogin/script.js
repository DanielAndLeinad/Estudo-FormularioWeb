function verificarLogin(){
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    let usuarioCorreto = "admin";
    let senhaCorreta = "1234";

if(usuario === usuarioCorreto && senha === senhaCorreta){
    alert("Login efetuado com sucesso!");
    window.localtion.href = "pagina_restrita.html";
}else{
    alert("Usuário ou senha incorretos!");
}

}
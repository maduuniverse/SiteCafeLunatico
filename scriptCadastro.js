function cadastrar(){

    let nome = document.getElementById("nome").value;
    let nick = document.getElementById("nick").value;

    if(nome == "" || nick == ""){
        alert("Preencha todos os campos!");
    }
    else{

        localStorage.setItem("nome", nome);
        localStorage.setItem("nickname", nick);

        alert("Bem-vindo(a), " + nome + "!\nSeu nickname é: " + nick);

        window.location.href = "inicio.html";
    }

}

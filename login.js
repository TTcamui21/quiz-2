//escreva o nome da função. Essa função é chamada quando o botão 'login' é clicado
function addUser() {
    //escreva o nome da variável que guardará o nome dos jogadores
   var player = document.getElementById ("player1_name_input").value;
   var player2 = document.getElementById ("player2_name_input").value;
   //escreva essa variável para que ela seja mostrada no localStorage do navegador
      localStorage.setItem("player1Name", player1_name_input);
      localStorage.setItem("player2Name", player2_name_input);
  //escreva o nome da tela que você deseja mostrar quando o botão for clicado
      window.location = "tela2.html";
  }
  
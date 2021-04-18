var Player1=document.getElementById("player1_name_input").value;
var Player2=document.getElementById("player2_name_input").value;
function addUser() {
localStorage.setItem("player1",Player1);
localStorage.setItem("player2",Player2);
window.location="index.html";
}

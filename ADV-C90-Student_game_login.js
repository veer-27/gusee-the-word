function adduser() {
    player1_name = document.getElementById("player1_name_input").Value;
    player2_name = document.getElementById("player2_name_input").Value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location = "ADV-C90-Student_game_page.html";
}
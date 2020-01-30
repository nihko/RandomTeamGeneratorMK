
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      var randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      var temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  
  function shuffler() {
    team = [];   
    let nombre1 = document.getElementById("member-1").value;
    let nombre2 = document.getElementById("member-2").value;
    let nombre3 = document.getElementById("member-3").value;
    let nombre4 = document.getElementById("member-4").value;
    let nombre5 = document.getElementById("member-5").value;
    let nombre6 = document.getElementById("member-6").value;
    team.push(nombre1);
    team.push(nombre2);
    team.push(nombre3);
    team.push(nombre4);
    team.push(nombre5);
    team.push(nombre6);
    console.log(team);
    shuffle(team);
    document.getElementById("player-0").innerHTML = team[0];
    document.getElementById("player-1").innerHTML = team[1];
    document.getElementById("player-2").innerHTML = team[2];
    document.getElementById("player-3").innerHTML = team[3];
    document.getElementById("player-4").innerHTML = team[4];
    document.getElementById("player-5").innerHTML = team[5];
  }
  
  // var myInterval = setInterval(shuffler, 50);
  // clearInterval(myInterval);
  
  document.getElementById("random").addEventListener("click", shuffler);
  
  window.addEventListener("keypress", checkKeyPressed, false);
   
  function checkKeyPressed(e) {
      if (e.charCode == "32") {
        document.getElementById("random").addEventListener("click", shuffler);    
      }
  }
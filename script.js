const doors = {
    door1: "ferrari or goat",
    door2: "ferrari or goat",
    door3: "ferrari or goat"
  };
  
  function whichDoorHasTheFerrari () {
    let a = Math.floor(Math.random() * 3 ) + 1; //this randomly assigns 1, 2 or 3 to the variable a
    console.log(a);
  
    if (a == 1){ //if a is 1, the ferrar is behind door 1
      doors.door1 = "ferrari";
      doors.door2 = "goat";
      doors.door3 = "goat";
    }
    else if (a == 2) { //if a is 2, the ferrar is behind door 2
      doors.door1 = "goat";
      doors.door2 = "ferrari";
      doors.door3 = "goat";
    }
    else { //if a is 3, the ferrar is behind door 3
      doors.door1 = "goat";
      doors.door2 = "goat";
      doors.door3 = "ferrari";
    }
  }

const possibleDoorsForPlayerToGuess = ["door1", "door2", "door3"];
let doorPlayerGuessed;

function playerChooseDoor1(){
  whichDoorHasTheFerrari(); //the player choosing a door effectively starts the game
  console.log(doors);
 
  doorPlayerGuessed = possibleDoorsForPlayerToGuess[0];
  console.log(doorPlayerGuessed);
  whichDoorDoesHostFirstOpen (); //the player choosing a door determines which door the host will open
}

function playerChooseDoor2(){
  whichDoorHasTheFerrari(); //the player choosing a door effectively starts the game
  console.log(doors);

  doorPlayerGuessed = possibleDoorsForPlayerToGuess[1];
  console.log(doorPlayerGuessed);
  whichDoorDoesHostFirstOpen (); //the player choosing a door determines which door the host will open
}

function playerChooseDoor3(){
  whichDoorHasTheFerrari(); //the player choosing a door effectively starts the game
  console.log(doors);
 
  doorPlayerGuessed = possibleDoorsForPlayerToGuess[2];
  console.log(doorPlayerGuessed);
  whichDoorDoesHostFirstOpen (); //the player choosing a door determines which door the host will open
}


const door1Button = document.getElementById("door1Button");
const door2Button = document.getElementById("door2Button");
const door3Button = document.getElementById("door3Button");

door1Button.addEventListener("click", playerChooseDoor1);
door2Button.addEventListener("click", playerChooseDoor2);
door3Button.addEventListener("click", playerChooseDoor3);

let revealedDoorinHTML = document.getElementById("initialReveal");

function whichDoorDoesHostFirstOpen () {
    let revealedDoor;
    let b = Math.floor(Math.random() * 2 ) + 1; //this randomly assigns 1 or 2 to the variable b
    console.log(b);
   
    //the following 24 lines determine what happens if the prize is behind door1
    if (
      (doors.door1 == "ferrari") && (doorPlayerGuessed == "door1") && (b == 1)
    ) {
        revealedDoor = "door2";
        revealedDoorinHTML.innerHTML = `You chose ${doorPlayerGuessed}. The host opens ${revealedDoor}. There is a goat behind ${revealedDoor}.`;
    }
    else if (
      (doors.door1 == "ferrari") && (doorPlayerGuessed == "door1") && (b == 2)
    ) {
        revealedDoor = "door3";
        revealedDoorinHTML.innerHTML = `You chose ${doorPlayerGuessed}. The host opens ${revealedDoor}. There is a goat behind ${revealedDoor}.`;
    }
      else if (
        (doors.door1 == "ferrari") && (doorPlayerGuessed == "door2")
      ){
          revealedDoor = "door3";
          revealedDoorinHTML.innerHTML = `You chose ${doorPlayerGuessed}. The host opens ${revealedDoor}. There is a goat behind ${revealedDoor}.`;
    }
    else if (
      (doors.door1 == "ferrari") && (doorPlayerGuessed == "door3")  
    ) {
        revealedDoor = "door2";
        revealedDoorinHTML.innerHTML = `You chose ${doorPlayerGuessed}. The host opens ${revealedDoor}. There is a goat behind ${revealedDoor}.`;
    }    
  
    //the following 24 lines determine what happens if the prize is behind door2
    else if (
      (doors.door2 == "ferrari") && (doorPlayerGuessed == "door2") && (b == 1)
    ) {
        revealedDoor = "door1";
        revealedDoorinHTML.innerHTML = `You chose ${doorPlayerGuessed}. The host opens ${revealedDoor}. There is a goat behind ${revealedDoor}.`;
    }
    else if (
      (doors.door2 == "ferrari") && (doorPlayerGuessed == "door2") && (b == 2)
    ) {
        revealedDoor = "door3";
        revealedDoorinHTML.innerHTML = `You chose ${doorPlayerGuessed}. The host opens ${revealedDoor}. There is a goat behind ${revealedDoor}.`;
    }
      else if (
        (doors.door2 == "ferrari") && (doorPlayerGuessed == "door1")
      ){
          revealedDoor = "door3";
          revealedDoorinHTML.innerHTML = `You chose ${doorPlayerGuessed}. The host opens ${revealedDoor}. There is a goat behind ${revealedDoor}.`;
        }
    else if (
      (doors.door2 == "ferrari") &&  (doorPlayerGuessed == "door3")
    ) {
        revealedDoor = "door1";
        revealedDoorinHTML.innerHTML = `You chose ${doorPlayerGuessed}. The host opens ${revealedDoor}. There is a goat behind ${revealedDoor}.`;
    }
  
    //the following 24 lines determine what happens if the prize is behind door3 
    else if (
      (doors.door3 == "ferrari") &&  (doorPlayerGuessed == "door3") && (b == 1)
    ) {
        revealedDoor = "door1";
        revealedDoorinHTML.innerHTML = `You chose ${doorPlayerGuessed}. The host opens ${revealedDoor}. There is a goat behind ${revealedDoor}.`;
    }
    else if (
      (doors.door3 == "ferrari") &&  (doorPlayerGuessed == "door3") && (b == 2)
    ) {
      revealedDoor = "door2";
      revealedDoorinHTML.innerHTML = `You chose ${doorPlayerGuessed}. The host opens ${revealedDoor}. There is a goat behind ${revealedDoor}.`;
    }
    else if (
      (doors.door3 == "ferrari") && (doorPlayerGuessed == "door1")
    ) {
        revealedDoor = "door2";
        revealedDoorinHTML.innerHTML = `You chose ${doorPlayerGuessed}. The host opens ${revealedDoor}. There is a goat behind ${revealedDoor}.`;
}
    else {
        revealedDoor = "door1";
        revealedDoorinHTML.innerHTML = `You chose ${doorPlayerGuessed}. The host opens ${revealedDoor}. There is a goat behind ${revealedDoor}.`;
    }
  
    console.log(revealedDoor);
  }


const possibleStrategies = ["stick", "switch"];
let chosenStrategy;

function chooseStickStrategy(){
  chosenStrategy = possibleStrategies[0];
  console.log(chosenStrategy);
  playTheGame() //the player choosing a strategy calls the function which will tell them if they won or lost
}

function chooseSwitchStrategy(){
  chosenStrategy = possibleStrategies[1];
  console.log(chosenStrategy);
  playTheGame() //the player choosing a strategy calls the function which will tell them if they won or lost
}

const stickButton = document.getElementById("stickStrategyButton");
const switchButton = document.getElementById("switchStrategyButton");

stickButton.addEventListener("click", chooseStickStrategy);
switchButton.addEventListener("click", chooseSwitchStrategy);


let totalNumberOfTimesGameHasBeenPlayed = 0;

let totalNumberOfTimesGamesPlayedWithStickStrategy = 0;
let totalNumberOfWinsWithStickStrategy = 0;
let winPercentageWithStickStrategy = (totalNumberOfWinsWithStickStrategy/totalNumberOfTimesGameHasBeenPlayed) * 100;

let totalNumberOfTimesGamesPlayedWithSwitchStrategy = 0;
let totalNumberOfWinsWithSwitchStrategy = 0;
let winPercentageWithSwitchStrategy = (totalNumberOfWinsWithSwitchStrategy/totalNumberOfTimesGameHasBeenPlayed) * 100;


function playTheGame() {
  if ( //i.e. if the player chose the correct door at the start and stuck with it
    (chosenStrategy == "stick") && (doors[doorPlayerGuessed] == "ferrari")
  ) {
    totalNumberOfTimesGameHasBeenPlayed++;
    totalNumberOfTimesGamesPlayedWithStickStrategy++;
    totalNumberOfWinsWithStickStrategy++;
    displayStats(); //the game being played automatically calls a function to show the player's cumulative stats
    alert("Congratulations you win a ferrari");
  }
  else if ( //i.e. if the player chose the incorrect door at the start and stuck with it
    (chosenStrategy == "stick") && (doors[doorPlayerGuessed] != "ferrari")
  ) {
    totalNumberOfTimesGameHasBeenPlayed++;
    totalNumberOfTimesGamesPlayedWithStickStrategy++;
    displayStats(); //the game being played automatically calls a function to show the player's cumulative stats
    alert("Sorry, you lose. Here's a goat though");
  }
else if ( //i.e. if the player chose the correct door at the start but switched away from it
  (chosenStrategy == "switch") && (doors[doorPlayerGuessed] == "ferrari")
) {
    totalNumberOfTimesGameHasBeenPlayed++;
    totalNumberOfTimesGamesPlayedWithSwitchStrategy++;
    displayStats(); //the game being played automatically calls a function to show the player's cumulative stats
    alert("Sorry, you lose. Here's a goat though");
}
  else { //i.e. if the player chose the incorrect door at the start and switched away from it
    totalNumberOfTimesGameHasBeenPlayed++;
    totalNumberOfTimesGamesPlayedWithSwitchStrategy++;
    totalNumberOfWinsWithSwitchStrategy++;
    displayStats(); //the game being played automatically calls a function to show the player's cumulative stats
    alert("Congratulations you win a ferrari");
  }
 
}

function displayStats() {
    let statsText = `So far, you have played the game a total of ${totalNumberOfTimesGameHasBeenPlayed} times.<br><br>${totalNumberOfTimesGamesPlayedWithStickStrategy} of those times you used the stick strategy. Your total number of wins with the stick stratgey is ${totalNumberOfWinsWithStickStrategy}.<br><br>${totalNumberOfTimesGamesPlayedWithSwitchStrategy} of those times you used the switch strategy. Your total number of wins with the switch stratgey is ${totalNumberOfWinsWithSwitchStrategy}.`;
    document.getElementById("stats").innerHTML = statsText;
  }
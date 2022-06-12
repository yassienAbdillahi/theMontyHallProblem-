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
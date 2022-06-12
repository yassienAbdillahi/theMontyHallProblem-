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
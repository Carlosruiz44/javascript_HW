
var favorite;
var leastFavorite;

favorite = 4;
leastFavorite = 30;

console.log(favorite + leastFavorite);

var myName;
var myBirthdate;

myName = 'Carlos Ruiz,';
myBirthdate = ' I was born on April 20th, same day as my mom.'

console.log(myName + myBirthdate)

var people;

people = [
	["Carlos",34,"Puerto Rican",["brown","brown"]],
	["Cristina", 31, "Equadorian"],
	["Leo", 33, "Dominican"],
	["Alex", 28, "German"]
];
console.log(people[0][0]+" & "+people[1][0]);

var wins;
var losses;

wins = 99;
losses = 10;

if(wins<100){
	alert("You have lost 99 games, one more loss and you will reach 100 losses, you bum.")

};

// var msg = 'You have entered: ';
// var name = 'Carlos Ruiz';
// funcion updateMessage(){
// 	var el = document.getElementById("message")
// 	el.textContent = msg + name;
// }

// updateMessage();	

function sayName(dialogue,name) {
	var message = dialogue + name;
	return message;
}

var message = sayName("You have entered: ", "Carlos Ruiz");
document.write(message);

sayName();

function prizeDoor(doorNum){
	if(doorNum === 1){
		alert("You're a loser, wrong door.");
	}else if(doorNum === 2){
		alert("Still a loser... wrong door.");
	}else if(doorNum === 3){
		alert("You're a Winner!");
	}else{
		alert("That's not a door, genius.")
	}
}

prizeDoor(1);
prizeDoor(2);
prizeDoor(4);
prizeDoor(3);











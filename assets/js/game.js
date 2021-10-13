var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}


function fight(enemyNames) {
    window.alert("Welcome to Robot Gladiators!");
}



var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {

//subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
enemyHealth = enemyHealth - playerAttack;
//log a resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
);

//check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyNames + " has died!");
}
else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
}
//subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
playerHealth = playerHealth - enemyAttack;
//log a resulting message to the console so we know that it worked.
console.log(
    enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

//check player's health
if (playerName <= 0) {
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
//if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you want to quit?");

if (confirmSkip) {
    window.alert(playerName + " has chosen to skip the fight. Goodbye!");
    playerMoney = playerMoney - 2;
} else {
    fight();
    }
} 
// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots

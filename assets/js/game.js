var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  }
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {
    // Alert players that they are starting the round
    while(enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    }

if (promptFight === "skip" || promptFight === "SKIP") {
    var ConfirmSkip = window.confirm("Are you sure you'd like to quit?");
{     if (ConfirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney)
      break;

      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
      );
      
      if (enemyHealth <= 0) {
        window.alert(enemyNames + " has died!");    
        playerMoney = playerMoney + 20;

        break;
      }

    } else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
      }
    
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
  
        }


// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {

      break;

    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }

      }
          else fight();
      }}
    
else {
        window.alert("You need to choose a valid option. Try again!");
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames [i];
    enemyHealth = 50;
    fight( pickedEnemyName)
  }
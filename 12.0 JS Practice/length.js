var messageE="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

var message=prompt("write something");
var under140Messages=message.slice(0,140);
var numberCharacters=messageE.length 
var numberLeft=280-messageE.length
console.log("You have used "+numberCharacters+" words. There are "+numberLeft+" from 280 words remaining.")



console.log(message.slice(0,140))
console.log("you can only use 140 characters and your message will be: " + message.slice(0,140))
alert("YOUR MESSAGE SHOULD BE UNDER 140 CHARACTERS: "+ under140Messages)
//
var name=prompt('what is your name:')
alert(name.toUpperCase())
 alert(name.toLowerCase())
 alert(name.slice(0,6))
//change the first letter to uppercase
 var name=prompt('what is your name:');

 var upper=name.slice(0,1);
     upper=upper.toUpperCase();
 var lower=name.slice(1,);
     lower=lower.toLocaleLowerCase();
     name=upper+lower;
 
 alert("Hello "+upper+lower)

 //dog age to human age 

    var dogAge=prompt("what is your dog age?");
    var humanAge=(dogAge-2)*4+21;
    alert("The human age of your dog would be "+humanAge+" years old")

// Karel IDE https://stanford.edu/~cpiech/karel/ide.html
    function main(){
        beepersRight();
        goUpTurnLeft();
        beepersLeft();
        goUpTurnRight();
           beepersRight();
        goUpTurnLeft();
        beepersLeft();
        goUpTurnRight();
           beepersRight();
     }
      
     function goUpTurnRight() {
        turnRight();
        move();
        turnRight();
     }
      
     function goUpTurnLeft() {
        turnLeft();
        move();
        turnLeft();
     }
      
     function beepersRight() {
        putBeeper();
        move();
        move();
        putBeeper();
        move();
        move();
        putBeeper();  
     }
      
     function beepersLeft() {
        move();
        putBeeper();
        move();
        move();
        putBeeper();
        move();
     }


// LESSON 93
function getMilk() {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

//   CALCULATE THE NUMBER OF BOTTLES OF MILK
function getMilk(money) {
    var mbetje=money%1.5
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("you can only buy"+(money-mbetje)/1.5+" bottles of milk");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  
  var mbetje=money%1.5
  money=money-mbetje
  getMilk(money=prompt("amount of money you have"))


//how much time we have left till age 90 calculator
function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        var days=(90*365)-(age*365)
        var weeks=(90*52)-(age*52)
        var months=(90*12)-(age*12)
        console.log("You have "+days+" days, "+weeks+" weeks, and "+months+" months left.")
        
        
        
        
        
    /*************Don't change the code below**********/
    }
    
    lifeInWeeks(age=prompt("Insert your age"))


    // getting a value out of a function



function getMilk() {
    return money%1.5
  }
getMilk(prompt("amount of money you have"))

var change=getMilk();
alert("your change will be "+change+"$")



money=prompt("amount of money you have")

function getMilk(money) {
  console.log("you can only buy"+calcBottles(money/1.5) +" bottles of milk");
    return money%1.5
  }
getMilk(money)

var change=getMilk(money);
alert("your change will be "+change+"$")
var costBottle=1.5

function calcBottles(money,costBottle){
  var numberBottles=Math.floor(money/costBottle);
  return numberBottles
}

console.log(calcBottles(money,costBottle))
calcBottles(6,costBottle)

// bmi calculator

var wheight=prompt("Insert your weight");
var height=prompt("Insert your height in m");
function bmiCalc(wheight,height){
    
    var bmi=Math.floor(wheight/(height*height));
    return bmi;
    
    
}

console.log(bmiCalc(wheight,height))
  
    
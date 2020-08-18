/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 23;

if (votingAge > 18) {
    console.log(true);
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let myVar = 3;
const myVar2 = 8;


if (myVar < myVar2) {
    myVar = myVar + myVar2;
} else {
    myVar = myVar2;
};

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number("1999")



//Task d: Write a function to multiply a*b 

function multiply(a,b) {
    return (a*b);
}



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(age) {
    return (age * 7);
}



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

function dogFeeder(weight,age) {
    if (age >= 1) {
        if (weight <= 5) {
            return (weight * 0.05);
        } else if (weight > 5 && weight <= 10) {
            return (weight * 0.04);
        } else if (weight > 10 && weight <= 15) {
            return (weight * 0.03);
        } else if (weight > 15) {
            return (weight * 0.02)
        }
        } else {
        if (age > 2/12 && age <= 4/12) {
            return (weight * 0.10);
        } else if (age > 4/12 && age <= 7/12){
            return(weight * 0.05);
        } else if (age > 7/12 && age < 1){
            return(weight * 0.04);
        }
        }
}

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

// if choice is equal to player 2 then tied
// if choice is 1 and player2 is 2 then lost
// if choice is 1 and player2 is 3 then won
// if choice is 2 and player2 is 1 then won
// if choice is 2 and player2 is 3 then lost
// if choice is 3 and player2 is 2 then won
// if choice is 3 and player2 is 1 then lost


const rock = 1;
const paper = 2;
const scissors = 3;
const won = "You won!"
const lost = "You lost!"
const tied = "You tied, play again!"

function rockPaperScissors(choice) {
  player2 = Math.round(Math.random()*3);
  if (choice === player2){
    return (tied);
  } 
  else if (player2 - choice === 1) {
    return (lost);
  } 
  else if (player2 - choice === 2) {
    return (won);
  }
  else if (player2 - choice === -1) {
    return (won);
  }
  else if (player2 - choice === -2) {
    return (lost);
  }
};


  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(km) {
    return (km / 1.60934);
  };

//OR

const kmToMiles = (km) => (km/1.60934);
  

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
const ftToCM = (ft) => (ft*30.48);



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

const part1 = " bottles of soda on the wall, ";
const part2 = " bottles of soda, take one down pass it around ";
const part3 = " bottles of soda on the wall";


function annoyingSong(times) {
  for(i = times; i>0; i--){
    console.log(i + part1 + i + part2 + (i-1) + part3)
  }
};


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function letterGrade(mark) {
    if (mark > 90) {
      return "A";
    } else if (mark < 90 && mark >= 80) {
      return "B";
    } else if (mark >= 70 && mark < 80) {
      return "C";
    } else if (mark >= 60 && mark < 70) {
      return "D";
    } else if (mark < 60) {
      return "F";
    }
  };

  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object






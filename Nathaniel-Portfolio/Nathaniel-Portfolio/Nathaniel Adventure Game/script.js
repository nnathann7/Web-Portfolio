let storyOpening = document.querySelector(".story-opening");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let continueButton = document.querySelector(".continue-button");
let continueOne = document.querySelector("#continue-one");
let continueTwo = document.querySelector("#continue-two");
let optionThree = document.querySelector(".screen-one-option1");
let optionFour = document.querySelector(".screen-one-option2");

optionOne.onclick=function(){
	storyOpening.style.display = "none";
	optionOneScreen.style.display = "block";
	continueOne.style.display="block";
	optionOne.style.display="none";
	optionTwo.style.display="none";
}	

optionTwo.onclick=function(){
	storyOpening.style.display ="none";
	optionTwoScreen.style.display ="block";
	optionOneScreen.style.display ="none";
	optionOne.style.display="none";
	optionTwo.style.display="none";
}
 
optionTwoEnd.onclick=function(){
	storyOpening.style.display ="none";
	optionTwoScreen.style.display ="block";
	optionOneScreen.style.display ="none";
	optionOne.style.display="none";
	optionTwo.style.display="none";
}

optionOneEnd.onclick=function(){
	storyOpening.style.display ="none";
	optionTwoScreen.style.display ="block";
	optionOneScreen.style.display ="none";
	optionOne.style.display="none";
	optionTwo.style.display="none";
}

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){



INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


// JavaScript Document
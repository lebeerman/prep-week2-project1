/*
=======================================================
DAN BEERMAN

** Week 1 - Project 2 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 1. Connect the main.js document to the HTML page.
//    Then Update the Text to Green by adding the .status-good class.



// When the JS is connected properly, the following code will update the status message.
document.getElementById("q1").innerHTML = "JS Page Connected Properly!";
document.getElementById("q1").classList.add("status-good");



// 2. Declare a new variable called 'feelings',
//    Then store a string with a word that describes
//    how well you feel about this course material.
//    Then display that string within the HTML page.
var feelings = "Fun!";
// 'Modern' browsers (IE8+, use CSS-style selectors) -- Questions - where are the right places to put script tags in HTML?
document.getElementById("q2").innerHTML = feelings;




// 3. Declare a new variable called 'name',
//    store your name within it, and then
//    create a 'message' variable with a greeting,
//    concat the message and name variables
//    and then display it within the HTML page.
var name = "Beerman";
var message = ", you seem like a great dude, bro.";
name += message;
document.getElementById("q3").innerHTML = name;





// 4. Declare two variables with number values.
//    Add, subtract, multiply and divide them.
//    Display the values of each within the HTML page.
//    Then label these values the best you can.
var a = 5;
var b = 19;
document.getElementById("q4intro").innerHTML = "a = 5, b = 19. The following are results of basic opperations. "
document.getElementById("q4a").innerHTML = "Addition: " + (a + b);
document.getElementById("q4b").innerHTML = "Subtraction: " + (a - b);
document.getElementById("q4c").innerHTML = "Multiplication: " + (a * b);
document.getElementById("q4d").innerHTML = "Division: " + (a / b);





// 5. Declare two variables with string values.
//    Create a third variable that concatenates the two strings
//    that also places the appropriate space between the strings.
//    Display the value of the third variable within the HTML page.
var a = "non sum";
var b = "qualis eram";
var c = a + " "+ b;
document.getElementById("q5").innerHTML = c;






// 6. Add, subract, multiply and divide the strings '5' and '3'.
//    Observe the results and brieftly explain the results within the HTML page.
var a = '5';
var b = '3';
document.getElementById("q6a").innerHTML = "Addition: " + (a + b);
document.getElementById("q6b").innerHTML = "Subtraction: " + (a - b);
document.getElementById("q6c").innerHTML = "Multiplication: " + (a * b);
document.getElementById("q6d").innerHTML = "Division: " + (a / b);
document.getElementById("q6note").innerHTML = "Type Coersion - javascript is treating the characters as ints and performing the pre-programed math functions and returning the results";






// 7. When a button is clicked, add content into the ID "q7".
document.getElementById("callAlert").onclick = function() {q7onClick()};
function q7onClick() {
    document.getElementById("q7").innerHTML = "GREAT JOB!";
}






// 8. Collect a number value from the user and when a button is clicked,
//    then double user's answer and display that value into the HTML page.


document.getElementById("callDoubleNum").addEventListener("click", function(){
  document.getElementById("q8").innerHTML = document.getElementById("doubleNum").value * 2;
});









// 9. Set the variable 'num1' to 5.
//    Set the variable 'num2' to 10.
//    Test to see if num1 is greater than num2.
//    If so, output to the HTML page: Yes, the value of num1 is greater than num2
//    If not, output to the HTML page: No, the value of num1 is not greater than num2
var num1 = 5;
var num2 = 10;
if (num1 > num2) {
  document.getElementById("q9").innerHTML = "Yes, the value of num1 is greater than num2."
}
else {
  document.getElementById("q9").innerHTML = "No, the value of num1 is not greater than num2."
}





// 10. Set the variable 'score' to a number between 1-100.
//    Create the following conditions:
//    If the score is above 90, output to the HTML page "Great job".
//    If the score is between 60 and 89, output to the HTML page "Nice work, keep practicing".
//    If the score is below 59, output to the HTML page "Very bad: study more and retake the test".
//    Test to make sure each condition is met properly.
var score = 90;
if (score >= 90) {
  document.getElementById("q10").innerHTML = "Great job";
}
else if (60 <= score < 90) {
  document.getElementById("q10").innerHTML = "Nice work, keep practicing";
}
else if (score < 60) {
  document.getElementById("q10").innerHTML = "Very bad: study more and retake the test";
}







// ADVANCED TRACK

// A. Ask for a user's name, age and city using input fields.
//    In a single command, take the user's answers and display into the HTML page the sentence:
//   "My name is __. I'm __ years old, and I live in __."
// Reach - try putting in an 'onkeyup' event listener so the sentence updates

document.getElementById("Submit").addEventListener("click", function(){
  document.getElementById("qa").innerHTML =
  "My name is " + document.getElementById("name").value +
  ". I'm " + document.getElementById("age").value +
  " years old, and I live in " + document.getElementById("location").value + ".";
});




// B. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
//     Display the result in the HTML page.
function recArea(l,w){
    return l*w;
};
document.getElementById("qb").innerHTML = recArea(2,3);





// C. Collect the use's length and width input to determine the area of a rectangle and display within the HTML page the result.
document.getElementById("Submit2").addEventListener("click", function(){
  document.getElementById("qc").innerHTML =
  "The area = " + recArea(document.getElementById("length").value, document.getElementById("width").value);
});






// D. Have the user enter their name into a textfield. When they click a button, find the length (number of characters) of their name and display the result in the HTML page.
// figure out how this works
document.getElementById("Submit3").addEventListener("click", function(){
  var userName = document.getElementById("fullname").value;
  document.getElementById("qd").innerHTML = document.getElementById("fullname").value + " is " + userName.length + " characters long.";
});






// E. Create a textfield to request a test score between 0-100 from the user.
//    If the score is above 90, display in the HTML a message to tell the user "Great job!".
//    If the score is between 60 and 89, display a message of "Nice work, keep practicing.".
//    If the score is below 59, display a message of "Very bad: study more and retake the test.".
//    You can get fancy by adding CSS styles to each of these displays to change the color, too - Green=Good, Orange=OK, Red=Bad

document.getElementById("sub").addEventListener("click", function(){
  var score = document.getElementById("score").value;
  if (score >= 90) {
    document.getElementById("qe").innerHTML = "Great job!!!";
    document.getElementById("qe").style.backgroundColor = "#98FB98";
    document.getElementById("qe").classList.add("status-good");
  }
  else if ((59 < score) && (score < 90)){
    document.getElementById("qe").innerHTML = "Nice work, keep practicing";
    document.getElementById("qe").style.backgroundColor = "#ffd27f";
    document.getElementById("qe").classList.add("status-ok");
  }
  else {
    document.getElementById("qe").innerHTML = "Very bad: study more and retake the test";
    document.getElementById("qe").style.backgroundColor = "#FA8072";
    document.getElementById("qe").classList.add("status-bad");
  }
});





/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/

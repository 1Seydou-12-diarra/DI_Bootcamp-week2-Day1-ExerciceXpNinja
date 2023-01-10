// Exercice 1 : Évaluation

5 >= 1
// true
0 === 1
// false
    4 <= 1
//   false
    1 != 1
// false
    "A" > "B"
// true

    "B" < "C"
// true
    "a" > "A"
 // true
    "b" < "A"
// false
    true === false
// false
    true != true
// false

    // Exercice 2

      let nombre = prompt("rentrer les nombres à virgules");
      let tab = nombre.split(",");
      let sum =(x,y)  => parseInt(x) + parseInt(y);
      console.log(tab.reduce(sum));   
   

   
/*Exercise 3 : Find Nemo*/

let userSentence = prompt("Entrez une phrase contenant le mot Nemo");

let position = userSentence.search("Nemo");

console.log(`I found Nemo at ${position}`);

/*Exercise 4 : Boom*/

let num = prompt("Please enter a number:");
const result = "boom"
if (num < 2) {
  console.log("boom");
} else if (num % 2 === 0 && num % 5 === 0) {
  console.log("BOOM!".toUpperCase());
} else if (num % 2 === 0) {
  console.log("boom!".toLowerCase());
} else if (num % 5 === 0) {
  console.log("BOOM");
} 
if(num> 2){
  console.log("B" + "o".repeat(num) + "m");
}

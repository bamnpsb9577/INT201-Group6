//Import
import{calGrade,getGrade,yourSubject} from "./Export.js"; 

const myGrade1 = yourSubject("INT 201");
console.log(myGrade1(65));
console.log("---------------------------------------------------")
const myGrade2 = yourSubject("LNG 202");
console.log(myGrade2(74));
console.log("---------------------------------------------------")
const myGrade3 = yourSubject("GEN 231");
console.log(myGrade3(83)); 
console.log("---------------------------------------------------")

/*output :
Subject : INT 201 
Your score : 65 
Your grade : B
---------------------------------------------------
Subject : LNG 202 
Your score : 74 
Your grade : B
---------------------------------------------------
Subject : GEN 231 
Your score : 83 
Your grade : A
---------------------------------------------------
*/


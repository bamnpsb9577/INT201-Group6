//Export
//ใช้ Arguments Parameter
export function calGrade(score){  //รับ Parameter score เพื่อคำนวณเกรด
    if (score <= 100 && score >= 80) { //เงื่อนไขที่นำคะแนนมาคำนวณเพื่อหาเกรด
        return "A";
      } else if (score <= 79 && score >= 60) {
        return "B";
      } else if (score <= 59 && score >= 40) {
        return "C";
      } else if (score <= 39 && score >= 0){
        return "F";
      }else
          return "Error"; //return Error เมื่อไม่ตรงกับเงื่อนไขด้านบน
      
}

//Higher-Order Function
export function getGrade(score,func){ //รับ Parameter score,func
    return func(score); //returnเป็น function ที่ใส่มาตาม parameter
}

//Closures
export function yourSubject(subject){ //รับ Parameter subject 
    function yourGrade(score){ //รับ Parameter score
        return `Subject : ${subject} \nYour score : ${score} \nYour grade : ${getGrade(score,calGrade)}`; 
    }
    return yourGrade; //return function yourGrade
}


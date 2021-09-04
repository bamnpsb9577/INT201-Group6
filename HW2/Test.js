class person{
    constructor(name,QandA){
        this.name = name;
        this.QandA = QandA;
        this.score = 0;
    }
} //สร้าง class person ที่เก็บชื่อ(name) ,คะแนน(score) และ Array ของ object(QandA) ที่ประกอบไปด้วย หมายเลขข้อของคำถามที่เลือกตอบ(youQNum) และคำตอบที่เลือกตอบ(youAns)

let question = [
    {QNumber: 1 ,problem: "2+2=?" ,choice: {a:1 ,b:2 ,c:3 ,d:4} ,answer: 'd'},
    {QNumber: 2 ,problem: "1+11=?" ,choice: {a:9 ,b:10 ,c:11 ,d:12} ,answer: 'c'},
    {QNumber: 3 ,problem: "10+11=?" ,choice: {a:21 ,b:22 ,c:23 ,d:24} ,answer: 'a'},
    {QNumber: 4 ,problem: "3+2=?" ,choice: {a:5 ,b:6 ,c:7 ,d:8} ,answer: 'a'},
    {QNumber: 5 ,problem: "9+7=?" ,choice: {a:14 ,b:15 ,c:16 ,d:17} ,answer: 'd'}
] //สร้าง Array ของ object(question) ที่ประกอบไปด้วย ข้อของคำถาม(qNumber) ,คำถาม(problem) ,ตัวเลือกคำตอบ(choice) และเฉลย(answer)


function findQ(youQNum){
    for(let i = 0; i<question.length; i++){
        if(question[i].QNumber == youQNum){
            return question[i];
        }
    }
} //เป็น function ที่จะรับหมายเลขข้อของคำถามที่เลือกตอบ(youQNum) แล้วจะ return object ของคำถามที่มีเลขนั้นออกไป

function check(player){ //เป็น function ที่จะ check คำตอบของผู้ตอบคำถามพร้อมเพิ่มค่าคะแนน(score) โดยจะใช้ค่าข้อมูลจาก Array ของ object(QandA) ของผู้ตอบคำถาม(player)
    for(let j = 0; j<player.QandA.length; j++){ //วนลูปเข้าไปใน QandA ของผู้ตอบคำถาม
    let matchQ = findQ(player.QandA[j].youQNum); //check ข้อมูลว่าผู้ตอบคำถามเลือกตอบคำถามของข้อไหน เผื่อในกรณีที่ผู้ตอบคำถามตอบแบบไม่เรียงข้อ
    //ตั้งเงื่อนไข check ว่าคำตอบของผู้ตอบคำถามตรงกับเฉลยของข้อนั้นหรือไม่
    if(player.QandA[j].youAns == matchQ.answer){ 
        //หากตรงกันให้ขึ้นข้อความดังนี้
        console.log(`Question ${matchQ.QNumber}: ${matchQ.problem}`)
        console.log(`Choice: \na.${matchQ.choice.a} \nb.${matchQ.choice.b} \nc.${matchQ.choice.c} \nd.${matchQ.choice.d}`)
        console.log(`Your Answer: ${player.QandA[j].youAns} \n${player.QandA[j].youAns}.${matchQ.choice[(player.QandA[j].youAns)]} is corrected!\n`)
        player.score++;
    }
    else{ 
        //และหากไม่ตรงกันก็ให้ขึ้นข้อความดังนี้
        console.log(`Question ${matchQ.QNumber}: ${matchQ.problem}`)
        console.log(`Choice: \na.${matchQ.choice.a} \nb.${matchQ.choice.b} \nc.${matchQ.choice.c} \nd.${matchQ.choice.d}`)
        console.log(`Your Answer: ${player.QandA[j].youAns} \n${matchQ.choice[(player.QandA[j].youAns)]} is incorrected! \nThe correct answer is ${matchQ.answer}.${matchQ.choice[(matchQ.answer)]}\n`)
    }
    }
}

//สร้าง object ข้อมูลของผู้ตอบคำถาม ประกอบไปด้วยชื่อของผู้ตอบคำถาม(name) และ Array ของ object(QandA) ทีมีข้อของคำถามที่เลือกตอบ(youQNum) และคำตอบที่เลือกตอบ(youAns)
let person1 = new person("Peter",
[{youQNum: 1,youAns: 'd'},
 {youQNum: 2,youAns: 'b'},
 {youQNum: 3,youAns: 'a'}])

let person2 = new person("Tony",
[{youQNum: 2,youAns: 'd'},
 {youQNum: 3,youAns: 'c'},
 {youQNum: 4,youAns: 'b'},
 {youQNum: 5,youAns: 'd'}])

let person3 = new person("Steve",
[{youQNum: 1,youAns: 'd'},
 {youQNum: 2,youAns: 'c'},
 {youQNum: 3,youAns: 'a'},
 {youQNum: 4,youAns: 'a'},
 {youQNum: 5,youAns: 'd'}])
 
function test(person){ //จัดรูปแบบการขึ้นข้อความ
console.log("Name: " + person.name + //แสดงชื่อของผู้ตอบคำถาม
            "\nQuestions answered: " + person.QandA.length + "\\" + question.length + //แสดงจำนวนข้อที่เลือกตอบ
            "\nScore: " + person.score + "\\" + question.length); //แสดงข้อที่ทำถูก
console.log("\n-----------------------\n");
}

//Test
check(person1);
test(person1);

check(person2);
test(person2);

check(person3);
test(person3);
let Fname: string = "Natthawut";
let lname: string = "Thup-on";
let mark: number[] = [80, 75, 65];
let coures: string[] = ["Database","OOP","Web"];
let pass: boolean = true;

console.log("Hello %s %s",Fname,lname);
console.log("ลงทะเบียนเรียนวิชา", coures);
console.log("ได้คะแนน", mark);
console.log("คุณสอบผ่าน", pass);

console.log("'คุณสอบได้ %d คะแนน วิชา %s", mark[0],coures[0]);

let mark1: number=75;
let mark2: number=80;
let mark3: number=65;
let total: number =mark[0]+mark[1]+mark[2];
console.log("คะแนนรวม",total);

let average: number=total/3;
console.log("ผลเฉลี่ย", average);
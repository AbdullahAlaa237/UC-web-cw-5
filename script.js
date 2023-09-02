alert("hello, my name is abdullah");
let grade = prompt("ur grade");

let outputColor = "color:green; font-size:20px;";

console.log("\x1b[36m%s\x1b[0m", grade);

if (grade >= 90) {
  alert("لقد حصلت على امتياز");
} else if (grade >= 80) {
  alert("لقد حصلت على جيد جدا");
} else if (grade >= 70) {
  alert("لقد حصلت على جيد");
} else if (grade >= 60) {
  alert("لقد حصلت على مقبول");
} else if (grade >= 50) {
  alert("لقد حصلت على ضعيف");
} else {
  alert("راسسب");
}

//جافاسكريبت وليست جافا//

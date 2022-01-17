console.log("GPA Calculation Program");
console.log("By Nattapat Sinra 6135512027");
console.log("\n");
let loop;
let score;
let stdin = process.openStdin()

console.log("Enter number of subjects and use (,) Enter score  : ");
stdin.addListener("data", (d) => {
  const myArray = d.toString().split(",");
  loop = myArray[0];
    for(let i=1;i<=loop;i++){
    score = myArray[i];
    if(score >= 80) {
    console.log("Subjects : " + i + " =" + " Grade A"  );	
    }
    else if(score >= 70 && score <80){
    console.log("Subjects : " + i + " =" + " Grade B"  );	
    }
    else if(score >= 60 && score <70){
    console.log("Subjects : " + i + " =" + " Grade C"  );	
    }
    else if(score >= 50 && score <60){
    console.log("Subjects : " + i + " =" + " Grade D"  );	
    }
    else if(score < 50){
    console.log("Subjects : " + i + " =" + " Grade E"  );	
    }
    }
    stdin.end()
 });
console.log("Multiplication Table Program");
console.log("By Nattapat Sinra 6135512027");
let stdin = process.openStdin();
console.log("Enter Multiplication : "); 
stdin.addListener("data", (d) => {
    let x =  d.toString().trim();
    console.log("Multiplication Table " + x);
    for(let i=1;i<=12;i++){
    console.log(x + " x " + i + " = " + (x * i));
    }
    console.log("\n");
    stdin.end();
});
console.log("Word Detection Program ");
console.log("By Nattapat Sinra 6135512027");
console.log("\n") ;
let stdin = process.openStdin();
let num     = 0;
console.log("Enter Your Word : ");
stdin.addListener("data", (d) => {
    let x =  d.toString().trim();
    for(i=0;i<x.length;i++){
        if (x.charAt(i) == 'A'){
        num = num + 1;
        }
    }
    console.log("Detection A = " + num);
    num = 0;
    stdin.end();
});



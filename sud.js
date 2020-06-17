function sudoku(myArg) {

var fs = require('fs');
var sud = myArg[0];

var sudArr = fs.readFileSync(sud).toString().split("\n");
for(i in sudArr) {
    console.log(sudArr[i]);
}

sumuArr = [];
for(i in sudArr) {
    sumuArr.push(sudArr[i].split(""));
}
console.log(sumuArr);

for(i in sumuArr) {
    if ((sumuArr[i].includes('_'))) {  
        str = 45;
        for(a in sumuArr[i]){
            if (sumuArr[i][a] !== "_" && sumuArr[i][a] !== "|"){
                str = str - (sumuArr[i][a]);
            }
        }  
        sumuArr[i] = sumuArr[i].join("").replace("_", str);
        console.log(sumuArr[i]);
    }
    else {
        sumuArr[i] = sumuArr[i].join("");
        console.log(sumuArr[i]);  
    }
    
}

console.log("Affichage de la solution:" + "\n" + sumuArr.join("\n"));

};

var myArg = process.argv.slice(2);
 sudoku(myArg) ;

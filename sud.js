function sudoku(myArg) {

var fs = require('fs');
var sud = myArg[0];
var sudArr = fs.readFileSync(sud).toString().split("\n");
sumuArr = [];
for(i in sudArr) {
    sumuArr.push(sudArr[i].split(""));
}

for(i in sumuArr) {
    numArr = [];
    str = 45;
        for(a in sumuArr[i]){
            
            if (sumuArr[i][a] !== "_" && sumuArr[i][a] !== "|"){
                numArr.push(sumuArr[i][a]); 
                str = str - (sumuArr[i][a]);   
            }
            
        }  
        if (numArr.length === 8){

            sumuArr[i] = sumuArr[i].join("").replace("_", str).split("");
        }
                               
}

console.log("Affichage après première boucle horizontale:" + "\n");
for (i in sumuArr) {
    console.log(sumuArr[i].join(""));
}


for (i in sumuArr){
    strV = 45;

    for (a in sumuArr[i]){
        if (sumuArr[i][a] == ("_")){

            r = sumuArr.indexOf(sumuArr[i]);
            console.log("la rangée " + sumuArr[i] + " est la numéro: " + r);
            c = sumuArr[i].indexOf(sumuArr[i][a]);
            console.log("la colonne du chiffre manquant est la numéro: " + c);
            
            for(i in sumuArr){

                if (sumuArr[i][c] !== "_" && sumuArr[i][c] !== "-"){
            
                    strV = strV - (sumuArr[i][c]); 
                    
                } 

            }  
            console.log("le chiffre manquant est le: " + strV);

            sumuArr[r] = sumuArr[r].join("").replace("_", strV).split("");
        }else{}
            
    }

}

for (i in sumuArr){
    strV = 45;

    for (a in sumuArr[i]){
        if (sumuArr[i][a] == ("_")){

            r = sumuArr.indexOf(sumuArr[i]);
            console.log("la rangée " + sumuArr[i] + " est la numéro: " + r);
            c = sumuArr[i].indexOf(sumuArr[i][a]);
            console.log("la colonne du chiffre manquant est la numéro: " + c);
            
            for(i in sumuArr){

                if (sumuArr[i][c] !== "_" && sumuArr[i][c] !== "-"){
            
                    strV = strV - (sumuArr[i][c]); 
                    
                } 

            }  
            console.log("le chiffre manquant est le: " + strV);

            sumuArr[r] = sumuArr[r].join("").replace("_", strV).split("");
        }else{}
            
    }

}



console.log("\n" + "Affichage de la solution:" + "\n");
for (i in sumuArr) {
    console.log(sumuArr[i].join(""));
}

};

var myArg = process.argv.slice(2);
sudoku(myArg) ;

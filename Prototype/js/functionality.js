var  Area = "Area,Population,Household,LocationID\n27.08 km²,119462 (4411.65 per km²),32195 (1188.94 per km²),Parrow\n38.71 km²,391749 (10120.31 per km²),118810 (3069.30 per km²) ,Khayelitsha\n3.09 km²,52401 (16957.67 per km²),17402 (5631.52 per km²) ,Langa\n400.28 km,433688 (1083.47 per km²),138280 (345.46 per km²) ,Cape Town\n28.38 km²,17900 (630.82 per km²),5963 (210.14 per km²) ,Hout Bay"

var gender = "Gender,People,Percentage,LocationID\nFemale,62176,52.05%,Parow\nMale,57286,47.95%,Parow\nFemale,200187,51.10%,Khayelitsha\nMale,191562,48.90%,Khayelitsha\nFemale,26414,50.41%,Langa\nMale,25987,49.59%,Langa\nFemale,224607,51.79%,Cape Town\nMale,209082,48.21%,Cape Town\nFemale,9296,51.93%,Hout Bay\nMale,8604,48.07%,Hout Bay"

var languages = "First language,People,Percentage,Location ID\nAfrikaans,76743,65.61%,Parow\nEnglish,31338,26.79%,Parow\nOther,3818,3.26%,Parow\nisiXhosa,2719,2.32%,Parow\nSetswana,586,0.50%,Parow\nSesotho,507,0.43%,Parow\nisiZulu,371,0.32%,Parow\nisiNdebele,240,0.21%,Parow\nSign language,207,0.18%,Parow\nSepedi,147,0.13%,Parow\nXitsonga,119,0.10%,Parow\nTshivenda,110,0.09%,Parow\nSiSwati,67,0.06%,Parow\nNot applicable,2489,,Parow\nisiXhosa,354164,90.54%,Khayelitsha\nEnglish,12608,3.22%,Khayelitsha\nSesotho,5326,1.36%,Khayelitsha\nOther,5138,1.31%,Khayelitsha\nAfrikaans,4138,1.06%,Khayelitsha\nSign language,3357,0.86%,Khayelitsha\nisiZulu,2418,0.62%,Khayelitsha\nSepedi,1145,0.29%,Khayelitsha\nisiNdebele,1046,0.27%,Khayelitsha\nSetswana,904,0.23%,Khayelitsha\nXitsonga,481,0.12%,Khayelitsha\nTshivenda,278,0.07%,Khayelitsha\nSiSwati,155,0.04%,Khayelitsha\nNot applicable,591,,Khayelitsha\nisiXhosa,48024,91.99%,Langa\nEnglish,1296,2.48%,Langa\nOther,689,1.32%,Langa\nAfrikaans,449,0.86%,Langa\nisiZulu,404,0.77%,Langa\nSesotho,389,0.75%,Langa\nSign language,388,0.74%,Langa\nXitsonga,136,0.26%,Langa\nSepedi,131,0.25%,Langa\nSetswana,127,0.24%,Langa\nisiNdebele,117,0.22%,Langa\nTshivenda,36,0.07%,Langa\nSiSwati,19,0.04%,Langa\nNot applicable,198,,Langa\nAfrikaans,830,54.25%,City of Cape Town\nEnglish,462,30.20%,City of Cape Town\nisiXhosa,142,9.28%,City of Cape Town\nOther,64,4.18%,City of Cape Town\nSesotho,12,0.78%,City of Cape Town\nisiZulu,8,0.52%,City of Cape Town\nSetswana,6,0.39%,City of Cape Town\nisiNdebele,4,0.26%,City of Cape Town\nXitsonga,2,0.13%,City of Cape Town\nSign language,2,0.13%,City of Cape Town\nNot applicable,30,,City of Cape Town\nEnglish,10591,59.70%,Hout Bay\nAfrikaans,5842,32.93%,Hout Bay\nOther,738,4.16%,Hout Bay\nisiXhosa,224,1.26%,Hout Bay\nisiZulu,67,0.38%,Hout Bay\nisiNdebele,65,0.37%,Hout Bay\nSetswana,64,0.36%,Hout Bay\nSesotho,61,0.34%,Hout Bay\nSign language,36,0.20%,Hout Bay\nTshivenda,17,0.10%,Hout Bay\nSepedi,14,0.08%,Hout Bay\nXitsonga,12,0.07%,Hout Bay\nSiSwati,8,0.05%,Hout Bay\nNot applicable,160,,Hout Bay"

var populationGroup = "Population group,People,Percentage,LocationID\nColoured,69817,58.44%,Parow\nWhite,30408,25.45%,Parow\nBlack African,11494,9.62%,Parow\nIndian or Asian,5134,4.30%,Parow\nOther,2608,2.18%,Parow\nBlack African,386359,98.62%,Khayelitsha\nOther,2477,0.63%,Khayelitsha\nColoured,2315,0.59%,Khayelitsha\nWhite,327,0.08%,Khayelitsha\nIndian or Asian,272,0.07%,Khayelitsha\nBlack African,51939,99.12%,Langa\nColoured,200,0.38%,Langa\nOther,184,0.35%,Langa\nIndian or Asian,40,0.08%,Langa\nWhite,38,0.07%,Langa\nColoured,1585286,42.39%,Cape Town\nWhite,585831,15.66%,Cape Town\nBlack African,1444939,38.63%,Cape Town\nOther,72184,1.93%,Cape Town\nIndian or Asian,51786,1.38%,Cape Town\nWhite,10274,57.40%,Hout Bay\nColoured,5779,32.28%,Hout Bay\nBlack African,1216,6.79%,Hout Bay\nOther,495,2.77%,Hout Bay\nIndian or Asian,135,0.75%,Hout Bay"

function convertorString(str){
    var arr = str.split('\n');
    var storeObj = [];
    var headers = arr[0].split(',');
    for(var i = 1; i < arr.length; i++){
        var data = arr[i].split(',');
        var obj = {};
        for(var j=0; j< data.length; j++){
            obj[headers[j].trim()] = data[j].trim();
        }
        storeObj.push(obj);
    }
    return storeObj;
}
console.log(JSON.stringify(convertorString(Area)));
console.log(JSON.stringify(convertorString(gender)));
console.log(JSON.stringify(convertorString(languages)));
console.log(JSON.stringify(convertorString(populationGroup)));
let inputValidation = (num) => {
    try {
        if(num == "") throw "kosong";
        if(isNaN(num) || typeof(num) == "boolean") throw "bukan Angka";
        num = Number(num);
    } catch (error) {
      console.log(`input ${error}`)
    }
  }

let printSegitiga = (num) => {
    inputValidation(num);
    let segitiga = "";
    if(num == true) {num = 0};

    for (let i = num; i >= 1; i--){
        for (let j = 1; j <= i; j++){
            segitiga += `${j} `;
        }
        segitiga += "\n"
    }
    return segitiga;
}

console.log(printSegitiga("5"));
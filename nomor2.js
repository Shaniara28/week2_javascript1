let rataRata;
let grade;
let jumlahNilai;

let inputValidation = (mtk, indonesia, inggris, ipa) => {
    try {
        if(mtk == "" || indonesia == "" || inggris == "" || ipa == "") throw "ada yang kosong";
        if(isNaN(mtk) || isNaN(indonesia) || isNaN(inggris) || isNaN(ipa) || 
        typeof(mtk) !== "number" || typeof(indonesia) !== "number" || typeof(inggris) !== "number" || typeof(ipa) !== "number") throw "bukan Angka";
    } catch (error) {
      console.log(`input ${error}`)
    } 
  }

let hitung = (mtk, indonesia, inggris, ipa) => {
    inputValidation(mtk, indonesia, inggris, ipa);

    jumlahNilai = mtk + indonesia + inggris + ipa;
    rataRata = jumlahNilai/4;

    return rataRata;
}

let errorHandling = (mtk, indonesia, inggris, ipa) => {
    if (rataRata > 100 || rataRata < 0 || mtk < 0 || indonesia < 0 || inggris < 0 || ipa < 0){
        rataRata = "Nilai harus bernilai 0 sampai 100";
        grade = "Nilai harus bernialai 0 sampai 100";
    } else if (typeof(mtk) !== "number" || typeof(indonesia) !== "number" || typeof(inggris) !== "number" || typeof(ipa) !== "number"){
        rataRata = "Nilai salah";
        grade = "Nilai salah";
    } 
}

let average = () => {
    if (rataRata >= 90) {
        grade = "A";
    }
    else if (rataRata >= 80){
        grade = "B";
    }
    else if (rataRata >= 70){
        grade = "C";
    }
    else if (rataRata >= 60){
        grade = "D";
    }
    else if (rataRata <= 59){
        grade = "E";
    } 
}

let printNilai = (mtk, indonesia, inggris, ipa) => {
    hitung(mtk, indonesia, inggris, ipa);
    errorHandling(mtk, indonesia, inggris, ipa);
    average();

    return `Rata-Rata = ${rataRata} \nGrade = ${grade}`;
}

console.log(printNilai(100,100,100,90));
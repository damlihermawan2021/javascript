const Angka = [1,2,3,4,5,6,7,8,9];

// Filter mencari angka >= 3 

// const newAngka = [];
// for(let i = 0; i < Angka.length; i++){
//     // for
//     if (Angka[i] >= 3 ){
//     newAngka.push(Angka[i]);
//     }
// }
// console.log(newAngka);

// menggunakan Function Filter 

// const newAngka = Angka.filter(a => a >= 3
// );
// console.log(newAngka);

// Map

// const newAngka = []
//     for (let i = 0 ; Angka.length ; i++){
//         newAngka.push(Angka[i]);
//     }
//     console.log(newAngka);

const newAngka = Angka.map(a => a * 2);
console.log(newAngka); 
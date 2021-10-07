// for..of

// for biasa
// pakai Array
// const mhs = ['Sandi','Galang','Rudi'];
//     for (let i = 0; i< mhs.length; i++){
//         console.log(mhs[i]);
//     }

// kita juga bisa pakai forEach , forEach itu method yang ada pada prototype Array
// mhs.forEach(m => console.log(m));

// for..of
// for (const m of mhs){
//     console.log(m);
// }

// // string

// const nama = 'damli hermawan';

// for (const n of nama){
//     console.log(n);
// }

// const mhs = ['Sandi','Galang','Rudi'];
// mhs.forEach((m,i)=>{
//     console.log(`${m} adalah mahasiswa ke -${i + 1}`);
// });

// for (const [i,m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke -${i + 1}`);
// }

// // NodeList
// const liNama = document.querySelectorAll('.nama');
// // liNama.forEach(n=> console.log(n.innerHTML));

// for(const n of liNama){
//     console.log(n);
// }

// arguments

// function jumlahkanAngka(){
//     let jumlah = 0;
//     for (a of arguments){
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1,2,3,4,5));

const mhs = {
    nama : 'damli hermawan',
    kelas : 'IF2',
    email : 'damlihermawan09@gmail.com'
}

for (m in mhs){
    console.log(mhs[m]);
}
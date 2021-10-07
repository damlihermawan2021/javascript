// Destructring

// function penjumlahanPerkalian(a,b){
//     return [a + b , a * b];
// }
// tanpa desctructring
// const jumlah = penjumlahanPerkalian(2,3)[0];
// const perkalian = penjumlahanPerkalian(2,3)[1];
// console.log(jumlah);

// const [jumlah,kali] = penjumlahanPerkalian(2,3);
// console.log(jumlah);
// console.log(kali);

// contoh pakai Array Destructuring

// function kalkulasi (a,b){
//     return [a + b, a - b, a * b, a / b];
// }
// // poisis array harus berurutan 
// const [kurang, tambah, kali, bagi] = kalkulasi(2,3);
// console.log(tambah);

// function kalkulasi menggunakan Object
// function kalkulasi (a,b){
//     return {
//         tambah : a + b,
//         kurang : a - b,
//         kali   : a * b,
//         bagi   : a / b
//     }
// }

// const { kurang, tambah, kali, bagi} = kalkulasi(2,3);
// console.log(tambah);

// detructuring functions argument

// const mhs1  = {
//     nama : 'damli hermawan',
//     umur : 25,
//     email : 'damlihermawan09@gmail.com' 
// }

// tanpa destructuring
// function cetakMhs (mhs){
//     return `Halo nama saya ${mhs.nama} dan saya berumur ${mhs.umur} tahun`;
// }

// console.log(cetakMhs(mhs1));

// pakai desctructuring

// function cetakMhs ({nama, umur}){
//     return `Halo nama saya ${nama} dan saya berumur ${umur} tahun`;
// }
//     console.log(cetakMhs(mhs1));

// contoh kasus lain 

const mhs1  = {
    nama : 'damli hermawan',
    umur : 25,
    email : 'damlihermawan09@gmail.com',
    nilai : {
        tugas : 75,
        uts : 80,
        uas : 90
    }
}

function cetakMhs ({nama, umur,nilai : {tugas,uts,uas}}){
    return `Halo nama saya ${nama} dan saya berumur ${umur} tahun. nilai tugas saya ${tugas}`;
}
    console.log(cetakMhs(mhs1));

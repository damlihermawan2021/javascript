// destructuring variable /assigments

// destructuring Array

const perkenalan = ['halo','nama','saya','damli hermawan'];

// const [salam, satu, dua, nama] = perkenalan;
// console.log(salam);
// console.log(satu);
// console.log(dua);
// console.log(nama);

// skipping variable
// const [salam, , , nama] = perkenalan;
// console.log(salam, nama);

// swap items

// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba(){
//     return [1,2];
// }
// const [a,b] = coba();
// console.log(b);

// rest parameter
// const [a, ...values] = [1,2,3,4,5,6];
// console.log(values[2]);

// destecturing object

// const mhs = {
//     nama : 'damli hermawan',
//     umur : 25 ,
// }
// const {nama , umur} = mhs;
// console.log (nama);

// Assigment tanpa deklarasi object

// ({nama,umur} = {nama : 'damli hermawan',umur : 25 });
// console.log(umur);

// Assign ke variabel baru
// const mhs = {
//         nama : 'damli hermawan',
//         umur : 25 ,
//     }
//     const {nama : n, umur} = mhs;
//     console.log (n);

// memberikan default value
// const mhs = {
//     nama : 'damli hermawan',
//             umur : 25 ,
//             email : 'damli@gmail.com'  
//         }
//         const {nama : n, umur:u, email='email@default.com'} = mhs;
//         console.log (email);    

// memberi nilai default + assign ke variabel baru
// const mhs = {
//     nama : 'damli hermawan',
//             umur : 25 ,
//             email : 'damli@gmail.com'  
//         }
//         const {nama : n, umur:u, email:e ='email@default.com'} = mhs;
//         console.log (e);    
// rest parameter
// const mhs = {
//     nama : 'damli hermawan',
//         umur : 25 ,
//         email : 'damli@gmail.com'  
//     }
//         const {nama, ...value} = mhs;
//         console.log (value);    


// mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
        id : 123,
        nama : 'damli hermawan',
        umur : 25 ,
        email : 'damli@gmail.com'  
    }
function getIdMhs({id}){
   return id;
}
console.log(getIdMhs(mhs));
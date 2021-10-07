// callback

// ini synchronous callback
// function halo(nama){
//     alert(`halo , ${nama}`);
// }

// function tampilkanPesan(callback){
//     const nama = prompt('Masukan nama : ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`halo ${nama}`));

// Syncrhonous 

// const mhs = [
// {
//     "nama" : "damli hermawan",
//     "nim"  : "10114047",
//     "kelas": "IF-2",
//     "jurusan": "Teknik Informatika",
//     "email": "damlihermawan09@gmail.com",
//     "idDosenwali" : 1

// },
// {
//     "nama" : "Krisna Pamadya",
//     "nim"  : "10114048",
//     "kelas": "IF-1",
//     "jurusan": "Teknik Informatika",
//     "email": "PenaBamboe@gmail.com",
//     "idDosenwali" : 2
// },
// {
//     "nama" : "Syahrun Dalu",
//     "nim"  : "10114050",
//     "kelas": "IF-3",
//     "jurusan": "Teknik Informatika",
//     "email": "Blacky@gmail.com",
//     "idDosenwali" : 3
// }
// ];
// console.log('mulai');
// mhs.forEach(m => console.log(m.nama));
// console.log('selesai');


// Asynchronous Callback
// Ajax menggunakan Vanila Javascript
// function getDataMahasiswa(url,success,error){
//     let xhr = new XMLHttpRequest();


//     xhr.onreadystatechange = function(){
//         if (xhr.readyState === 4){
//             if (xhr.status === 200){
//                 success(xhr.response);
//             }else if (xhr.status === 404){
//                 error();
//             }
//         }
//     }
//     xhr.open('get',url);
//     xhr.send();
// } 
// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, ()=>{

// });
// console.log('selesai');    


// menggunakan Jquery

console.log('mulai');
$.ajax({
    url:'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: () => {


    }
});
console.log('selesai');
// promise adalah 

// let ditepati = false;
// const janji1 = new Promise((resolve,reject) => {
//     if(ditepati) {
//         resolve('Janji telah ditepati');
//     }else{
//         reject('ingkar janji');
//     }
// });

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('Not OK : ' + response))


// let ditepati = false;
// const janji2 = new Promise ((resolve,reject) =>{
//     if(ditepati){
//         setTimeout(() => {
//             resolve('ditepati beberapa waktu');
//         },2000);
//     }else{
//         setTimeout(() => {
//             reject('tidak ditepati beberapa waktu')
//         },2000); 
//     }
// })
    
//     console.log('mulai');
// janji2
//     .finally(()=> console.log('selesai menunggu'))
//     .then(response => console.log('OK ! : ' + response ))
//     .catch(response => console.log('NOT OK : '+ response))  
//     console.log('selesai');

// promise all

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul : 'Avengers',
            sutrada : 'damli hermawan',
            aktor : 'krisna , unn'
        }]); 
    },1000);
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota : 'Bandung',
            temp : 26,
            kondisi : 'cerah berawan'
        }]);
    },500);
})

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// pakai spread operator 

Promise.all([film,cuaca])
    .then(response => {
        const [film,cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })
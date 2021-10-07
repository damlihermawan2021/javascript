// html fragment

// const mhs = {
//     nama : 'Damli Hermawan',
//     umur : 25,
//     nim :'10114047',
//     email: 'damli@gmail.com'
// };

// const el = `<div class="mhs">
//         <h2 class="mhs">${mhs.nama}</h2>
//         <span class="mhs">${mhs.nim}</span>
// </div>`;
// document.body.innerHTML = el;

// const mhs = [
//     {nama: `damli hermawan`,
//      email: `damlihermawan09@gmail.com`
//     },
//     {nama: `thomas febriana`,
//      email: `thomasfebriana@gmail.com`
//     },
//     {nama: `damli hermawan`,
//      email: `lisdadamayanti09@gmail.com`
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`

// document.body.innerHTML = el;

// const lagu = {
//     judul:'Kau adalah',
//     penyanyi:'Isyana Sarasvati',
//     feat: 'rayi putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat.${lagu.feat})` : ''} </li>  
//     </ul>
// </div>`;
// document.body.innerHTML = el;

const mhs = {
    nama : 'Damli Hermawan',
    smester : 12,
    mataKuliah : [
        'Kalkulus',
        'Algoritma dan Pemrograman',
        'Metodologi Penelitian',
        'Struktur Data',
        'Basis Data'
    ]
};

function cetakMataKuliah (mataKuliah){
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>`;
}
const el = `
    <div class="mhs">
    <h2 class="mhs">${mhs.nama}</h2>
    <span class="mhs">semester : ${mhs.smester}</span>
    <h4>Mata Kuliah : </h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
    </div>
`;

document.body.innerHTML = el;
// spread operator
// memecah iterables menjadi single element

// contoh
// console.log(...mhs);

// const mhs = ['sandi', 'galang', 'rudi'];
// const dosen = ['tatang','teteng','tutung'];
// const orang = [...mhs,'aji', ...dosen];
// console.log(orang);

// mengopy array

// const mhs = ['sandi','galang','ari'];
// const mhs1 = [...mhs];
// mhs1[0] = 'fajar';
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');
// console.log(liMhs[0].textContent);
// const mhs = [];
// for (let i = 0; i<liMhs.length; i++){
//     mhs.push(liMhs[i].textContent);
// }

// const mhs = [...liMhs].map(m => m.textContent);

// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;

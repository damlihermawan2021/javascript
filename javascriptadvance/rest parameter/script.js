// rest paramater

// function myFunc(){
// return `a = ${a} b= ${b} dan sisanya = ${args}`;
// return args;
// return Array.from(arguments);
// return [...arguments];
// }
// console.log(myFunc(1,2,3,4,5));

// function jumlahkan(...angka){
    // let total = 0;
    // for(const a of angka){
    //     total += a;
    // }
    // return total;

    // return angka.reduce((a,b)=>a+b);
// }
// console.log(jumlahkan(1,2,3,4,5));


// array destructuring

// const kelompok1 = ['Sandika', 'doddy', 'erik', 'fajar', 'hendra'];

// const [ketua,wakil,...anggota]= kelompok1;

// console.log(anggota);

// object destructuring
// const team = {
//     pm :'damli hermawan',
//     frontend1 : 'bona',
//     frontend2 : 'ucok',
//     beckend   : 'getsa',
//     ux        : 'bang bacung',
//     devOps    : 'uun'
// }

// const {pm,...myTeam} = team;
// console.log(myTeam);

// filtering 
function filterBy(type,...values){
return values.filter(v => typeof v === type)
}
console.log(filterBy('number',1,3,4,true,'damli',2,'jawot',false));


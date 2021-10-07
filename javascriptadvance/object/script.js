// lanjutan javascript

// object literal

let Mahasiswa = {
    nama : 'Damli Hermawan',
    energi : 20,
    makan : function(porsi){
        this.energi = this.energi + porsi;
        console.log(`Hallo selamat makan ${this.nama} selamat Makan !`);
    }
}
// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));
// pilih hanya javascript lanjutan
let JsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// setelah ambil semua video ambil durasi masing masing video
.map(item => item.dataset.duration)
// ubah menjadi durasi menjadi int , ubah menit menjadi dektik
.map(waktu =>{
    // 10.30 = [10 , 30]
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60 ) + parts[1];
})
// jumlahkan semua detik
.reduce((total, detik)=>total+detik);
// ubah formatnya menjadi jam menit detik
const jam = Math.floor(JsLanjut / 3600);
JsLanjut = JsLanjut - jam * 60;
const menit = Math.floor(JsLanjut / 60 );
const detik = JsLanjut - menit *60;

// simpan diDOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam ${menit} Menit ${detik} Detik`;
const jmlVideos = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length
const pJmlVideos = document.querySelector('.jumlah-video');
pJmlVideos.textContent = `${jmlVideos} video`;

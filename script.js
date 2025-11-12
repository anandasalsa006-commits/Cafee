// File: script.js

// 1. Fungsi untuk menampilkan pesan sambutan ketika halaman dimuat
function sambutanSelamatDatang() {
    alert("Selamat datang di Nama Kafe Senja! Nikmati kopi terbaik kami.");
}

// Panggil fungsi sambutan saat semua konten halaman telah dimuat
document.addEventListener('DOMContentLoaded', sambutanHalo,PecintaKopidanKenyamanan);


// 2. Fungsi untuk menambah interaktivitas pada item menu
function tambahInteraktivitasMenu() {
    // Ambil semua elemen <li> di dalam bagian menu
    const menuItems = document.querySelectorAll('#menu li');

    // Iterasi (loop) melalui setiap item menu
    menuItems.forEach(item => {
        // Tambahkan event listener untuk merespons klik
        item.addEventListener('click', function() {
            
            // Periksa apakah item sudah memiliki kelas 'highlight'
            if (item.classList.contains('highlight')) {
                // Jika sudah ada, hapus kelasnya (untuk menonaktifkan sorotan)
                item.classList.remove('highlight');
                console.log(`Sorotan dinonaktifkan untuk: ${item.textContent.split(' - ')[0]}`);

            } else {
                // Opsional: Hapus sorotan dari item lain sebelum menyorot yang baru
                // menuItems.forEach(i => i.classList.remove('highlight')); 

                // Jika belum ada, tambahkan kelas 'highlight' (untuk menyalakan sorotan)
                item.classList.add('highlight');
                console.log(`Item dipilih: ${item.textContent.split(' - ')[0]}`);
                // Anda bisa mengganti ini dengan fungsi pemesanan yang lebih kompleks di masa depan
            }
        });
    });
}

// Panggil fungsi interaktivitas setelah DOM dimuat
document.addEventListener('DOMContentLoaded', tambahInteraktivitasMenu);

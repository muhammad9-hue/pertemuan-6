document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen modal Bootstrap
    const modalElement = document.getElementById('konfirmasiModal');
    const myModal = new bootstrap.Modal(modalElement);
    const modalPesan = document.getElementById('modalPesan');

    // 1. Event listener untuk tombol "Beli Sekarang" pada card produk
    const beliButtons = document.querySelectorAll('.beli-btn');
    beliButtons.forEach(button => {
        button.addEventListener('click', function () {
            const namaProduk = this.getAttribute('data-nama');
            modalPesan.innerHTML = `Pesanan untuk produk <strong>"${namaProduk}"</strong> berhasil dimasukkan ke keranjang!`;
            myModal.show();
        });
    });

    // 2. Event listener untuk submit form kontak
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const namaUser = document.getElementById('nama').value;
        modalPesan.innerHTML = `Terima kasih <strong>${namaUser}</strong>, pesan Anda berhasil dikirim! Kami akan segera merespons.`;
        
        // Reset form
        contactForm.reset();
        
        // Tampilkan modal
        myModal.show();
    });
});
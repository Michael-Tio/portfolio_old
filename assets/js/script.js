function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function openURL(url) {
    window.open(url, '_blank');
}

function toggleMenu() {
    var menu = document.querySelector('.main-menu'); // Mengambil elemen menu navigasi
    
    if (menu.style.display === 'flex') {
      menu.style.display = 'none'; // Menyembunyikan menu jika sedang ditampilkan
    } else {
      menu.style.display = 'flex'; // Menampilkan menu jika sedang disembunyikan
    }
  }
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

// Fade In Scroll Animation
const observerFade = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('showFade');
    }
    else{
      entry.target.classList.remove('showFade');
    }
  });
});

// Go Up Scroll Animation
const observerUp = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('showGoUp');
    }
    else{
      entry.target.classList.remove('showGoUp');
    }
  });
});

// Go Left Scroll Animation
const observerLeft = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('showFromLeft');
    }
    else{
      entry.target.classList.remove('showFromLeft');
    }
  });
});

// Go Right Scroll Animation
const observerRight = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('showFromRight');
    }
    else{
      entry.target.classList.remove('showFromRight');
    }
  });
});

const hiddenElementsFade = document.querySelectorAll('.hiddenFade');
hiddenElementsFade.forEach((el) => observerFade.observe(el));
const hiddenElementsUp = document.querySelectorAll('.hiddenGoUp');
hiddenElementsUp.forEach((el) => observerUp.observe(el));
const hiddenElementsLeft = document.querySelectorAll('.hiddenToLeft');
hiddenElementsLeft.forEach((el) => observerLeft.observe(el));
const hiddenElementsRight = document.querySelectorAll('.hiddenToRight');
hiddenElementsRight.forEach((el) => observerRight.observe(el));
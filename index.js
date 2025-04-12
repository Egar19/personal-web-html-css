const toggle = document.getElementById("darkModeToggle");
const icon = document.getElementById("icon")
const copyright = document.getElementById("copyright")

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains('dark-mode')) {
        icon.src = 'assets/sun.svg';  // Tampilkan ikon matahari
        icon.alt = 'Ganti ke Light Mode';
    } else {
        icon.src = 'assets/moon.svg'; // Tampilkan ikon bulan
        icon.alt = 'Ganti ke Dark Mode';
    }

});

const d = new Date();
let year = d.getFullYear();

copyright.innerHTML = `Made Egar @${year}`

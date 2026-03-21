var phanThan = document.getElementById("giao-dien");
var icon = document.getElementById("nut-bam");

function doiGiaoDien() {
    if (phanThan.className == "light-mode") {
        phanThan.className = "dark-mode";
        icon.innerText = "🌙";
    } else {
        phanThan.className = "light-mode";
        icon.innerText = "☀️";
    }
}

function kiemTraHeThong() {
    var kiemTraToi = window.matchMedia("(prefers-color-scheme: dark)");

    if (kiemTraToi.matches) {
        phanThan.className = "dark-mode";
        icon.innerText = "🌙";
    }

    kiemTraToi.addEventListener(function(e) {
        if (e.matches) {
            phanThan.className = "dark-mode";
            icon.innerText = "🌙";
        } else {
            phanThan.className = "light-mode";
            icon.innerText = "☀️";
        }
    });
}
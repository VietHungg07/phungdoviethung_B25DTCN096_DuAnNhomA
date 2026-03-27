function hienthongbao(loaithongbao, tieude, noidung) {
    let thungchua = document.getElementById('khuvucthongbao');
    if (!thungchua) return;

    let hinhanhicon = '';
    if (loaithongbao === 'thanhcong')
        hinhanhicon = 'fas fa-check-circle';
    else if (loaithongbao === 'loi')
        hinhanhicon = 'fas fa-times-circle';
    else if (loaithongbao === 'tintuc')
        hinhanhicon = 'fas fa-info-circle';
    else if (loaithongbao === 'canhbao')
        hinhanhicon = 'fas fa-exclamation-triangle';

    let div = document.createElement("div");
    div.className = `thethongbao mau${loaithongbao}`;

    div.innerHTML = `
        <div class="phanicon"><i class="${hinhanhicon}"></i></div>
        <div class="phanchu">
            <h4 class="tieudethongbao">${tieude}</h4>
            <p class="noidungchitiet">${noidung}</p>
        </div>
        <div class="nutdongnhanh">
            <i class="fas fa-times"></i>
        </div>
    `;

    thungchua.appendChild(div);

    setTimeout(() => {
        div.style.opacity = "0";
        div.style.transform = "translateX(100%)";

        setTimeout(() => {
            div.remove();
        }, 300);
    }, 4000);

    div.querySelector(".nutdongnhanh").onclick = () => {
        div.remove();
    };
}
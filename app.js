function generateAnggota() {
    let jumlahAnggota = document.getElementById("jumlah_anggota").value;
    let anggota = document.getElementById("anggota");
    
    while (anggota.firstChild) {
        anggota.removeChild(anggota.firstChild);
    }
    
    let heading = document.createElement("h3");
    heading.innerHTML = "Anggota Kelompok:";
    anggota.appendChild(heading);
    
    for (let i = 1; i <= jumlahAnggota; i++) {
        let div = document.createElement("div");
        div.classList.add("form-floating", "mb-3");
        
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("name", "nama_anggota_" + i);
        input.setAttribute("id", "nama_anggota_" + i);
        input.setAttribute("placeholder", "Nama Anggota " + i);
        input.classList.add("form-control");
        
        let label = document.createElement("label");
        label.setAttribute("for", "nama_anggota_" + i);
        label.innerHTML = "Nama Anggota " + i;
        
        div.appendChild(input);
        div.appendChild(label);
        anggota.appendChild(div);
    }

    var button = document.createElement("button");

    button.setAttribute("type", "button");

    button.classList.add("btn", "btn-primary");

    button.innerHTML = "Daftar Kelompok";

    anggota.appendChild(button);
}

class CratePencil {
    constructor(name, color, size, company) {
        this.name = name;
        this.color = color;
        this.size = size;
        this.company = company;
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }

    erase(){
        document.querySelectorAll("h1").forEach((elem) => {
            if (elem.style.color === this.color) {
                elem.remove();
            }
        });
    }
}

let p1 = new CratePencil("Crate Pencil", "black", "medium", "Crate & Barrel");
let p2 = new CratePencil("Crate Pencil", "red", "medium", "Crate & Barrel");
function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap;
}

let sorular = [
    new Soru("Hangisi İstanbulu fetheden padişahtır?", {a: "Kanuni Sultan Süleyman", b: "Yavuz Sultan Selim", c: "Fatih Sultan Mehmed"}, "c"),
    new Soru("Aşağıdaki hangi veri tipi sözdizimsel verileri ifade eder?", {a: "decimal", b: "string", c: "int"}, "b"),
    new Soru("Hangisi pozitif bir tam sayıyı temsil eder?", {a: "-4 - (2 - 4)", b: "-(-2)", c: "-4"}, "b"),
    new Soru("Su maddenin hangi halini temsil eder?", {a: "Sıvı", b: "Gaz", c: "Katı"}, "a")
]
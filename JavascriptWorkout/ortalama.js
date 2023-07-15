var ogrenci_1 = 
{
    isim: "Ada Bilgi",
    dogumTarihi : 2012,
    matNotlari : [70,70,13]
};

var ogrenci_2 = 
{
    isim: "Yiğit Bilgi",
    dogumTarihi : 2010,
    matNotlari : [40,40,70]
};

var ogrenci1_ort = ogrenci_1.matNotlari.reduce(
    (a,b) => a+b,0
) / ogrenci_1.matNotlari.length;


var ogrenci2_ort = ogrenci_2.matNotlari.reduce(
    (a,b) => a+b,0
) / ogrenci_2.matNotlari.length;

console.log(ogrenci1_ort);
console.log(ogrenci2_ort);

var ogrenciBirBasarili = ogrenci1_ort >= 50;
var ogrenciIkiBasarili = ogrenci2_ort >= 50;
console.log(ogrenciBirBasarili);
console.log(ogrenciIkiBasarili);
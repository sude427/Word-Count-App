let metin = "Şuanda harf uygulaması yapıyorum";

let harf = prompt("Harfi Giriniz");

let sonuc = bul(harf);
alert("Harf sayısı :   " +sonuc);

function bul(harf){
    let toplam= 0;
    for(let i =0; i<metin.length; i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
          toplam +=1;
        }
     }
     return toplam;
  }

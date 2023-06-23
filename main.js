function hesaplaKucuk() {
    var kucukbas = document.getElementById('kucuk').value;
    var kilo = parseInt(document.getElementById('kilo').value);

    if (kucukbas === "Koyun") {
      kilo = kilo * 0.5;
      var fiyat = kilo * 191;
      document.getElementById("kucuk-karkas").innerHTML = "Hayvanın Karkas Kilosu: " + kilo + "KG";
      document.getElementById("kucuk-fiyat").innerHTML = "Hayvanın Ortalama Fiyatı: " + fiyat + " TL";
    } else if (kucukbas === "Keci") {
      kilo = kilo * 0.5;
      var fiyat = kilo * 172;
      document.getElementById("kucuk-karkas").innerHTML = "Hayvanın Karkas Kilosu: " + kilo + "KG";
      document.getElementById("kucuk-fiyat").innerHTML = "Hayvanın Ortalama Fiyatı: " + fiyat + " TL";
    }
  }
 


function hesaplaBuyuk() {
    var buyukbas = document.getElementById('buyuk').value;
    var kilo = parseInt(document.getElementById('buyuk-kilo').value);
    var hisse = parseInt(document.getElementById('hisse').value);
  
    var fiyat = 0;
    var karkasKilo = 0;
  
    if (buyukbas === "Sigir") {
      karkasKilo = kilo * 0.6;
      fiyat = karkasKilo * 227;
    } else if (buyukbas === "Manda") {
      karkasKilo = kilo * 0.6;
      fiyat = karkasKilo * 235;
    } else if (buyukbas === "Deve") {
      karkasKilo = kilo * 0.5;
      fiyat = karkasKilo * 205;
    }
  
    var hisseFiyat = fiyat / hisse;
  
    document.getElementById("buyuk-karkas").innerHTML = "Hayvanın Karkas Kilosu: " + karkasKilo + "KG";
    document.getElementById("buyuk-fiyat").innerHTML = "Hayvanın Ortalama Fiyatı: " + fiyat + " TL";
    document.getElementById("hisse-fiyat").innerHTML = "Hisse Başına Fiyat: " + hisseFiyat + " TL";
  }
  function temizleKucuk() {
    document.getElementById('buyuk-kilo').value = "";
    document.getElementById('hisse').selectedIndex = 0;
    document.getElementById('buyuk').selectedIndex = 0;
    document.getElementById('kucuk').selectedIndex = 0;
    document.getElementById('kilo').value = "";
    document.getElementById("buyuk-karkas").innerHTML = "";
    document.getElementById("kucuk-karkas").innerHTML = "";
    document.getElementById("kucuk-fiyat").innerHTML = "";
    document.getElementById("buyuk-fiyat").innerHTML = "";
    document.getElementById("hisse-fiyat").innerHTML = "";
  }


  
  
  
  
$(function () {
  const szuloElem = $("article");
  const sablonElem = $(".kartya");
  const meret = 4;
  const kivalasztottKartyak = [];
  for (let index = 0; index < meret; index++) {
    for (let k = 0; k < 2; k++) {
      const ujElem = sablonElem.clone().appendTo(szuloElem);
      const kartya = new Kartya("kepek/" + (index + 1) + ".jpg", ujElem);
    }
  }
  sablonElem.remove();

  //itt tudjuk számolni hogy hány kártya van felfordítva
  $(window).on("kartyakattintas", (event) => {
    console.log(event.detail); //az aktuális kártya adata
    //az, amelyik kiváltotta az esemenyt
    kivalasztottKartyak.push(event.detail);
    //akkor van két kártya felfordítva, ha a tömb hossza 2
    if (kivalasztottKartyak.length == 2) {
      if (kivalasztottKartyak[0].fajlnev == kivalasztottKartyak[1].fajlnev) {
        console.log("egyforma");
        //el kell tüntetni a kártyát
        kivalasztottKartyak[0].eltuntet();
        kivalasztottKartyak[1].eltuntet();
        kivalasztottKartyak.splice(0, 2); //kivágja a tömből azt a két elemet
      } else {
        console.log("nem egyforma");
        setTimeout(function () {
          kivalasztottKartyak[0].atvalt();
          kivalasztottKartyak[1].atvalt();
          kivalasztottKartyak.splice(0, 2); //kivágja a tömből azt a két elemet
        }, 1000);
      }
      
    }
  });
});

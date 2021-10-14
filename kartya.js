class Kartya{
    constructor(fajlnev,elem){
        this.elem = elem;//aktuális div elemünk
        this.fajlnev = fajlnev;
        console.log(this.fajlnev);
        //az img ele,akkor elem.attr("src",fajlNev)
        this.kepElem = elem.children("img");//az aktuális div elemünk képeleme
        this.allapot = false;//kezdetben a háttere látszik 
        this.hatter = "kepek/hatter.jpg";
        this.setLap();
        this.elem.on("click",() =>{//itt csak a nyíl függvényel működik mert így a Kartya osztályig hat ki
            this.atvalt();
            this.KattintasTrigger();//ezzel váltom ki az eseményt
        });
        //this.kepElem.attr("src",this.hatter);
    }

 atvalt(){
    this.allapot = !this.allapot;
    this.setLap();
 }   
setLap(){
    if(this.allapot){
        this.kepElem.attr("src",this.fajlnev);
    }else{
        this.kepElem.attr("src",this.hatter);
    }
}

KattintasTrigger(){
    //let esemeny = new Event("kartyakattintas");
    let esemeny = new CustomEvent("kartyakattintas",{detail:this});
    //úgy adjuk át az eseményt, hogy azt is megmondjuk hogy melyik objketum váltotta ki
    console.log("esemény kiváltva");
    window,dispatchEvent(esemeny);
}

eltuntet(){
    this.elem.css("visibility","hidden");
}


}
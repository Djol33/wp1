//import {scalableImages} from "./imageFluid.js";

window.addEventListener("load", function(){
 //   scalableImages()

    /* DINAMICKI MENI */
    dinamickiMeni()
})

function dinamickiMeni(){
    let stranice = [["Home" , `<i class="fa-solid fa-mug-hot"></i>`],["Shop", `<i class="fa-solid fa-cart-shopping"></i>`], ["Location", `<i class="fa-solid fa-location-dot"></i>` ], ["Author",`<i class="fa-solid fa-user"></i>`]]
    let html_stranice = [ "index.html", "shop.html", "contact-us.html", "author.html"]
    let mapa = new Map();

    for(let i in stranice){
        if(stranice[i] && html_stranice[i]){
            mapa.set( html_stranice[i],stranice[i])
        }
    }

     
    let ul = document.querySelector("ul")
    mapa.forEach((key,value)=>{
        let element = document.createElement("li")
        let a = document.createElement("a")
        a.href = value.toLowerCase()
        element.classList.add("nav-element")
        a.innerHTML += key[1]
        a.innerHTML += key[0];
        
 
 
        if(trenutnaStranicaPodudaraSe(value)){
            element.classList.add("border-btm")
        }

        element.appendChild(a)
        ul.appendChild(element)

    })
}
function trenutnaStranicaPodudaraSe(strana){
    let trenutna_stranica_url = window.location.pathname
    let reg = /(?<=\/)[\w\d_\-]+(\.html)$/;
    if(trenutnaStranica() == strana) return true;
    return false;



}
function trenutnaStranica(){
    let trenutna_stranica_url = window.location.pathname
    let reg = /(?<=\/)[\w\d_\-]+(\.html)$/;
    return (reg.exec(trenutna_stranica_url))[0]
}

 
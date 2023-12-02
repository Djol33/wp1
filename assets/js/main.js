
 window.addEventListener("load", function(){


    /* DINAMICKI MENI */

    dinamickiMeni()
    animatedCarousel()
    scalableImages()
    addContentAboutUs()
    window.addEventListener("resize",function(){

        scalableImages()
 
})
    addNews()
    validateContactForm()

    footer()


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

    if(trenutnaStranica()[0] == strana) return true;
    return false;



}
function trenutnaStranica(){
    let trenutna_stranica_url = window.location.pathname
    let reg = /(?<=\/)[\w\d_\-]+(\.html)$/;
    return (reg.exec(trenutna_stranica_url))
}

 function scalableImages(){
    let userWidth = window.innerWidth;
    let carousel = document.getElementById("carousel")
    let image=document.querySelectorAll(".image-carousel");
    image.forEach((element, broj) => {
        let url = getComputedStyle(element).backgroundImage.replace('url("',"").replace('")',"")
   
        let img_obj = new Image();
        img_obj.src = url;
        img_obj.onload =function(){
            let height_of_image = img_obj.height;
            let width_of_image = img_obj.width;
    
            let ratio_width = userWidth / width_of_image;
            let height_of_new_image = height_of_image * ratio_width;
    
            if (height_of_new_image !== 0) {
                carousel.style.height = height_of_new_image + "px";
            } else {
                carousel.style.height = img_obj.height + "px"; 
            }
          
        }
    })
   
  
} 
function animatedCarousel() {
    let left = document.querySelector("#prevBtn")

    let right = document.querySelector("#nextBtn")
    var all_slides = Array.from(document.querySelectorAll(".image-carousel"))
    let amount_of_images = all_slides.length;
    var counter = 1;
 
    all_slides.forEach((element, brojac)=>{
 
        element.style.left = (brojac * parseInt(window.innerWidth)) +"px"
    })

    right.addEventListener("click", function() {

        if ( !((counter) == amount_of_images)) {
            all_slides.forEach((elem) => {
                 let offset = ( parseInt(window.innerWidth))
 
                elem.style.left =  (parseInt(elem.style.left) - offset )+ "px"
            })
            counter += 1;


        } else {



            counter = 1;
            all_slides.forEach((elem, i) => {

                let duzina_ekrana = parseInt(window.innerWidth);
                elem.style.left = (i) * duzina_ekrana + "px"


            })
        }
 
    })
 
left.addEventListener("click", function(){
    if (counter === 1) {
        counter = amount_of_images;
        all_slides.forEach((elem, i) => {
            let screenWidth = parseInt(window.innerWidth);
            elem.style.left = (screenWidth * (i  -2)) + "px";
        });
 
    } else { 
        all_slides.forEach((elem) => {
             let offset = parseInt(window.innerWidth);
            elem.style.left = (parseInt(elem.style.left)+ offset) + "px";
        });
        counter--;
    }
})

}

function addContentAboutUs(){
    let div_text = document.querySelector("#mission-text")
    let text = `We're driven by a singular passion: crafting unparalleled coffee experiences. At Cafe & Factory, our quest for the finest beans takes us around the globe, forging relationships with farmers committed to quality and ethical practices.

    From these meticulously sourced beans, our expert roasters orchestrate the alchemy, coaxing out exquisite flavors and aromas in our state-of-the-art factory. But our journey doesn't end there.
    
    In our inviting cafés, skilled baristas weave magic, transforming our blends into moments of delight. Beyond serving exceptional coffee, we cultivate connections and a sense of belonging.
    
     Cafe & Factory  isn't just about coffee; it's a commitment to community, sustainability, and excellence. We're dedicated to elevating coffee culture, empowering farmers, and paving the way for a greener future.
    
    Join us on this voyage—a tapestry woven with dedication, craftsmanship, and a shared love for exceptional coffee. Together, let's relish each sip and redefine the essence of what coffee means to us all.`
    text = text.split("\n")
    text = text.filter((element)=> 
        element.trim()  !== ""
    )
    text.forEach((element)=>{
        let p = document.createElement("p")
        p.innerHTML = element.replace(/&/g,"<span class='weird-and'>&</span>");
        p.innerHTML = p.innerHTML.replace("Cafe",'<h1 class="style-as-p">Cafe</h1>')
        div_text.appendChild(p)
    })



}
function addNews(){
    let news_block = document.querySelector("#news-content-wrapper");
    let news = {0:{title:"New Location", img:{url:"assets/images/caffee-factory.jpg", alt:"cafe-radnicka-image", backgroundPosition:"left"} ,subtitle:"Radnicka 50", content: `
                        At Radnicka 50, a new chapter begins for us—a chapter that's all about celebrating exceptional coffee and fostering community bonds. As we unlock the doors to our latest location, we're thrilled to embark on this journey with you.

                        Join us for our grand opening extravaganza! Live music will set the tone while you indulge in complimentary coffee tastings featuring our finest brews. Early visitors will also enjoy exclusive discounts, our way of saying thank you for welcoming us into your neighborhood.
                        
                        This isn't just a café; it's a hub designed to be an integral part of Radnicka 50. We're eager to collaborate with neighboring businesses and residents, creating a space where connections flourish.
                        
                        Our menu boasts unique offerings crafted exclusively for this locale. From a signature drink paying homage to Radnicka 50's spirit to pastries sourced from local artisans, every item embodies our dedication to this community.
                        
                        Prepare for immersive experiences! Dive into coffee workshops, tasting sessions, and engaging classes on the art of latte creation. Our staff is poised to welcome you warmly, ensuring each visit is nothing short of delightful.
                        
                        We're more than a coffee spot—we're your partners in building a connected, vibrant community. Through active involvement in local events and initiatives, we aim to weave ourselves seamlessly into the fabric of Radnicka 50.
                        
                        Step into our café, savor the finest brews, and be part of the story as we write this exciting new chapter together. Radnicka 50 is not just a location; it's a gathering place where friendships are forged over the shared love for exceptional coffee.
                    
    ` },
                1:{title:"BEST TURKISH COFFE", img:{url:"assets/images/best-turkish-coffee2.jpg", alt:"turkish-coffee",backgroundPosition:"right"},subtitle:"Recipe", content: `
                

 

                        Embark on a sensory journey unlike any other with Cafe & Factory's signature Turkish Coffee. Renowned for its rich history and intense flavors, our Turkish Coffee stands as a testament to the mastery of this ancient brewing tradition.

                        Crafted meticulously by our expert artisans, each cup of our Turkish Coffee is a harmonious blend of finely ground, premium beans sourced from the heartlands of Turkey. It's a symphony of taste, boasting a robust, full-bodied profile that indulges your palate with every sip.

                        At Cafe & Factory, we honor tradition while embracing innovation. Our Turkish Coffee is brewed using time-honored methods, ensuring that every cup captures the essence of centuries-old rituals. The result? A beverage that transcends time, bringing forth the bold, authentic flavors cherished across generations.

                        Experience the allure of tradition and innovation harmoniously dancing in your cup. Whether you savor it slowly or relish its invigorating kick, our Turkish Coffee promises an unparalleled journey through taste and culture.

                        Indulge in The Best Turkish Coffee by Cafe & Factory, where each cup is not just a beverage but a cultural experience—a testament to our dedication to excellence and the celebration of coffee in its purest form.

                        Visit us today and elevate your coffee ritual to new heights with our exquisite Turkish Coffee. Step into our world, where each sip tells a story of tradition, passion, and unparalleled flavor.


                ` },
                2:{title:"A Journey from Bean to Cup",img:{url:"assets/images/how-coffee-is-made.jpg", alt:"how-coffee-is-made",backgroundPosition:"left"},subtitle: "How is Coffee Made", content:`
                
                
                        

                        Coffee, the elixir of energy and comfort, undergoes a remarkable transformation from bean to cup. Let's embark on an enlightening journey to unveil the intricate process behind this beloved beverage.

                        It all begins in far-flung coffee plantations, where coffee trees flourish under the sun's nurturing gaze. The journey starts with the cultivation of cherries, each bearing the potential for the exquisite flavors we crave. Farmers, stewards of these lands, meticulously nurture the plants, ensuring optimal growth and ripeness.

                        Once the cherries reach their peak, it's time for the harvest. This crucial phase demands skilled hands to pluck the ripe cherries, preserving their integrity. The harvested cherries then undergo a meticulous process known as "processing," where the seeds, or coffee beans, are extracted and carefully dried.

                        From these dried beans emerges a new chapter—roasting. This is where the alchemy happens. Expert roasters, armed with knowledge and finesse, apply heat and precision to unlock the beans' inherent flavors. The transformation from green to aromatic brown marks the birth of distinct profiles—light, medium, or dark roasts—each imparting its unique essence.

                        Finally, the stage is set for brewing. Ground or whole, the roasted beans are ready to fulfill their destiny. Whether brewed through pour-over, espresso, or French press, the beans release their essence, creating that familiar aroma and taste we adore.

                        At Café & Factory, we celebrate this journey. Our commitment to excellence echoes in every step—from sourcing premium beans to the artistry of roasting and the expert crafting of your perfect cup. Join us in savoring not just coffee but the story woven into each sip—a tale of dedication, precision, and the passion that brings coffee to life.
                
                `}
            }
 
    Object.values(news).forEach((element, i)=>{
        let card = document.createElement("div")

        card.style.backgroundImage = `url(${element.img["url"]}`
        card.style.backgroundPosition =  element.img.backgroundPosition
        card.className="card"
        let content_wrap = document.createElement("div")
        content_wrap.classList.add("content-wrap")
        let p_title = document.createElement("p")
        p_title.classList.add("title")
        p_title.innerHTML += element["title"];
         let p_subtitle = document.createElement("p")
        p_subtitle.classList.add("sub-title")
        p_subtitle.innerHTML = element["subtitle"];
        content_wrap.appendChild(p_title)
        content_wrap.appendChild(p_subtitle)
 
 
        card.appendChild(content_wrap)
 
        let sub = document.createElement("div")
        sub.classList.add("submit")
        sub.setAttribute('data-id', i);
        sub.innerText = "Learn more"
        content_wrap.appendChild(sub)
        news_block.appendChild(card)

    })
    let sub_but = document.querySelectorAll(".submit");
    sub_but.forEach((element)=>{
        element.addEventListener("click", function(){

            let body = document.querySelector("body")
            let overlay = document.createElement("div")
            overlay.classList.add("overlay");
            body.appendChild(overlay)
            body.style.overflowY  = "hidden" // zaustavlja srkollovanje kad je aktiviran
            let holder = document.createElement("div")
            holder.classList.add("holder")
            overlay.appendChild(holder)
            let holder_header = document.createElement("div")
            holder_header.classList.add("holder-header")
            let title = document.createElement("h2")
            title.classList.add("h2-title")
            let id_card = element.getAttribute("data-id")
            
            title.innerHTML = news[id_card]["title"] // Dodati logiku
            let x = document.createElement('i')
            x.classList.add("fa-solid",  "fa-x")
            holder_header.appendChild(title)
            holder_header.appendChild(x)
            holder.appendChild(holder_header)

            // modal body
            let modal_body = document.createElement("div")
            modal_body.classList.add("modal-body")
            let content = news[this.getAttribute("data-id")]["content"]
            content = content.split(/\n/g)
            content = content.filter((elem) =>{
                 
                return elem.trim() != ""
            })
            for( paragraph of content){
                let p = document.createElement("p")
                p.innerHTML = paragraph
                modal_body.appendChild(p) 
            }
            if(news[id_card].hasOwnProperty("img")){
                let img = document.createElement("img")
                img.src = news[id_card].img.url;
                img.alt = news[id_card].img.alt
                modal_body.appendChild(img)
                
    

        }
            holder.appendChild(modal_body)
            // Create Image

            overlay.appendChild(holder)
            //brise modal
            x.addEventListener("click", function(){
                body.style.overflowY ="scroll"
                overlay.remove()
            })


        })
    })
 
}
function validateContactForm(){
    let form = document.querySelector("#contact-us-form")
    let fname = document.querySelector("#name")
    let lname = document.querySelector("#last-name")
    let email = document.querySelector("#email")
    let question = document.querySelector("#question")
    let name_val = () =>{
        let name= document.querySelector("#name")
        let reg = /^[A-Z][a-z]{1,9}(\s[A-Z][a-z]{1,9})*$/
        return reg.test(name.value)
    }
    let lname_val = () =>{
        let lname= document.querySelector("#last-name")
        let reg = /^[A-Z][a-z]{1,9}(\s[A-Z][a-z]{1,9})*$/
        return reg.test(lname.value)
    }
    let email_val = () =>{
        let email= document.querySelector("#email")
        let reg = /^[\w\d\.\_\$\%\\\+]{3,}@(gmail\.com|yahoo\.com|ict\.edu\.rs)$/
        return reg.test(email.value)
    }
    let question_val = () =>{
        let question = document.querySelector("#question")
        if(question.value.length >15){
            return true
        }
        return false
    }
    form.addEventListener("input", function(){
        let submit = document.querySelector("#sub")
        if(name_val() && lname_val && email_val() && question_val()){
            submit.removeAttribute("disabled")
        }
        else{
            submit.setAttribute("disabled", "disabled")
        }
    })
    fname.addEventListener("input", function(){
        if(!name_val()){
            if(document.querySelector("#err_fname")){

            }
            else{
                let err = document.createElement("p")
                err.id = "err_fname"
                err.innerText = 'Must start with capital letter, without special characters and unnecesary spaces'
                this.insertAdjacentElement("afterend", err)
            }
        }
        else if(document.querySelector("#err_fname")){
            let a =document.querySelector("#err_fname")
            a.remove()
        }
    })
    lname.addEventListener("input", function(){
        if(!lname_val()){
            if(document.querySelector("#err_lname")){

            }
            else{
                let err = document.createElement("p")
                err.id = "err_lname"
                err.innerText = 'Must start with capital letter, without special characters and unnecesary spaces'
                this.insertAdjacentElement("afterend", err)
            }
        }
        else if(document.querySelector("#err_lname")){
            let a =document.querySelector("#err_lname")
            a.remove()
        }
    })
    email.addEventListener("input", function(){
        if(!email_val()){
            if(document.querySelector("#err_email")){

            }
            else{
                let err = document.createElement("p")
                err.id = "err_email"
                err.innerText = 'Wrong format of email'
                this.insertAdjacentElement("afterend", err)
            }
            
        }
        else if(document.querySelector("#err_email")){
            let a =document.querySelector("#err_email")
            a.remove()
        }
    })
    question.addEventListener("input", function(){
        if(!question_val()){
            if(document.querySelector("#err_question")){

            }
            else{
                let err = document.createElement("p")
                err.id = "err_question"
                err.innerText = 'Must be at least 15 characters long'
                this.insertAdjacentElement("afterend", err)
            }
        }
        else if(document.querySelector("#err_question")){
            let a =document.querySelector("#err_question")
            a.remove()
        }
    })
}
function footer(){
    let footer = document.querySelector('footer')
    let stranice = ["Home" ,"Shop", "Location" , "Author"]
    let html_stranice = [ "index.html", "shop.html", "contact-us.html", "author.html"]
    let mapa = new Map();

    for(let i in stranice){
        if(stranice[i] && html_stranice[i]){
            mapa.set( html_stranice[i],stranice[i])
        }
    }
    footer.innerHTML = `<a href = 'index.html'><img src='assets/images/logo.png' alt='logo'/></a>`
    let div1 = document.createElement("ul")
    div1.id='links'
    div1.innerHTML = '<li id = "footer-head">LINKS</li>'
    mapa.forEach((element, index)=>{
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.href = '/' + index
        a.innerHTML = element
        li.appendChild(a)
        div1.appendChild(li)
    })
    footer.appendChild(div1)

    let div2 = document.createElement("ul")
    let media = ["Instagram","Facebook", "Twitter"]
    let media_links = ["https://www.instagram.com/", "https://www.facebook.com/", "https://twitter.com/home"]
    div2.innerHTML = '<li id ="footer-head">MEDIA</LI>'
    media.forEach((element,index)=>{
        let li = document.createElement("li")
        let a = document.createElement("a")
        a.href = media_links[index]

        a.innerHTML = element
       li.appendChild(a) 
        div2.appendChild(li)
    })
    footer.appendChild(div2)

}
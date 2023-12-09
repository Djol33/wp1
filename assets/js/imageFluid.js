export function scalableImages(){
    let userWidth = window.screen.width;
 
 
 
    let carousel = document.getElementById("carousel")
    let image=document.getElementById("image1");
    
    let url = getComputedStyle(image).backgroundImage.replace('url("',"").replace('")',"")
    let img_obj = new Image();
    img_obj.src = url;
    let height_of_image = img_obj.height;
 
    let width_of_image = img_obj.width;

    let ratio_width  = userWidth/width_of_image;
    ratio_width = ratio_width%1;
 
    let height_of_new_image = height_of_image* ratio_width
 
    if(height_of_new_image != 0){
    carousel.style.height = height_of_new_image + "px";
    }
    else{
        carousel.style.height = img_obj.height
    }
    carousel.style.width = userWidth;
    console.log("a")
}
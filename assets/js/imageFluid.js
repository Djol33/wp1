export function scalableImages(){
    let userWidth = window.screen.width;
    let userHeight = window.screen.height;
    let ratio = userWidth/userHeight
    let carousel = document.getElementById("carousel")
    let image=document.getElementById("image1");
    
    let url = getComputedStyle(image).backgroundImage.replace('url("',"").replace('")',"")
    let img_obj = new Image();
    img_obj.src = url;
    let height_of_image = img_obj.height;
    let width_of_image = img_obj.width

    let ratio_width  = userWidth/width_of_image;
    ratio_width = ratio_width%1;

 
    carousel.style.height =String(height_of_image * ratio_width) +"px";
    carousel.style.width = userWidth;

}
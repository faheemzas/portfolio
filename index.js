console.log('this is working');


let navbar= document.getElementById('navbar');


document.addEventListener("scroll",function(){
    // console.log(window.scrollY)
    console.log(window.screen.width)
if(window.scrollY >= 50){
navbar.style.background = "black";
}else{
    
    navbar.style.background = "transparent";
}





})
let btn = document.querySelector("#btn");
btn.addEventListener("click",()=>{
    let active=document.querySelector(".nav1");
    active.classList.toggle("active");
})

window.onscroll=function(){
    let nav=document.querySelector(".container1");
    if(scrollY>700){
        nav.style.position="fixed"
        nav.style.width="100%"
        nav.style.backgroundColor="rgb(0, 11, 20)";
        nav.style.boxShadow="3px 4px 20px 6px #00000029"
    }
    else{
        nav.style.position="relative"
        nav.style.width="100%"
        nav.style.backgroundColor="rgba(0, 11, 20,0)";
        nav.style.boxShadow="3px 4px 20px 6px transparent"
    }
    
}
var rec1;

var rec2;

var clickrestriction = false;

document.addEventListener("DOMContentLoaded", function( ){
  
    rec1 = document.querySelector(".short-rect" );
    
  
     rec1.addEventListener("click", function( ){
        if(clickrestriction){
           alert("Click");
        }
     });
    
   //this version is using an anonymous function
    //this version is adding a click listener to an HTML element with the id bob.
});


rec2 = document.querySelector(".long-rect");
                          
rec2.addEventListener("mouseover", function( ){
    rec1.innerHTML = ("Mouse is in");
});             
                      
rec2.addEventListener("mouseout", function( ){
    rec1.innerHTML = ("Mouse is now out");
    clickrestriction = true;
});
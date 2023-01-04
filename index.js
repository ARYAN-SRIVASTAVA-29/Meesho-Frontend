// document.querySelector(".womenEthnic p").addEventListener("mouseover", myFunction );

// function myFunction(){

//     let element = document.querySelector(".ethnic")

//     if(element.style.display == "none"){
//         element.style.display = "flex";
//     }
//     else{
//         element.style.display = "none";
//     }

// }


document.querySelector(".womenEthnic p").addEventListener("mouseenter", myFunction );
document.querySelector(".ethnic").addEventListener("mouseenter", myFunction)

function myFunction(){

    let element = document.querySelector(".ethnic")

    element.style.display = "flex";
    // element.style.opacity = "50";
    // element.style.transition = "all 1s ease-out";
    
    
}

document.querySelector(".womenEthnic p").addEventListener("mouseleave", oneFunction);

document.querySelector(".ethnic").addEventListener("mouseleave", oneFunction)

function oneFunction(){

    let element = document.querySelector(".ethnic")

    element.style.display = "none";
    
}






document.querySelector(".womenWestern p").addEventListener("mouseenter", threeFunction);
document.querySelector(".western").addEventListener("mouseenter", threeFunction);


function threeFunction(){

    let element = document.querySelector(".western")

    element.style.display = "flex";
    
}

document.querySelector(".womenWestern p").addEventListener("mouseleave", fourFunction)
document.querySelector(".western").addEventListener("mouseleave", fourFunction)

function fourFunction(){

    let element = document.querySelector(".western")

    element.style.display = "none";
    
}









document.querySelector(".men p").addEventListener("mouseenter", menFunction );
document.querySelector(".menAB").addEventListener("mouseenter", menFunction)

function menFunction(){

    let element = document.querySelector(".menAB")

    element.style.display = "flex";
    
}






document.querySelector(".men p").addEventListener("mouseleave", menABFunction);
document.querySelector(".menAB").addEventListener("mouseleave", menABFunction)

function menABFunction(){

    let element = document.querySelector(".menAB")

    element.style.display = "none";
    
}





document.querySelector(".kids p").addEventListener("mouseenter", kidsFunction );
document.querySelector(".kidsAB").addEventListener("mouseenter", kidsFunction)


function kidsFunction(){

    let element = document.querySelector(".kidsAB")

    element.style.display = "flex";
    
}






document.querySelector(".kids p").addEventListener("mouseleave", kidsABFunction);
document.querySelector(".kidsAB").addEventListener("mouseleave", kidsABFunction)
function kidsABFunction(){

    let element = document.querySelector(".kidsAB")

    element.style.display = "none";
    
}







document.querySelector(".home p").addEventListener("mouseenter", homeFunction );
document.querySelector(".homeKitchen").addEventListener("mouseenter", homeFunction)


function homeFunction(){

    let element = document.querySelector(".homeKitchen")

    element.style.display = "flex";
    
}


document.querySelector(".home p").addEventListener("mouseleave", homeoneFunction);
document.querySelector(".homeKitchen").addEventListener("mouseleave", homeoneFunction)
function homeoneFunction(){

    let element = document.querySelector(".homeKitchen")

    element.style.display = "none";
    
}

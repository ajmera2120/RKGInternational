let i = 0; // current slide
let j = 6; // total slides

const dots = document.querySelectorAll(".dot-container-photo button");
const images = document.querySelectorAll(".image-container-photo img");

function next(){
    document.getElementById("content" + (i+1)).classList.remove("active-photo");
    i = ( j + i + 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active-photo");
    indicator( i+ 1 );
}

function prev(){
    document.getElementById("content" + (i+1)).classList.remove("active-photo");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active-photo");
    indicator(i+1);
}

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-container-photo button:nth-child(" + num + ")").style.backgroundColor = "green";
}

function dot(index){
    images.forEach(function(image){
        image.classList.remove("active-photo");
    });
    document.getElementById("content" + index).classList.add("active-photo");
    i = index - 1;
    indicator(index);
}
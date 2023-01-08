
var pics = [
    "fotoalbumstranica/DSC_0207~2.jpg",
    "fotoalbumstranica/DSC_0199~2.jpg",
    "fotoalbumstranica/DSC_0204~2.jpg",
    "fotoalbumstranica/DSC_0205~2.jpg",
    "fotoalbumstranica/DSC_0206~2.jpg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click", function(){
    if(counter === 5){
        counter = 0;
    }
    img.src = pics[counter];
    counter = counter + 1;    
});
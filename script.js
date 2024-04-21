let image = document.getElementById("image");
let heart = document.getElementById("heart");

image.addEventListener("dblclick", function () {
    heart.style.transform = `translate(-50%, -50%) scale(4)`;
    heart.style.color="red";
    heart.style.opacity=0.8;

    setTimeout(function(){
        heart.style.opacity=0;
    },1000);
    setTimeout(function(){
        heart.style.transform = `translate(-50%, -50%) scale(0)`;
    },3000);
});





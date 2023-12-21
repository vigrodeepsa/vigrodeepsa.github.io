
var currentImage = 48;
var totalImages = 48;

function changeImage(direction) {
    currentImage += direction;
    
    if (currentImage < 1) {
        currentImage = totalImages;
    } else if (currentImage > totalImages) {
        currentImage = 1;
    }
    

    document.getElementById("image").src = "./images/stories/2024/" + currentImage + ".png";


}

document.getElementById("prev").addEventListener("click", function() {
    changeImage(1);// i changed it from -1 to 1 so that it starts with new ones
});

document.getElementById("next").addEventListener("click", function() {
    changeImage(-1);// i changed it from 1 to -1 so that it starts with new ones
});

document.getElementById("download").addEventListener("click", function() {
    var link = document.createElement('a');
    link.href = document.getElementById("image").src;
    link.download = "image.png";
    link.click();
});


function zoomImage(src) {
    var zoomedContainer = document.querySelector('.zoomed-container');
    var zoomedImg = document.getElementById('zoomed-img');
    
    zoomedContainer.style.display = 'flex';
    zoomedImg.src = src;
    var zoomedContainer = document.querySelector('.zoomed-container');
    var zoomedImg = document.getElementById('zoomed-img');
    var downloadBtn = document.getElementById('download-btn');
    
    downloadBtn.href = src;
}
//***************
{
document.getElementById("xx").style.display = "none";
}

function unzoomImage() {
    var zoomedContainer = document.querySelector('.zoomed-container');
    var zoomedImg = document.getElementById('zoomed-img');

    zoomedContainer.style.display = 'none';
    zoomedImg.src = '';
}
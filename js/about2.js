var modal = document.getElementById('myModal');
var img;
var modalImg;
var captionText;

function getimg(id) {
    img = document.getElementById(id);
    modalImg = document.getElementById("img01");
    captionText = document.getElementById("caption");
}
function displayimg(){
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}


var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
    modal.style.display = "none";
};
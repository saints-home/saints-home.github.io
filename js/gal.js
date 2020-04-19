var toArt = 0;
var toPhoto = 0;

var art = ["image/art/1.jpg", "image/art/2.jpg"];
var photo = ["image/photo/3.jpg", "image/photo/4.jpg"];


function openArt() {
    var photoBody = document.getElementById("photoBody");
    photoBody.style.display = "none";
    var artBody = document.getElementById("artBody");
    artBody.style.display = "block";

    toArt = 0;
    var objArtBody = document.getElementById("imgArt");
    objArtBody.src = art[toArt];
}

function nextArt() {
    var objArtBody = document.getElementById("imgArt");
    toArt++;
    objArtBody.src = art[toArt];
    if (toArt == art.length) {
        toArt = 0;
        objArtBody.src = art[toArt];
    }
}

function openPhotu() {
    var photoBody = document.getElementById("photoBody");
    photoBody.style.display = "block";
    var artBody = document.getElementById("artBody");
    artBody.style.display = "none";

    toPhoto = 0;
    var objPhotoBody = document.getElementById("imgPhoto");
    objPhotoBody.src = photo[toPhoto];
}

function nextPhoto() {
    var objPhotoBody = document.getElementById("imgPhoto");
    toPhoto++;
    objPhotoBody.src = photo[toPhoto];
    if (toPhoto == photo.length) {
        toPhoto = 0;
        objPhotoBody.src = photo[toPhoto];
    }
}
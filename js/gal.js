//Функции управления Арт-иллюстрациями
var art = ["image/art/1.jpg", "image/art/2.jpg"];
var toArt = 0;

function openArt() {
    var photoBody = document.getElementById("photo");
    photoBody.style.display = "none";
    var artBody = document.getElementById("art");
    artBody.style.display = "block";

    toArt = 0;
    var objArtBody = document.getElementById("artBody");
    objArtBody.src = art[toArt];
}

function nextArt() {
    var objArtBody = document.getElementById("artBody");
    toArt++;
    objArtBody.src = art[toArt];
    if (toArt == art.length) {
        toArt = 0;
        objArtBody.src = art[toArt];
    }
}

function prevArt() {
    var objArtBody = document.getElementById("artBody");
    if (toArt == 0) {
        toArt = art.length;
        objArtBody.src = art[toArt];
    }
    toArt--;
    objArtBody.src = art[toArt];
}

//Функции управления Фотографиями
var photo = ["image/photo/3.jpg", "image/photo/4.jpg"];
var toPhoto = 0;

function openPhotu() {
    var photoBody = document.getElementById("photo");
    photoBody.style.display = "block";
    var artBody = document.getElementById("art");
    artBody.style.display = "none";

    toPhoto = 0;
    var objPhotoBody = document.getElementById("photoBody");
    objPhotoBody.src = photo[toPhoto];
}

function nextPhoto() {
    var objPhotoBody = document.getElementById("photoBody");
    toPhoto++;
    objPhotoBody.src = photo[toPhoto];
    if (toPhoto == photo.length) {
        toPhoto = 0;
        objPhotoBody.src = photo[toPhoto];
    }
}

function prevPhoto() {
    var objPhotoBody = document.getElementById("photoBody");
    if (toPhoto == 0) {
        toPhoto = photo.length;
        objPhotoBody.src = photo[toPhoto];
    }
    toPhoto--;
    objPhotoBody.src = photo[toPhoto];
}
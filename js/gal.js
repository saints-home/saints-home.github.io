//Функции управления Арт-иллюстрациями
var art = ["image/art/1.jpg", "image/art/2.jpg"];
var toArt = 0;
var artZoom = "50% 50%"
var artZoom2 = "150%"

function openArt() {
    var photoBody = document.getElementById("photoBody");
    photoBody.style.display = "none";
    var artBody = document.getElementById("artBody");
    artBody.style.display = "block";

    toArt = 0;
    var objArtBody = document.getElementById("imgChange");
    objArtBody.style.background = "url(/" + art[toArt] + ") " + artZoom;
    objArtBody.style.backgroundSize = artZoom2;
}

function nextArt() {
    var objArtBody = document.getElementById("imgChange");
    toArt++;
    objArtBody.style.background = "url(/" + art[toArt] + ") " + artZoom;
    objArtBody.style.backgroundSize = artZoom2;
    if (toArt == art.length) {
        toArt = 0;
        objArtBody.style.background = "url(/" + art[toArt] + ") " + artZoom;
        objArtBody.style.backgroundSize = artZoom2;
    }
}

function prevArt() {
    var objArtBody = document.getElementById("imgChange");
    if (toArt == 0) {
        toArt = art.length;
        objArtBody.style.background = "url(/" + art[toArt] + ") " + artZoom;
        objArtBody.style.backgroundSize = artZoom2;
    }
    toArt--;
    objArtBody.style.background = "url(/" + art[toArt] + ") " + artZoom;
    objArtBody.style.backgroundSize = artZoom2;
}

//Функции управления Фотографиями
var photo = ["image/photo/3.jpg", "image/photo/4.jpg"];
var toPhoto = 0;
var photoZoom = "50% 50%"
var photoZoom2 = "115%"

function openPhotu() {
    var photoBody = document.getElementById("photoBody");
    photoBody.style.display = "block";
    var artBody = document.getElementById("artBody");
    artBody.style.display = "none";

    toPhoto = 0;
    var objPhotoBody = document.getElementById("imgChange");
    objPhotoBody.style.background = "url(/" + photo[toPhoto] + ") " + photoZoom;
    objPhotoBody.style.backgroundSize = photoZoom2;
}

function nextPhoto() {
    var objPhotoBody = document.getElementById("imgChange");
    toPhoto++;
    objPhotoBody.style.background = "url(/" + photo[toPhoto] + ") " + photoZoom;
    objPhotoBody.style.backgroundSize = photoZoom2;
    if (toPhoto == photo.length) {
        toPhoto = 0;
        objPhotoBody.style.background = "url(/" + photo[toPhoto] + ") " + photoZoom;
        objPhotoBody.style.backgroundSize = photoZoom2;
    }
}

function prevPhoto() {
    var objPhotoBody = document.getElementById("imgChange");
    if (toPhoto == 0) {
        toPhoto = photo.length;
        objPhotoBody.style.background = "url(/" + photo[toPhoto] + ") " + photoZoom;
        objPhotoBody.style.backgroundSize = photoZoom2;
    }
    toPhoto--;
    objPhotoBody.style.background = "url(/" + photo[toPhoto] + ") " + photoZoom;
    objPhotoBody.style.backgroundSize = photoZoom2;
}
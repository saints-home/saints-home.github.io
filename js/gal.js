//Функции управления Арт-иллюстрациями
var art = ["image/art/1.jpg",
"image/art/2.jpg",
"https://s128sas.storage.yandex.net/rdisk/6ea32d11388dd988220fe365e396fba065b0f4bcd7021470e829b11262a1b78c/5ed82cce/svjkFWIJaym4ZJTmjZm6q-65WJsFKv8E6I2pTAAqN_0600axBLWaJPsEUssqSEmRHh0-O_kgDvaG22l522tu5g==?uid=91381758&filename=1010131.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=91381758&fsize=308958&media_type=image&etag=5f31e1178ee480e06c358bdbdfc7ad7a&hid=205c94e1edaa5cb2285e1be7978cfc84&rtoken=2Rr05ds6blME&force_default=yes&ycrid=na-614219153a6831b1eb464bfaff779bd3-downloader11e&ts=5a736119b0d40&s=7c0d606d642247064505bd4dfa5c9a438c70dc71d4c2df466f8144294505d2dd&pb=U2FsdGVkX1_sc2S4fMy0mqKbJ89TWBzSoIrMX0fUadqq7cshAwU2F4j7hlA8EMG_Zrg51tWxU77rEB5l7TcWFT7aUjvK9kbcEuxnCro_JzU"];
var toArt = 0;

function openArt() {
    var photoBody = document.getElementById("photo");
    photoBody.style.display = "none";
    var artBody = document.getElementById("art");
    artBody.style.display = "flex";
    var pb = document.getElementById('artBody');
    pb.style.height = document.body.clientHeight;

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
var photo = ["https://s356myt.storage.yandex.net/rdisk/af89ab8e9de9e3fc08413623dc1752224a3858709f2a2f6817eea0056868009a/5ed82bd4/dq1E2ed-TnqUHsftspj-XkQwKRZetHBbCwifn9CLnNM2TCOgmDJNgx8JQIVZhbZzi_ziXzqX0yqZO4eV8ZCw7Q==?uid=91381758&filename=RRX97s7u7IQ.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&owner_uid=91381758&fsize=1273045&etag=db8a93fd111237872c00a4fdd3eba8c1&hid=8e7a9662cd46ed57f3980564bd0587b3&media_type=image&rtoken=XINzVAHarPpl&force_default=yes&ycrid=na-f695d078f1f59fdd38435f0eb5392dba-downloader24f&ts=5a73602b45ac0&s=5e671b4529234e2bfd7036c30420c87875a0d9f14f5af103168609d44d1fc43d&pb=U2FsdGVkX18j8hMA2Mbvve8FxEIVxCkjKi9a7KJY-jW27lLH-wCt4RrdZhP7raQodcXqx1ZM-1DsCoOcVK9DH7TU8GwcT912SymcP3LqaYQ", 
"https://s173myt.storage.yandex.net/rdisk/67cad711e64559cffe9cf4e540ee9c72765907d04c688681b42caad0d44a6c9f/5ed82c49/dq1E2ed-TnqUHsftspj-XgidsfTm4OMRR80md77qWgKuMnubTLILGgAr-LwCNg8nnDmjA0Sm3mvOAhp3I2wynw==?uid=91381758&filename=10E003F8-7AAC-483D-B0C8-7F1F250D25BD.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=91381758&media_type=image&hid=d344e8b30875dd8167a1ece726819987&etag=587e881911ae30778b40a782bd256f1b&fsize=768526&rtoken=Kwt90W6sH60j&force_default=yes&ycrid=na-2b7600377a8871b3299dddfc2b744a47-downloader11e&ts=5a73609bce440&s=09163a9e06822a77df98a785e69f9e68dc6c6d02f3efa0e37a333453a79b6655&pb=U2FsdGVkX1_PMp6GBuM5eGXWDdPlBw0khNUzpTg13blxB6QmbPSMN3jxVMQ6oSomfvXPOQUeTakC4CND4AwSjpv0gxmM8jUmZq31BpWdVeI",
"https://s129myt.storage.yandex.net/rdisk/4f49f26c98fc0535edcd26119257c4a0ab876378b4d3876fb1584111cbdb074f/5ed82c8d/dq1E2ed-TnqUHsftspj-XuTJBLeh0zFl0p6gX-yzfD_JoEhvRvS-Kj8fHTSeDH-WbFrfh6uYz_7Z4BLSu-Eagw==?uid=91381758&filename=IMG_0643.PNG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=91381758&hid=d7d7e24d220e7c5e2e82b9f71fcf63ec&media_type=image&fsize=189315&etag=e9b382ef5ee342375458a86df4d6b12d&rtoken=pJwZAtuKldH4&force_default=yes&ycrid=na-b69b0b23f66ed9d9e3844c52b63267d4-downloader11e&ts=5a7360dbb3b00&s=b5847076f74d9f902bcb22a6b8b172f01db6ef22317ce64d9af18ce57d2597d9&pb=U2FsdGVkX1_JYnN1yPFxQESyJ1EI5Ty4fK8YYS67LgDs9bIHLDNRPOG7M9qUZ3VpNffiHx5eo4dQuUsAbfI9wkOGeVJfUNi2b0fgD127FfU"];
var toPhoto = 0;

function openPhotu() {
    var photoBody = document.getElementById("photo");
    photoBody.style.display = "flex";
    var artBody = document.getElementById("art");
    artBody.style.display = "none";
    var pb = document.getElementById('photoBody');
    pb.style.height = document.body.clientHeight;

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
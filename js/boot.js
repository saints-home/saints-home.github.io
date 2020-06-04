function boot() {
    var headerCode = '<header class="header">\
    <div class="boxleft">\
        <div id="topmenu">\
            <label id="linkMenu">Меню</label>\
            <div id="submenu">\
                <label id="linkSubMenu" for="modal-2">Сообщение</label>\
                <label id="linkSubMenu" for="modal-1">О сайте</label>\
            </div>\
        </div>\
    </div>\
    <div class="main">\
        <div id="moveTrack">\
            <div id="item1" class="item">1</div>\
            <div id="item2" class="item">2</div>\
            <div id="item3" class="item">3</div>\
            <div id="item4" class="item">4</div>\
            <div id="item5" class="item">5</div>\
            <div id="item6" class="item">6</div>\
        </div>\
        <label id="buttonCarPrev" onclick="clickPrev()">&lt</label>\
        <label id="buttonCarNext" onclick="clickNext()">&gt</label>\
    </div>\
</header>';
    var footerCode = '<footer class="footer">\
    <div class="footerBoxs">\
        <div class="imageFooterBox">\
            <img class="imageFooterUser" src="image/footeruser.jpg" alt="USER">\
        </div>\
        <div class="textFooterBox">\
            <div class="textNandDBox">\
                <div class="textName">Saint</div>\
                <div class="textDiscription">You make my love go...</div>\
            </div>\
            <div class="textSocial">\
                <div class="textFooter">Социальные сети:</div>\
                <a href="https://vk.com/saint_quicksilver"><img class="linkSocial" src="image/vk.png" alt="vk"></a>\
            </div>\
        </div>\
    </div>\
    </footer>';
    document.getElementById('lol').insertAdjacentHTML('beforebegin', headerCode);
    document.getElementById('lol').insertAdjacentHTML('afterend', footerCode);
   }
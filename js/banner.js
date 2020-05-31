var clickCount = 0;

function sevePosition() {
    var elemMove = document.getElementById("moveTrack");
    const wid = parseInt(getComputedStyle(document.getElementById('1')).getPropertyValue('width'));
    const mar = parseInt(getComputedStyle(document.getElementById('1')).getPropertyValue('margin-left'));
    if (clickCount == 0)
    {
        elemMove.style.left = 0;
    }
    if (clickCount == 1)
    {
        elemMove.style.left = 0-(wid + mar);
    }
    if (clickCount == 2)
    {
        elemMove.style.left = 0-(wid + mar)*2;
    }
    if (clickCount == 3)
    {
        elemMove.style.left = 0-(wid + mar)*3;
    }
    if (clickCount == 4)
    {
        elemMove.style.left = 0-(wid + mar)*4;
    }
}

function clickNext() {
    clickCount = clickCount + 1;
    var elemMove = document.getElementById("moveTrack");
    var nextbut = document.getElementById("buttonCarNext");
    var prevbut = document.getElementById("buttonCarPrev");
    const wid = parseInt(getComputedStyle(document.getElementById('1')).getPropertyValue('width'));
    const mar = parseInt(getComputedStyle(document.getElementById('1')).getPropertyValue('margin-left'));
    const lef = parseInt(getComputedStyle(document.getElementById('moveTrack')).getPropertyValue('left'));
    elemMove.style.left = lef - (wid + mar);
    if (clickCount > 0) {
        prevbut.style.display = "flex";
    }
    if (clickCount == 4) {
        nextbut.style.display = "none";
    }
}

function clickPrev() {
    clickCount = clickCount - 1;
    var elemMove = document.getElementById("moveTrack");
    var nextbut = document.getElementById("buttonCarNext");
    var prevbut = document.getElementById("buttonCarPrev");
    const wid = parseInt(getComputedStyle(document.getElementById('1')).getPropertyValue('width'));
    const mar = parseInt(getComputedStyle(document.getElementById('1')).getPropertyValue('margin-left'));
    const lef = parseInt(getComputedStyle(document.getElementById('moveTrack')).getPropertyValue('left'));
    elemMove.style.left = lef + (wid + mar);
    if (clickCount < 4)
    {
        nextbut.style.display = "flex";
    }
    if (clickCount == 0)
    {
        prevbut.style.display = "none";
    }
}
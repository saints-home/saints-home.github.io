var clickCount = 0;

function sevePosition() {
    var elemMove = document.getElementById("moveTrack");
    const wid = parseFloat(getComputedStyle(document.getElementById('1')).getPropertyValue('width'));
    const mar = parseFloat(getComputedStyle(document.getElementById('1')).getPropertyValue('margin-left'));
    const lef = parseFloat(getComputedStyle(document.getElementById('moveTrack')).getPropertyValue('left'));
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
    var elemMove = document.getElementById("moveTrack");
    var nextbut = document.getElementById("next");
    var prevbut = document.getElementById("prev");
    const wid = parseFloat(getComputedStyle(document.getElementById('1')).getPropertyValue('width'));
    const mar = parseFloat(getComputedStyle(document.getElementById('1')).getPropertyValue('margin-left'));
    const lef = parseFloat(getComputedStyle(document.getElementById('moveTrack')).getPropertyValue('left'));
    var nextCount = lef - (wid + mar);
    elemMove.style.left = nextCount;
    clickCount = clickCount + 1;
    if (clickCount == 4)
    {
        nextbut.style.visibility = "hidden";
    }
    if (clickCount > 0)
    {
        prevbut.style.visibility = "visible";
    }
}

function clickPrev() {
    var elemMove = document.getElementById("moveTrack");
    var nextbut = document.getElementById("next");
    var prevbut = document.getElementById("prev");
    const wid = parseFloat(getComputedStyle(document.getElementById('1')).getPropertyValue('width'));
    const mar = parseFloat(getComputedStyle(document.getElementById('1')).getPropertyValue('margin-left'));
    const lef = parseFloat(getComputedStyle(document.getElementById('moveTrack')).getPropertyValue('left'));
    var nextCount = lef + (wid + mar);
    elemMove.style.left = nextCount;
    clickCount = clickCount - 1;
    if (clickCount == 0)
    {
        prevbut.style.visibility = "hidden";
    }
    if (clickCount < 4)
    {
        nextbut.style.visibility = "visible";
    }
}
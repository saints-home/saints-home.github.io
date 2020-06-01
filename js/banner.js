var clickCount = 0;

function resetPosition() {
    const wid = parseFloat(getComputedStyle(document.getElementById('item1')).getPropertyValue('width'));
    const mar = parseFloat(getComputedStyle(document.getElementById('item1')).getPropertyValue('margin-right'));
    clickCount = 0;
    document.getElementById('moveTrack').style.transform = "translate3d(-"+((wid + mar)*clickCount)+"px, 0px, 0px)";
    document.getElementById("buttonCarNext").style.display = "flex";
    document.getElementById("buttonCarPrev").style.display = "none";
}

function clickNext() {
    const wid = parseFloat(getComputedStyle(document.getElementById('item1')).getPropertyValue('width'));
    const mar = parseFloat(getComputedStyle(document.getElementById('item1')).getPropertyValue('margin-right'));
    const widthScreen = document.body.clientWidth;
    clickCount = clickCount + 1;
    document.getElementById('moveTrack').style.transform = "translate3d(-"+((wid + mar)*clickCount)+"px, 0px, 0px)";
    if ((widthScreen >= 320) && (widthScreen < 568)) {
        if (clickCount > 0) { document.getElementById("buttonCarPrev").style.display = "flex"; }
        if (clickCount == 5) { document.getElementById("buttonCarNext").style.display = "none"; }
    }
    if ((widthScreen >= 568) && (widthScreen <= 1024)) {
        if (clickCount > 0) { document.getElementById("buttonCarPrev").style.display = "flex"; }
        if (clickCount == 4) { document.getElementById("buttonCarNext").style.display = "none"; }
    }
    if ((widthScreen > 1024) && (widthScreen <= 1366)) {
        if (clickCount > 0) { document.getElementById("buttonCarPrev").style.display = "flex"; }
        if (clickCount == 3) { document.getElementById("buttonCarNext").style.display = "none"; }
    }
    if (widthScreen > 1366) {
        if (clickCount > 0) { document.getElementById("buttonCarPrev").style.display = "flex"; }
        if (clickCount == 2) { document.getElementById("buttonCarNext").style.display = "none"; }
    }
}

function clickPrev() {
    const wid = parseFloat(getComputedStyle(document.getElementById('item1')).getPropertyValue('width'));
    const mar = parseFloat(getComputedStyle(document.getElementById('item1')).getPropertyValue('margin-right'));
    const widthScreen = document.body.clientWidth;
    document.getElementById('moveTrack').style.transform = "translate3d("+((wid + mar)-((wid + mar)*clickCount))+"px, 0px, 0px)";
    clickCount = clickCount - 1;
    if ((widthScreen >= 320) && (widthScreen < 568)) {
        if (clickCount < 5) { document.getElementById("buttonCarNext").style.display = "flex"; }
        if (clickCount == 0) { document.getElementById("buttonCarPrev").style.display = "none"; }
    }
    if ((widthScreen >= 568) && (widthScreen <= 1024)) {
        if (clickCount < 4) { document.getElementById("buttonCarNext").style.display = "flex"; }
        if (clickCount == 0) { document.getElementById("buttonCarPrev").style.display = "none"; }
    }
    if ((widthScreen > 1024) && (widthScreen <= 1366)) {
        if (clickCount < 3) { document.getElementById("buttonCarNext").style.display = "flex"; }
        if (clickCount == 0) { document.getElementById("buttonCarPrev").style.display = "none"; }
    }
    if (widthScreen > 1366) {
        if (clickCount < 2) { document.getElementById("buttonCarNext").style.display = "flex"; } 
        if (clickCount == 0) { document.getElementById("buttonCarPrev").style.display = "none"; }
    }
}
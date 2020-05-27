function test() {
    $('#modal-1').on('click', function () {
        if ( $(this).is(':checked') ) {
            var set = document.getElementById("lol");
            set.style.overflow = "hidden";
        } else {
            var set = document.getElementById("lol");
            set.style.overflow = "auto";
        }
    })
    $('#modal-2').on('click', function () {
        if ( $(this).is(':checked') ) {
            var set = document.getElementById("lol");
            set.style.overflow = "hidden";
        } else {
            var set = document.getElementById("lol");
            set.style.overflow = "auto";
        }
    })
    $('#modal-3').on('click', function () {
        if ( $(this).is(':checked') ) {
            var set = document.getElementById("lol");
            set.style.overflow = "hidden";
        } else {
            var set = document.getElementById("lol");
            set.style.overflow = "auto";
        }
    })
    $('#topmenu').hover(function() {
        var set = document.getElementById("submenu");
        set.style.visibility = "visible";
        set.style.opacity = "1";
        var set1 = document.getElementById("topmenu");
        set1.style.background = "#0006ffd0";
        var set2 = document.getElementById('linkMenu');
        set2.style.color = "#fff";
    }, function() {
        var set = document.getElementById("submenu");
        set.style.visibility = "hidden";
        set.style.opacity = "0";
        var set1 = document.getElementById("topmenu");
        set1.style.background = "";
        var set2 = document.getElementById('linkMenu');
        set2.style.color = "#000";
      });
}
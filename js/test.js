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
        set.style.background = "#333333bd"
        set.style.visibility = "visible";
        set.style.opacity = "1";
        set.style.transition = "0.25s"
        var set1 = document.getElementById("topmenu");
        set1.style.background = "#001dff99";
    }, function() {
        var set = document.getElementById("submenu");
        set.style.visibility = "hidden";
        set.style.opacity = "0";
        set.style.transition = "0.25s"
        var set1 = document.getElementById("topmenu");
        set1.style.background = "";
      });
}
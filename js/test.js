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
}
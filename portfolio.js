
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, true, 700, 500, 4000);
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, 0);
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, 275, 200, null, null, null, null);
});


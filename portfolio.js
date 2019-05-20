
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, true, 900, 250, 1000);
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, 0);
    
});


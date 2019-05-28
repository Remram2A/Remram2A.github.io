
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, true, 700, 500, 6000);
    var elems = document.querySelectorAll('.slider2');
    var instances = M.Slider.init(elems, false, 700, 500, 6000);
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, 1);
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, 275, 200, null, null, null, null);
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
});
function myFuncEnvoi() {
    alert("Message envoyé ! Merci ");

  }

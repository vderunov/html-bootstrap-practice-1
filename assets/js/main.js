// -------   Active Mobile Menu-----//

$(".menu-bar").on('click', function (e) {
    e.preventDefault();
    $("nav").toggleClass('hide');
    $("span", this).toggleClass("lnr-menu lnr-cross");
    $(".main-menu").addClass('mobile-menu');
});


$('.nav-item a:first').tab('show');

//onscroll

window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("myNav").className = "active";
    } else {
        document.getElementById("myNav").className = "";
    }
}
$(document).ready(function () {
    $("#nav a").on("click", function () {
        var target = $(this).data("target");

        if (target === "All") {
            $(".prev_con").show();
        } else {
            $(".prev_con").hide();
            $("." + target).show();
        }
        $("ul li").removeClass("active");
        $(this).parent().addClass("active");
    });
});


// Forms on content area
var libIframe = $('.main_con').find('#myframe');
if (libIframe.length > 0) {
    document.getElementById('myframe').onload = function () {
        calcHeight();
    };
}



var baseUrl = window.location.href;
document.querySelectorAll('.dynamic-link').forEach(function (iframe) {

    var relativePath1 = iframe.getAttribute('data-path');
    var fullUrlI = baseUrl + relativePath1;
    iframe.setAttribute('src', fullUrlI);
});


document.querySelectorAll('.dynamic-link').forEach(function (link) {
    var relativePath = link.getAttribute('data-path');
    var fullUrl = baseUrl + relativePath;
    link.setAttribute('href', fullUrl);
});

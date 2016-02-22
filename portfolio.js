$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        var hash = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 50
        }, 500);
        return false;
    });
    $('.btn-custom').click(function() {
    	alert("It can't work - it use only html&css :) Please send me e-mail: magdalena.pal90@gmail.com");
    });

    $('.nav a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
});



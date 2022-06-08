jQuery(document).ready(function() {
    var duration = 50;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 800) {
            jQuery('.to-top').fadeIn(500);
        } else {
            jQuery('.to-top').fadeOut(500);
        }
    });

    jQuery('.to-top').click(function(event) {
        event.preventDefault();
        jQuery('html').animate({scrollTop: 0}, duration);
        return false;
    })
});
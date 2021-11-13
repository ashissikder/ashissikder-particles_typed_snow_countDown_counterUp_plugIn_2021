$(document).ready(function(){
    $('banner-bg').parallax({
        imageSrc: 'images/banner.jpg'
    });
    const tilt = $('.image').tilt();
    new WOW().init();
    $("#[bgndVideo]").YTPlayer();
})

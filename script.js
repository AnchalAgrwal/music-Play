$(window).on('load', function(){
    $(".container").hide(1);
    $("#title").fadeOut(1).fadeIn(1500, function(){
        $(".container").fadeIn(1500);
    });
});

$("#happy").click(function(){
    window.open('happy.html');
});

$("#sad").click(function(){
    window.open('sad.html');
});

$("#love").click(function(){
    window.open('love.html');
});

$("#devotional").click(function(){
    window.open('devotional.html');
});

$("#motivation").click(function(){
    window.open('motivation.html');
});

$("#energy").click(function(){
    window.open('party.html');
});

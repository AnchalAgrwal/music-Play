$(window).on('load', function(){
    $(".container").hide(1);
    $("#title").fadeOut(1).fadeIn(1500, function(){
        $(".container").fadeIn(1500);
    });
});

$("#happy").click(function(){
    window.open('http://127.0.0.1:3000/Music%20playing%20site/happy.html');
});

$("#sad").click(function(){
    window.open('http://127.0.0.1:3000/Music%20playing%20site/sad.html');
});

$("#love").click(function(){
    window.open('http://127.0.0.1:3000/Music%20playing%20site/love.html');
});

$("#devotional").click(function(){
    window.open('http://127.0.0.1:3000/Music%20playing%20site/devotional.html');
});

$("#motivation").click(function(){
    window.open('http://127.0.0.1:3000/Music%20playing%20site/motivation.html');
});

$("#energy").click(function(){
    window.open('http://127.0.0.1:3000/Music%20playing%20site/party.html');
});
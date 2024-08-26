//adding border in the box
$(".one").mouseenter(function(){$(this).addClass('boxborder')});
$(".one").mouseleave(function(){$(this).removeClass('boxborder')});

//underlining the text
$("span").mouseenter(function(){$(this).addClass("enter")});
$("span").mouseleave(function(){$(this).removeClass("enter")});

//on clicking on playbutton pause button appears, the cover_image becomes dim, beats starts and song plays
let audioElement = new Audio('Motivational/5.mp3');

function makePlay(){
    $('.playbutton').each(function(){
        $(this).attr('src','playyy.png');
    })
    for(var i=1; i < 11; i++){
        covImg = '.'+ 'cover' + i + 'image';
        $(covImg).css('opacity', '1');
    }
}

let index = 0;

$('.playbutton').each(function(){
    $(this).click(function(){
        makePlay();
        index = $(this).attr('id');

        if(audioElement.currentTime > 0 && !audioElement.paused && $(audioElement).attr('src') == 'Motivational/'+index+'.mp3'){
            //already playing and we click on that song => pause it
            $(this).attr('src','playyy.png');
            audioElement.pause();
        }

        else if(audioElement.currentTime > 0 && audioElement.paused && $(audioElement).attr('src') == 'Motivational/'+index+'.mp3'){
            //played,paused and clicked  => play
            audioElement.currentTime = $('#'+index+'range').attr('value') * audioElement.duration/100;
            audioElement.play();
            $(this).attr('src','pause.png');

            //making cover image of the song to be darker
            covImg = '.'+ 'cover' + index + 'image';
            $(covImg).css('opacity', '0.5');
        }

        else{
            //not started or playing a different song
            audioElement.src = 'Motivational/' + index + '.mp3';
            $(this).attr('src','pause.png');
            audioElement.currentTime = 0;
            audioElement.play();

            //making cover image of the song to be darker
            covImg = '.'+ 'cover' + index + 'image';
            $(covImg).css('opacity', '0.5'); 
        }

        //on updating the range, shifting the song to that specified time
        range = '#' + index + 'range';
        $(range).change(function(){
            audioElement.currentTime = $(this).val() * audioElement.duration/100;
        })

        //updating range on playing the song
        $(audioElement).on('timeupdate',function(){
            progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
            $(range).attr('value', progress);
            console.log('here');
        })

    })
})

$('.prev').each(function(){
    $(this).click(function(){
        makePlay();
        index =  $(this).siblings('.playbutton').attr('id');

        if(index <= 1){index = 5;}
        else index = Number(index)-1;

        newId = '#' + index;
        $(newId).attr('src', 'pause.png');
        audioElement.src = 'Motivational/' + index + '.mp3';
        audioElement.currentTime = 0;
        audioElement.play();

        //making cover image of the song to be darker
        covImg = '.'+ 'cover' + index + 'image';
        $(covImg).css('opacity', '0.5');

        //on updating the range, shifting the song to that specified time
         $(range).change(function(){
            audioElement.currentTime = $(this).val() * audioElement.duration/100;
        })

        //updating range on playing the song
        range = '#' + index + 'range'
        $(audioElement).on('timeupdate',function(){
            progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
            $(range).attr('value','progress');
        })
    })
})

$('.next').each(function(){
    $(this).click(function(){
        makePlay();
        index =  $(this).siblings('.playbutton').attr('id');

        if(index >= 5){index = 1;}
        else index = Number(index)+1;

        newId = '#' + index;
        $(newId).attr('src', 'pause.png');
        audioElement.src = 'Motivational/' + index + '.mp3';
        audioElement.currentTime = 0;
        audioElement.play();

        //making cover image of the song to be darker
        covImg = '.'+ 'cover' + index + 'image';
        $(covImg).css('opacity', '0.5');
        overlayImg = '.' + index +'beats';
        bckImg = 'Motivational/'+index+'.png';
        $(overlayImg).css('background-image','url(bckImg)');

        //on updating the range, shifting the song to that specified time
        $(range).change(function(){
            audioElement.currentTime = $(this).val() * audioElement.duration/100;
        })

        //updating range on playing the song
        range = '#' + index + 'range'
        $(audioElement).on('timeupdate',function(){
            progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
            $(range).attr('value', progress);
        })
    })
})

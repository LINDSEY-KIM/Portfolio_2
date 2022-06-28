$(document).ready(function(){

    $(window).scroll(function(){

        var sct = $(window).scrollTop();
        // console.log(sct);

        var sct_head = $(".section_1").offset().top; 
        

        if(sct >= sct_head){

            $('header').css({
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
            });

        }else{
            $('header').css({
                backgroundColor: 'transparent',
            });
        }


    });

});
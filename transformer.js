/*	//	//	//	//	//	//	//	//	//	//	//	//	//
//													//
//	Transformer Plugin by Reuben @dalegroup.net	    //
//													//
//	//	//	//	//	//	//	//	//	//	//	//	//	*/

$( document ).ready(function() {
    $('.onclick-wrap').find('.default,.up,.right,.down,.left,flip-v,.flip-h').addClass("onclick");

    $(".onclick").on( "click", function(){
        $(this).toggleClass("onclick");
    });
    
    $(".onhover").mouseenter(function(){
        $(this).addClass("hovered");
        $(this).removeClass("onhover");
        
        $(".hovered").mouseleave(function(){
            $(this).removeClass("hovered");
            $(this).addClass("onhover");
        });
        
    });
    
    $('.anim').css('transition:0.3s ease all;');
    $('.anim.med').css('transition:0.5s ease all;');
    $('.anim.slow').css('transition:0.8s ease all;');
    
    
});
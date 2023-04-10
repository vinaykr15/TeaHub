
/////// Location Togling
$("#seeLoc").on("click",function(){
    $("#location").css("display","block");
        $('html, body').animate({
        scrollTop: $("#location").offset().top
    }, 1000);
});

$("#eventBtn").on("click",function(){
    $("#location").css("display","block");
        $('html, body').animate({
        scrollTop: $("#location").offset().top
    }, 1000);
});


////Menu Togling
function toggleMenu(){
    $("#teahubMenu").slideToggle("slow");
    $("#eventBtn").slideToggle("slow");
    $("#showMenu").slideToggle() ;
}

////Gallery Togling
function toggleGallery(){
    $("#gallery").slideToggle("slow");
    //$("#showGallery").slideToggle() ;
}

$(document).ready(function(){
$("#showMenu").on("click",toggleMenu);
$("#showGallery").on("click",toggleGallery)    
$('[data-magnify=gallery]').magnify();
});
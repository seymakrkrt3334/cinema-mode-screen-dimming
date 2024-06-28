$(document).ready(function(){
    $(".kresim").click(function(){
        var ResimAdi = $(this).attr("id");
        var Resimno = ResimAdi.slice(6);
        var tiklananresim = "#bresim" + Resimno;
        $(tiklananresim).fadeIn();
    });

    $(".bresim").click(function(){
        $(this).fadeOut();
    });

    $(".ic").click(function(event){
        event.stopPropagation();
    });
});
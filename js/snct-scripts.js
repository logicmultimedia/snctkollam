// SNCT JavaScript Document
$(function(){
    $("main").click(function(e){
        if ($(".collapse.show").is(":visible")) {
            $('.collapse').collapse('hide');	
        }
    });
});
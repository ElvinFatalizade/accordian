$(document).ready(function(){
    var accordion =$(".accordion h3");
    $(function(){
        $(".accordion h3").click(function(){
            $(this).parent().parent().find('ul').slideUp();
            if(!$(this).next().is(":visible")){
                $(this).next().slideDown();    
            }
        });   
    });
});


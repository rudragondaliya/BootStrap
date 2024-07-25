$('#img2,#img3').hide()
$(".accordion-button").on("click",function(){
    $(' #img1,#img2,#img3').hide() 
    $($(this).attr("for")).fadeToggle()
})
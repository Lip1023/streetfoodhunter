$( document ).ready()
$('#start-btn').on('click',function(){
    $('#screenvideo')[0].play();
})
$('#stop-btn').on('click',function(){
    $('#screenvideo')[0].pause();
    $('#screenvideo').addClass('hidden')
    $('#foodimage').removeClass('hidden')
})



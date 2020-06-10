// let firstinput = null;
// let secondinput = null;

$( document ).ready()
$('#start-btn').on('click',function(){
    $('#screenvideo')[0].play();
})
$('#stop-btn').on('click',function(){
    $('#screenvideo')[0].pause();
    $('#screenvideo').addClass('hidden')
    $('#foodimage').removeClass('hidden')
})

// sign up page 
$( document ).ready()
//username no longer than 15chr
$('#usernameInput').on('keydown', function (e) { 
    var input = e.target.value;
    console.log(input)
    if (input.length > 35) { 
        $(this).css('border', 'solid 1.5px rgba(255, 0, 0, 0.7)'); 
    } else {
        $(this).css('border', 'solid 2px rgba(0, 128, 0, 0.4');
    }
});


//pw section
$('#pwConfirm').on('blur', function(e){
    let firstinput= e.target.value;
if(firstinput.length < 8){
    $('#pwInput').css('border','solid 1.5px rgba(255, 0, 0, 0.7)');
}

else {
    $('#pwInput').css('border', 'solid 2px rgba(0, 128, 0, 0.4');
}
})

//pw confirmation
$('#pwConfirm').on('blur', function(e){

    firstinput= $('#pwInput').val();
    secondinput= e.target.value;
 
    

    if( !(secondinput===firstinput)){

        $('#pwConfirm').css('border', 'solid 2px red'); 
    }
    else {
        $('#pwConfirm').css('border', 'solid 1px green');
    }
})

$( () => {
    $(".form-check-input").on("change", () => {
        var radioButtons = $(".form-check-input:checked").val();
        //var selectedIndex = 1 + radioButtons.find(':checked');
        console.log(Number(radioButtons));
    })
})
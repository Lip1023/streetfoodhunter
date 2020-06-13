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

// $('#call-btn').on('click',function(){
//     $('#randomrecipe').removeClass('hidden')
//     $('#recipenum').addClass('hidden')
// })


// sign up page 
$( document ).ready()
//username no longer than 15chr
$('#usernameInput').on('keydown', function (e) { 
    var input = e.target.value;
    console.log(input)
    if (input.length > 35) { 
        $(this).css('border', 'solid 1.5px rgba(255, 0, 0, 0.7)'); 
    } else {
        $(this).css('border', 'solid 2px rgba(0, 128, 0, 0.4)');
    }
});


//pw section
$('#pwConfirm').on('blur', function(e){
    let firstinput= e.target.value;
if(firstinput.length < 8){
    $('#pwInput').css('border','solid 1.5px rgba(255, 0, 0, 0.7)');
}

else {
    $('#pwInput').css('border', 'solid 2px rgba(0, 128, 0, 0.4)');
}
})

//pw confirmation
$('#pwConfirm').on('blur', function(e){

    firstinput= $('#pwInput').val();
    secondinput= e.target.value;
 
    

    if( !(secondinput===firstinput)){

        $('#pwConfirm').css('border', 'solid 1.5px rgba(255, 0, 0, 0.7)'); 
    }
    else {
        $('#pwConfirm').css('border', 'solid 2px rgba(0, 128, 0, 0.4)');
    }
})

//recipe individual page 
$("#fire").click( (event) => {
    event.preventDefault();
    let validate_result = true;
    $('.nullcheck').each( function (index) {
        validate_result = validate_result && nullCheck($(this));
    });
    if ( validate_result === true ) {
        let recipeName = $("#recipename").val();
        let cookingTime = $("#cookingtime").val();
        let recipeDescription = $("#recipedescription").val();
        let recipeIngredients = $("#recipeingredients").val();
        let difficulty = Number($(".form-check-input:checked").val());
        let recipeHowto = $("#recipehowto").val();    



        let blablabla = {
            recipeName: recipeName,
            cookingTime: cookingTime,
            recipeDescription: recipeDescription,
            recipeIngredients: recipeIngredients,
            difficulty: difficulty,
            recipeHowto: recipeHowto,
        };

        $.post("/newrecipe", blablabla, (completeMessage) => {
            alert(completeMessage);
        });

     
    } else {
        alert("Please complete the form before submission");
    };
});
// create function to validate
function nullCheck(elem) {
    if (elem.val().length == 0) {
        elem.attr('style','border: solid 1.5px rgba(255, 0, 0, 0.7)'); //change border to red
        return false;
    } else {
        elem.attr('style','border: solid 2px rgba(0, 128, 0, 0.4)');  // recover border
        return true;
    }
}
//set event for blur
$('.nullcheck').each( function(index) {
    $(this).blur( function() {
        nullCheck($(this));
    });
});

$('#ice').click( (event) => {
    event.preventDefault();
    let pathArray = window.location.pathname.split('/');
    let id = pathArray[pathArray.length - 1];
    let rating = $('input[name=rate]:checked', '.rate').val();
    let comment_content = $("#exampleFormControlTextarea1").val();
    let blablabla = {
        id: id,
        rating: rating,
        comment_content: comment_content
    }
    let sure = confirm("Are you sure?");
    if (sure) {
        $.post("/comment", blablabla, (completeMessage) => {
            alert(completeMessage);
        });
    }
});

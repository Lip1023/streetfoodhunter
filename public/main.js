//searchbar TB selection
$('#selectTB').on('change', function () {
    console.log('are you working')
    $('#selectTB').removeClass("grey")
    $('#selectTB').addClass("black")
})

$(document).ready()
$('#start-btn').on('click', function () {
    $('#screenvideo')[0].play();
})
$('#stop-btn').on('click', function () {
    $('#screenvideo')[0].pause();
    $('#screenvideo').addClass('hidden')
    $('#foodimage').removeClass('hidden')
    $('#whattoeat').addClass('hidden')
})

// sign up page 
$(document).ready()
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
$('#pwConfirm').on('blur', function (e) {
    let firstinput = e.target.value;
    if (firstinput.length < 8) {
        $('#pwInput').css('border', 'solid 1.5px rgba(255, 0, 0, 0.7)');
    }
    else {
        $('#pwInput').css('border', 'solid 2px rgba(0, 128, 0, 0.4)');
    }
})
//pw confirmation
$('#pwConfirm').on('blur', function (e) {
    firstinput = $('#pwInput').val();
    secondinput = e.target.value;
    if (!(secondinput === firstinput)) {
        $('#pwConfirm').css('border', 'solid 1.5px rgba(255, 0, 0, 0.7)');
    }
    else {
        $('#pwConfirm').css('border', 'solid 2px rgba(0, 128, 0, 0.4)');
    }
})
//posting new recipe(newrecipe page)
$("#fire").click((event) => {
    event.preventDefault();
    let validate_result = true;
    $('.nullcheck').each(function (index) {
        validate_result = validate_result && nullCheck($(this));
    });
    if (validate_result === true) {
        let formdata = new FormData();
        let temp1 = document.getElementById("file").files[0];
        formdata.append('file', temp1);
        
        $.ajax({
            type: "POST",
            url: "https://img.eservice-hk.net/api.php?version=2",
            data: formdata,
            cache: false,
            contentType: false,
            processData: false
        })
        .done((response) => {
            // console.log(JSON.parse(response).url);
            let temp2 = {
                recipeName: $("#recipename").val(),
                cookingTime: $("#cookingtime").val(),
                recipeDescription: $("#recipedescription").val(),
                recipeIngredients: $("#recipeingredients").val(),
                difficulty: $(".form-check-input:checked").val(),
                recipeHowto: $("#recipehowto").val(),
                recipePhoto: JSON.parse(response).url
            };
        $.post("/newrecipe", temp2)
                .done((completeMessage) => {
                    alert(completeMessage);
                })
                .fail((error) => {
                    alert(error);
                });
        })
        .fail((error) => {
            alert(error);
        });
    } else {
        alert("Please complete the form before submission");
    };
});

// create function to validate
function nullCheck(elem) {
    if (elem.val().length == 0) {
        elem.attr('style', 'border: solid 1.5px rgba(255, 0, 0, 0.7)'); //change border to red
        return false;
    } else {
        elem.attr('style', 'border: solid 2px rgba(0, 128, 0, 0.4)');  // recover border
        return true;
    }
}
//set event for blur
$('.nullcheck').each(function (index) {
    $(this).blur(function () {
        nullCheck($(this));
    });
});


$('#commentarea').on('click',function(){
    $('#ice').removeClass('hidden')
})

// $('#commentarea').on('blur',function(){
//     $('#ice').addClass('hidden')
// })

//submitting comment on recipe page
$('#ice').click((event) => {
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


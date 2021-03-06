//hover on recipes on navbar, show filter buttons
$('#navrecipe').on('mouseover',function(e){
    $('#hiddenfilter').removeClass('hidden');
    $('#hiddenfilter').addClass('flexlayout');
})

$('#hiddenfliter').on('mouseout',function(e){
    $(this).addClass('hidden');
    $(this).removeClass('flexlayout')
})

//searchbar TB selection
$('#selectTB').on('change', function () {
    $('#selectTB').removeClass("grey")
    $('#selectTB').addClass("black")
})



//click searchbar, optionbar appears
$('#searchbarinput').on('click',function(){
    $('#selectTB').removeClass('hidden')
    $('#placeholder').removeClass('hidden')
})


//video play
$(document).ready()
$('#start-btn').on('click', function () {
    $('#screenvideo')[0].play();
})
$('#stop-btn').on('click', function () {
    $('#screenvideo')[0].pause();
    $('#screenvideo').addClass('hidden')
    $('#foodimage').removeClass('hidden')
    $('#whattoeat').addClass('hidden')
    $('#tvscreen').addClass('animLine')
    $('#tvscreen').addClass('animate__animated animate__tada')
})

// sign up page 
$(document).ready()
//username no longer than 15chraracters
$('#usernameInput').on('keydown', function (e) {
    var input = e.target.value;
    // console.log(input)
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
                    cuisineName: $('#cuisine select').val(),
                    foodType: $('#foodtype select').val(),
                    foodName: $('#foodnamesection select').val(),
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
                        window.location.href = '/recipe';
                    })
                    .fail((error) => {
                        console.log(error);
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
    if (!elem.val()) {  // if value not exist
        elem.attr('style', 'border: solid 1.5px rgba(255, 0, 0, 0.7)'); //change border to red
        return false;
    };
    if (elem.val().length == 0) {
        elem.attr('style', 'border: solid 1.5px rgba(255, 0, 0, 0.7)'); //change border to red
        return false;
    } else {
        elem.attr('style', 'border: solid 2px rgba(0, 128, 0, 0.4)');  // recover border
        return true;
    };
}

//set event for blur
$('.nullcheck').each(function (index) {
    $(this).blur(function () {
        nullCheck($(this));
    });
});

//when click commentbox, have submit button
$('#commentarea').on('click', function () {
    $('#ice').removeClass('hidden')
    $('#cancel').removeClass('hidden')
})

$('#cancel').on('click', function () {
    $('.cbtn').addClass('hidden')
})

//submitting comment on recipe page
$('#ice').click((event) => {
    event.preventDefault();
    let recipe_id = $('#recipe_id').val();
    let rating = $('input[name=rate]:checked', '.rate').val();
    let comment_content = $("#exampleFormControlTextarea1").val();
    let blablabla = {
        recipe_id: recipe_id,
        rating: rating,
        comment_content: comment_content
    };
    let sure = confirm("Are you sure?");
    if (sure) {
        $.post("/comment", blablabla, (completeMessage) => {
            alert(completeMessage);
            window.location.reload();
        });
    }
});

$(".addfav").click((event) => {
    event.preventDefault();
    let recipe_id = event.currentTarget.alt;
    let blablabla = {
        recipe_id: recipe_id
    };
    $.post("/addfav", blablabla, (completeMessage) => {
        alert(completeMessage);
    });
});



$(".deletefav").click( (event) => {
    event.preventDefault();
    let recipe_id = event.currentTarget.alt;
    let blablabla = {
        recipe_id: recipe_id
    };
    $.post("/deletefav", blablabla, (completeMessage) => {
        window.location.reload();
        alert(completeMessage);
    });
});

$("#sort").change(function(){

    const urlParams = new URLSearchParams(window.location.search);
    let tag = urlParams.get('tag');
    let order_by = $(this).children(":selected").html();
    let blablabla = {
        tag: tag,
        order_by: order_by
    };
    window.location.href = '/recipe?' + $.param(blablabla);
});

$("#filters button").click(function () {
    if ($(this).html() === 'All') {
        $('#recipe_tag').removeAttr('value');
    } else {
        $('#recipe_tag').attr('value', $(this).html());
    };
    let tag = $('#recipe_tag').val();
    let blablabla = { tag: tag };
    window.location.href = '/recipe?' + $.param(blablabla);
});

$('#cuisine select').change(function() {
    let food_type = $('#foodtype select').val();
    let blablabla = {
        cuisine_name: $(this).val(),
        food_type: food_type
    };
    window.location.href = '/newrecipe?' + $.param(blablabla);
});

$(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let cuisine_name = urlParams.get('cuisine_name');
    let food_type = urlParams.get('food_type');
    if (cuisine_name) {
        $('#cuisine select').val(cuisine_name);
    };
    if (food_type) {
        $('#foodtype select').val(food_type);
    };
    if ($('#selectTA').val()) {
        $('#selectTB').val($('#selectTA').val());
    }
});

//about
$("#exploreButton").on('click', function (e) {
    document.getElementById("more").classList.remove("hidden")
    document.getElementById("exploreButton").classList.add("hidden")
})

//click arrow, close the tab
$("#close").on('click', function (e) {
    document.getElementById("more").classList.add("hidden")
    document.getElementById("exploreButton").classList.remove("hidden")
    document.getElementById("close").classList.add("hidden")
})
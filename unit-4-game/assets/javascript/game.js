var random_result;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function() {

    $(".crystals").empty();

    var images = [
        "assets/images/crystal1.jpg",
        "assets/images/crystal2.jpg",
        "assets/images/crystal3.jpg",
        "assets/images/crystal4.jpg",]

    random_result = Math.floor(Math.random() * 69) + 30;

    $("#result").html('Random Result: ' + random_result);

    for(var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        crystal.css({
            "background-image":"url(" + images[i] + ")",
            "background-size": "cover"
        });

        $(".crystals").append(crystal);
    }
    $("#previous").html("Total Score: " + previous);
}

resetAndStart();


$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    if(previous > random_result) {

        lost++;

        $("#lost").html("You Lost: " + lost);

        previous = 0;

        resetAndStart();
    }
    else if(previous === random_result) {
       
        win++;

        $("#win").html("You Win: " + win);

        previous = 0;
        
        resetAndStart();
    }

});
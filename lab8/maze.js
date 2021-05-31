$(document).ready(eventHandler);

var lost = false;
var won = false;

function eventHandler() {
    $(".boundary").mouseover(function () {
        if(!won && !lost){
            handleDefeat();
        }
    });

    $("#maze").mouseleave(function () {
        if(!won && !lost){
            handleDefeat();
        }
    });

    $("#end").mouseover(function () {
        if(!lost && !won ){
            $("#status").text("You Win! :)");
            won = true;
        }
    });

    $("#start").click(function () {
        $("#status").text("Click the 'S' to begin.");
        $( ".boundary" ).each(function() {
            $(this).removeClass("youlose");
            lost = false;
            won = false;
        });
        event.stopImmediatePropagation();
    });
}

function handleDefeat() {
    $("#status").text("Sorry, You Lost :(");
    $( ".boundary" ).each(function() {
        $(this).addClass("youlose");
        if(!lost){
            lost = true;
        }
    });
    event.stopImmediatePropagation();
}

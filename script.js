
console.log("ur code is linked")

$(document).ready(function(){
  $(".intro").click(function(){
    $(this).hide();
  });
});

//notes//

$( function() {
  $( ".note" ).draggable();
} );

$( ".note" ).draggable({ containment: ".draggablenotes", scroll: false });
$( ".note" ).draggable({ stack: ".note" });

$(".clue1").click(clueOne)

function clueOne(){
  $(".collected1").text("Behaviours")
}

$(".clue2").click(clueTwo)

function clueTwo(){
  $(".collected2").text("Age")
}

$(".clue3").click(clueThree)

function clueThree(){
  $(".collected3").text("Body build")
}

$(".clue4").click(clueFour)

function clueFour(){
  $(".collected4").text("Appearance")
}

$(".clue5").click(clueFive)

function clueFive(){
  $(".collected5").text("Bomber's first target")
}

$(".clue6").click(clueSix)

function clueSix(){
  $(".collected6").text("Speech pattern")
}

$(".clue7").click(clueSeven)

function clueSeven(){
  $(".collected7").text("Potential ethnicity")
}

$(".clue8").click(clueEight)

function clueEight(){
  $(".collected8").text("Handwriting")
}

$(".clue9").click(clueNine)

function clueNine(){
  $(".collected9").text("Location")
}



$( function() {
  $( "#sortable" ).sortable();
} );

//for newspaper//

$(document).ready(function(){
  $(".newspaper").click(function(){
    $(this).hide();
  });
});
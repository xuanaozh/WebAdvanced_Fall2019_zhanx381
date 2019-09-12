//console log version


let initialStep = 'What you wanna eat for dinner today? Tell how hungry you are on a scale 1 to 9.'
console.log(initialStep);



document.addEventListener('keydown', function(event) {
   if(event.keyCode == 49||event.keyCode == 50||event.keyCode==51) {
       console.log('Maybe you want some kyle salad? If is not engouh, might be try some numbers greater than 3.')
    }
    else if(event.keyCode == 52||event.keyCode == 53||event.keyCode == 54) {
        console.log('Couple of carnitas taco should be good.Still hungry? Try numbers greater than 6.')
    }
    else if(event.keyCode == 55||event.keyCode == 56||event.keyCode == 57) {
        console.log('Steak fest is waiting for you. Should be feed u well.')
    }
});



//web version

$(document).ready(function(){

    //question
    $(document).keypress(function(event){
        if ( event.keyCode == 32 ) {
            $("#question").css("opacity", "1");
         }
       
    })

    //box1
    $(document).keypress(function(event){
        if (event.keyCode == 49||event.keyCode == 50||event.keyCode==51) {
            $("#box1").css("opacity", "1");
         }
       
    })

    //box2
    $(document).keypress(function(event){
        if (event.keyCode == 52||event.keyCode == 53||event.keyCode == 54) {
            $("#box2").css("opacity", "1");
         }
       
    })

    //box3
    $(document).keypress(function(event){
        if (event.keyCode == 55||event.keyCode == 56||event.keyCode == 57 ) {
            $("#box3").css("opacity", "1");
         }
       
    })


})
// function showDiv(elem){
//     elem.style.fill = "white";
//     console.log(99);
// }




// function showDiv(){
//     console.log(99);
//     this.classList.add("bar-highlight");
    
// }
// function show(){
//   hoverDiv1.style.opacity ='1';

// }


// function mouseOver() {
//   //this.style.opacity = '1';
//   // rumpSteak.style.opacity = '1';
//   // ribSteak.style.opacity = '1';
//   //no.1 hover
//   hoverDiv1.style.opacity ='1';
//     // console.log(99);
    
//   }


// function mouseOut() {
//   //this.style.opacity = '0';

//   // rumpSteak.style.opacity = '0';
//   // ribSteak.style.opacity = '0';

//   //no.1 hover out
//   hoverDiv1.style.opacity ='0';
// }





// //rumpSteak hover
// var rumpSteak = document.getElementById("rumpSteak");

// rumpSteak.addEventListener("mouseover", mouseOver);
// rumpSteak.addEventListener("mouseout", mouseOut);
// hoverDiv1.addEventListener("mouseover",mouseOver);
// hoverDiv1.addEventListener("mouseout",mouseOut);


// //ribSteak hover
// // var ribSteak = document.getElementById("ribSteak");

// ribSteak.addEventListener("mouseover", mouseOver);
// ribSteak.addEventListener("mouseout", mouseOut);

//json data section
window.addEventListener('DOMContentLoaded', function () {
  loadData();
});


function loadData(){
  $.getJSON("../data.json",function(data){
     
   console.log(data);

   smallHoverInfo(data);
      });
}
                                                                                                                                              

function smallHoverInfo(data){
  let source =  $("#hoverDiv-template").html();
  let template = Handlebars.compile(source);
  let result = template(data);
  let list = $(".hoverDiv")
  
  list.append(result);
}



//jQuery section
$(document).ready(function(){

  //rib
  $("#rib").mouseover(function(){
      $("#hoverDiv1").css("opacity", "1");
  })
  $("#rib").mouseout(function(){
    $("#hoverDiv1").css("opacity", "0");
  });

  //chuck
  $("#chuck").mouseover(function(){
    $("#hoverDiv2").css("opacity", "1");
})
$("#chuck").mouseout(function(){
  $("#hoverDiv2").css("opacity", "0");
});

  //rump
  $("#rump").mouseover(function(){
    $("#hoverDiv3").css("opacity", "1");
})
$("#rump").mouseout(function(){
  $("#hoverDiv3").css("opacity", "0");
});

  //sirloin
  $("#sirloin").mouseover(function(){
    $("#hoverDiv4").css("opacity", "1");
})
$("#sirloin").mouseout(function(){
  $("#hoverDiv4").css("opacity", "0");
});

  //topside
  $("#topside").mouseover(function(){
    $("#hoverDiv5").css("opacity", "1");
})
$("#topside").mouseout(function(){
  $("#hoverDiv5").css("opacity", "0");
});

  //silverside
  $("#silverside").mouseover(function(){
    $("#hoverDiv6").css("opacity", "1");
})
$("#silverside").mouseout(function(){
  $("#hoverDiv6").css("opacity", "0");
});


//leg
$("#leg").mouseover(function(){
  $("#hoverDiv7").css("opacity", "1");
})
$("#leg").mouseout(function(){
$("#hoverDiv7").css("opacity", "0");
});

//knuckle
$("#knuckle").mouseover(function(){
  $("#hoverDiv8").css("opacity", "1");
})
$("#knuckle").mouseout(function(){
$("#hoverDiv8").css("opacity", "0");
});


//flank
$("#flank").mouseover(function(){
  $("#hoverDiv9").css("opacity", "1");
})
$("#flank").mouseout(function(){
$("#hoverDiv9").css("opacity", "0");
});

//brisket
$("#brisket").mouseover(function(){
  $("#hoverDiv10").css("opacity", "1");
})
$("#brisket").mouseout(function(){
$("#hoverDiv10").css("opacity", "0");
});

//clod
$("#clod").mouseover(function(){
  $("#hoverDiv11").css("opacity", "1");
})
$("#clod").mouseout(function(){
$("#hoverDiv11").css("opacity", "0");
});


//shank
$("#shank").mouseover(function(){
  $("#hoverDiv12").css("opacity", "1");
})
$("#shank").mouseout(function(){
$("#hoverDiv12").css("opacity", "0");
});

})

//open popup



$("#shank,#clod,#brisket,#flank,#knuckle,#leg,#silverside,#topside,#sirloin,#rib,#rump,#chuck").click(function(){
  $("#mySideNav").addClass("openMenu");
})


$("#closeIcon").click(function(){
  $("#mySideNav").removeClass("openMenu")
})
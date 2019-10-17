//json data section
window.addEventListener('DOMContentLoaded', function () {
  loadData();
});


function loadData(){
  $.getJSON("data.json",function(data){
     
   console.log(data);

   smallHoverInfo(data);
   navInfo(data);
      });
  
    
}
                                                                                                                                              

function smallHoverInfo(data){
  let source =  $("#hoverDiv-template").html();
  let template = Handlebars.compile(source);
  let result = template(data);
  let list = $(".hoverDiv")
  
  list.append(result);
}


function navInfo(data){
  let source =  $("#infoDiv-template").html();
  let template = Handlebars.compile(source);
  let result = template(data);
  let list = $(".infoDiv")
  
  list.append(result);
}


//open popup


$("#shank,#clod,#brisket,#flank,#knuckle,#leg,#silverside,#topside,#sirloin,#rib,#rump,#chuck").click(function(){
  $("#mySideNav").addClass("openMenu"); 

 
})

// $("#shank,#clod,#brisket,#flank,#knuckle,#leg,#silverside,#topside,#sirloin,#rib,#rump,#chuck").mouseover(function(){
//   $(".hoverDivX").css("opacity", "1")
 
// })

$("#shank,#clod,#brisket,#flank,#knuckle,#leg,#silverside,#topside,#sirloin,#rib,#rump,#chuck").mouseout(function(){
  $(".hoverDivX").css("opacity", "0")
 
})




// $("#shank,#clod,#brisket,#flank,#knuckle,#leg,#silverside,#topside,#sirloin,#rib,#rump,#chuck").mouseout(function(){
//   $("#mySideNav").removeClass("openMenu"); 
// })


$("#closeIcon").click(function(){
  $("#mySideNav").removeClass("openMenu")
})



//jQuery section
// $(document).ready(function(){

  //rib
  $("#rib").mouseover(function(){
      $("#1.hoverDivX").css("opacity", "1");
  })
  $("#rib").mouseout(function(){
    $("#1.hoverDivX").css("opacity", "0");
  });

  //chuck
  $("#chuck").mouseover(function(){
    $("#2.hoverDivX").css("opacity", "1");
})
$("#chuck").mouseout(function(){
  $("#2.hoverDivX").css("opacity", "0");
});

  //rump
  $("#rump").mouseover(function(){
    $("#3.hoverDivX").css("opacity", "1");
})
$("#rump").mouseout(function(){
  $("#3.hoverDivX").css("opacity", "0");
});

  //sirloin
  $("#sirloin").mouseover(function(){
    $("#4.hoverDivX").css("opacity", "1");
})
$("#sirloin").mouseout(function(){
  $("#4.hoverDivX").css("opacity", "0");
});

  //topside
  $("#topside").mouseover(function(){
    $("#5.hoverDivX").css("opacity", "1");
})
$("#topside").mouseout(function(){
  $("#5.hoverDivX").css("opacity", "0");
});

  //silverside
  $("#silverside").mouseover(function(){
    $("#.hoverDivX").css("opacity", "1");
})
$("#silverside").mouseout(function(){
  $("#6.hoverDivX").css("opacity", "0");
});


//leg
$("#leg").mouseover(function(){
  $("#7.hoverDivX").css("opacity", "1");
})
$("#leg").mouseout(function(){
$("#7.hoverDivX").css("opacity", "0");
});

//knuckle
$("#knuckle").mouseover(function(){
  $("#8.hoverDivX").css("opacity", "1");
})
$("#knuckle").mouseout(function(){
$("#8.hoverDivX").css("opacity", "0");
});


//flank
$("#flank").mouseover(function(){
  $("#9.hoverDivX").css("opacity", "1");
})
$("#flank").mouseout(function(){
$("#9.hoverDivX").css("opacity", "0");
});

//brisket
$("#brisket").mouseover(function(){
  $("#10.hoverDivX").css("opacity", "1");
})
$("#brisket").mouseout(function(){
$("#10.hoverDivX").css("opacity", "0");
});

//clod
$("#clod").mouseover(function(){
  $("#11.hoverDivX").css("opacity", "1");
})
$("#clod").mouseout(function(){
$("#11.hoverDivX").css("opacity", "0");
});


//shank
$("#shank").mouseover(function(){
  $("#12.hoverDivX").css("opacity", "1");
})
$("#shank").mouseout(function(){
$("#12.hoverDivX").css("opacity", "0");
});


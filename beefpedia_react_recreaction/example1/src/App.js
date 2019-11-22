import React,{Component} from 'react';
import { ReactComponent as Logo } from './beef_cuts.svg';
import './App.css';
import Header from './Components/Header/Header';
import Division from './Components/Division/Division';
import $ from "jquery";



class App extends Component {

    componentDidMount() {
      //scroll effect
      $("#0.smallDiv").mouseenter(function (){
        $(".largeInfoContainer").animate({
          scrollTop: $("#l0.largeDiv").offset().top
        }, 1000);

      })


      $("#4.smallDiv").mouseenter(function (){
        $(".largeInfoContainer").animate({
          scrollTop: $("#l4.largeDiv").offset().top
        }, 1000);
       
      })
    
        $("#7.smallDiv").mouseenter(function (){
          $(".largeInfoContainer").animate({
            scrollTop: $("#l11.largeDiv").offset().top
          }, 1000)
        })

        $("#11.smallDiv").mouseenter(function (){
          $(".largeInfoContainer").animate({
            scrollTop: $("#l11.largeDiv").offset().top
          }, 1000)
        })


    //verision 1 it works
    //trigger rib
      $("#rib").mouseover(function(){
        $("#rib").css("opacity","1");
        $("#0.smallDiv").addClass("show");
        $("#l0.largeDiv").addClass("borderR");
    })

    $( "#0.smallDiv" ).mouseover(function() {
        $("#rib").css("opacity","1");
       $("#rib").addClass("smallShow");
       $("#l0.largeDiv").addClass("borderW");
      });

      $( "#l0.largeDiv" ).mouseover(function() {
        $("#rib").css("opacity","1");
       $("#rib").addClass("smallShow");
       $("#0.smallDiv").addClass("borderW");
      });


    //not-trigger rib
    $("#rib").mouseout(function(){
      $("#rib").css("opacity","0");
    $("#0.smallDiv").removeClass("show");
    $("#l0.largeDiv").removeClass("borderR");
    });
    $( "#0.smallDiv" ).mouseout(function() {
        $("#rib").css("opacity","0");
       $("#rib").removeClass("smallShow");
       $("#l0.largeDiv").removeClass("borderW");
      });
      $( "#l0.largeDiv" ).mouseout(function() {
        $("#rib").css("opacity","0");
       $("#rib").removeClass("smallShow");
       $("#0.smallDiv").removeClass("borderW");
      });

      //trigger chuck
      $("#chuck").mouseover(function(){
        $("#chuck").css("opacity","1");
        $("#1.smallDiv").addClass("show");
        $("#l1.largeDiv").addClass("borderR");
    })

    $( "#1.smallDiv" ).mouseover(function() {
        $("#chuck").css("opacity","1");
       $("#chuck").addClass("smallShow");
       $("#l1.largeDiv").addClass("borderW");
      });
      $( "#l1.largeDiv" ).mouseover(function() {
        $("#chuck").css("opacity","1");
       $("#chuck").addClass("smallShow");
       $("#1.smallDiv").addClass("borderW");
      });

      //not-trigger chuck
      $("#chuck").mouseout(function(){
        $("#chuck").css("opacity","0");
        $("#1.smallDiv").removeClass("show");
        $("#l1.largeDiv").removeClass("borderR");
        });
        $( "#1.smallDiv" ).mouseout(function() {
            $("#chuck").css("opacity","0");
           $("#chuck").removeClass("smallShow");
           $("#l1.largeDiv").removeClass("borderW");
          });
          $( "#l1.largeDiv" ).mouseout(function() {
            $("#chuck").css("opacity","0");
           $("#chuck").removeClass("smallShow");
           $("#1.smallDiv").removeClass("borderW");
          });


        //trigger rump
        $("#rump").mouseover(function(){
          $("#rump").css("opacity","1");
          $("#2.smallDiv").addClass("show");
          $("#l2.largeDiv").addClass("borderR");
      })

      $( "#2.smallDiv" ).mouseover(function() {
          $("#rump").css("opacity","1");
         $("#rump").addClass("smallShow");
         $("#l2.largeDiv").addClass("borderW");
        });
        $( "#l2.largeDiv" ).mouseover(function() {
          $("#rump").css("opacity","1");
         $("#rump").addClass("smallShow");
         $("#2.smallDiv").addClass("borderW");
        });
        //not-trigger rump
        $("#rump").mouseout(function(){
          $("#rump").css("opacity","0");
          $("#2.smallDiv").removeClass("show");
          $("#l2.largeDiv").removeClass("borderR");
          });
          $( "#2.smallDiv" ).mouseout(function() {
              $("#rump").css("opacity","0");
             $("#rump").removeClass("smallShow");
             $("#l2.largeDiv").removeClass("borderW");
            });
            $( "#l2.largeDiv" ).mouseout(function() {
              $("#rump").css("opacity","0");
             $("#rump").removeClass("smallShow");
             $("#2.smallDiv").removeClass("borderW");
            });

            //trigger sirloin
            $("#sirloin").mouseover(function(){
              $("#sirloin").css("opacity","1");
              $("#3.smallDiv").addClass("show");
              $("#l3.largeDiv").addClass("borderR");
          })
  
          $( "#3.smallDiv" ).mouseover(function() {
              $("#sirloin").css("opacity","1");
             $("#sirloin").addClass("smallShow");
             $("#l3.largeDiv").addClass("borderW");
            });
            $( "#l3.largeDiv" ).mouseover(function() {
              $("#sirloin").css("opacity","1");
             $("#sirloin").addClass("smallShow");
             $("#3.smallDiv").addClass("borderW");
            });
            //not-trigger sirloin
            $("#sirloin").mouseout(function(){
              $("#sirloin").css("opacity","0");
              $("#3.smallDiv").removeClass("show");
              $("#l3.largeDiv").removeClass("borderR");
              });
              $( "#3.smallDiv" ).mouseout(function() {
                  $("#sirloin").css("opacity","0");
                 $("#sirloin").removeClass("smallShow");
                 $("#l3.largeDiv").removeClass("borderW");
                });
                $( "#l3.largeDiv" ).mouseout(function() {
                  $("#sirloin").css("opacity","0");
                 $("#sirloin").removeClass("smallShow");
                 $("#3.smallDiv").removeClass("borderW");
                });


                //trigger Topside
                $("#topside").mouseover(function(){
                  $("#topside").css("opacity","1");
                  $("#4.smallDiv").addClass("show");
                  $("#l4.largeDiv").addClass("borderR");
              })
      
              $( "#4.smallDiv" ).mouseover(function() {
                  $("#topside").css("opacity","1");
                 $("#topside").addClass("smallShow");
                 $("#l4.largeDiv").addClass("borderW");
                });
                $( "#l4.largeDiv" ).mouseover(function() {
                  $("#topside").css("opacity","1");
                 $("#topside").addClass("smallShow");
                 $("#4.smallDiv").addClass("borderW");
                });
                //not-trigger Topside
                $("#topside").mouseout(function(){
                  $("#topside").css("opacity","0");
                  $("#4.smallDiv").removeClass("show");
                  $("#l4.largeDiv").removeClass("borderR");
                  });
                  $( "#4.smallDiv" ).mouseout(function() {
                      $("#topside").css("opacity","0");
                     $("#topside").removeClass("smallShow");
                     $("#l4.largeDiv").removeClass("borderW");
                    });
                    $( "#l4.largeDiv" ).mouseout(function() {
                      $("#topside").css("opacity","0");
                     $("#topside").removeClass("smallShow");
                     $("#4.smallDiv").removeClass("borderW");
                    });


                   //trigger Silverside
                $("#silverside").mouseover(function(){
                  $("#silverside").css("opacity","1");
                  $("#5.smallDiv").addClass("show");
                  $("#l5.largeDiv").addClass("borderR");
              })
      
              $( "#5.smallDiv" ).mouseover(function() {
                  $("#silverside").css("opacity","1");
                 $("#silverside").addClass("smallShow");
                 $("#l5.largeDiv").addClass("borderW");
                });
                $( "#l5.largeDiv" ).mouseover(function() {
                  $("#silverside").css("opacity","1");
                 $("#silverside").addClass("smallShow");
                 $("#5.smallDiv").addClass("borderW");
                });
                //not-trigger Silverside
                $("#silverside").mouseout(function(){
                  $("#silverside").css("opacity","0");
                  $("#5.smallDiv").removeClass("show");
                  $("#l5.largeDiv").removeClass("borderR");
                  });
                  $( "#5.smallDiv" ).mouseout(function() {
                      $("#silverside").css("opacity","0");
                     $("#silverside").removeClass("smallShow");
                     $("#l5.largeDiv").removeClass("borderW");
                    });
                    $( "#l5.largeDiv" ).mouseout(function() {
                      $("#silverside").css("opacity","0");
                     $("#silverside").removeClass("smallShow");
                     $("#5.smallDiv").removeClass("borderW");
                    });

                
                         //trigger Leg
                         $("#leg").mouseover(function(){
                          $("#leg").css("opacity","1");
                          $("#6.smallDiv").addClass("show");
                          $("#l6.largeDiv").addClass("borderR");
                      })
              
                      $( "#6.smallDiv" ).mouseover(function() {
                          $("#leg").css("opacity","1");
                         $("#leg").addClass("smallShow");
                         $("#l6.largeDiv").addClass("borderW");
                        });
                        $( "#l6.largeDiv" ).mouseover(function() {
                          $("#leg").css("opacity","1");
                         $("#leg").addClass("smallShow");
                         $("#6.smallDiv").addClass("borderW");
                        });
                        //not-trigger Leg
                        $("#leg").mouseout(function(){
                          $("#leg").css("opacity","0");
                          $("#6.smallDiv").removeClass("show");
                          $("#l6.largeDiv").removeClass("borderR");
                          });
                          $( "#6.smallDiv" ).mouseout(function() {
                              $("#leg").css("opacity","0");
                             $("#leg").removeClass("smallShow");
                             $("#l6.largeDiv").removeClass("borderW");
                            });
                            $( "#l6.largeDiv" ).mouseout(function() {
                              $("#leg").css("opacity","0");
                             $("#leg").removeClass("smallShow");
                             $("#6.smallDiv").removeClass("borderW");
                            });
                
                       //trigger Knucle
                       $("#knuckle").mouseover(function(){
                        $("#knuckle").css("opacity","1");
                        $("#7.smallDiv").addClass("show");
                        $("#l7.largeDiv").addClass("borderR");
                    })
            
                    $( "#7.smallDiv" ).mouseover(function() {
                        $("#knuckle").css("opacity","1");
                       $("#knuckle").addClass("smallShow");
                       $("#l7.largeDiv").addClass("borderW");
                      });
                      $( "#l7.largeDiv" ).mouseover(function() {
                        $("#knuckle").css("opacity","1");
                       $("#knuckle").addClass("smallShow");
                       $("#7.smallDiv").addClass("borderW");
                      });
                      //not-trigger Knucle
                      $("#knuckle").mouseout(function(){
                        $("#knuckle").css("opacity","0");
                        $("#7.smallDiv").removeClass("show");
                        $("#l7.largeDiv").removeClass("borderR");
                        });
                        $( "#7.smallDiv" ).mouseout(function() {
                            $("#knuckle").css("opacity","0");
                           $("#knuckle").removeClass("smallShow");
                           $("#l7.largeDiv").removeClass("borderW");
                          });
                          $( "#l7.largeDiv" ).mouseout(function() {
                            $("#knuckle").css("opacity","0");
                           $("#knuckle").removeClass("smallShow");
                           $("#7.smallDiv").removeClass("borderW");
                          });

                               //trigger Flank
                               $("#flank").mouseover(function(){
                                $("#flank").css("opacity","1");
                                $("#8.smallDiv").addClass("show");
                                $("#l8.largeDiv").addClass("borderR");
                            })
                    
                            $( "#8.smallDiv" ).mouseover(function() {
                                $("#flank").css("opacity","1");
                               $("#flank").addClass("smallShow");
                               $("#l8.largeDiv").addClass("borderW");
                              });
                              $( "#l8.largeDiv" ).mouseover(function() {
                                $("#flank").css("opacity","1");
                               $("#flank").addClass("smallShow");
                               $("#8.smallDiv").addClass("borderW");
                              });
                              //not-trigger Flank
                              $("#flank").mouseout(function(){
                                $("#flank").css("opacity","0");
                                $("#8.smallDiv").removeClass("show");
                                $("#l8.largeDiv").removeClass("borderR");
                                });
                                $( "#8.smallDiv" ).mouseout(function() {
                                    $("#flank").css("opacity","0");
                                   $("#flank").removeClass("smallShow");
                                   $("#l8.largeDiv").removeClass("borderW");
                                  });
                                  $( "#l8.largeDiv" ).mouseout(function() {
                                    $("#flank").css("opacity","0");
                                   $("#flank").removeClass("smallShow");
                                   $("#8.smallDiv").removeClass("borderW");
                                  }); 
              //trigger Brisket
              $("#brisket").mouseover(function(){
                $("#brisket").css("opacity","1");
                $("#9.smallDiv").addClass("show");
                $("#l9.largeDiv").addClass("borderR");
            })
    
            $( "#9.smallDiv" ).mouseover(function() {
                $("#brisket").css("opacity","1");
               $("#brisket").addClass("smallShow");
               $("#l9.largeDiv").addClass("borderW");
              });
              $( "#l9.largeDiv" ).mouseover(function() {
                $("#brisket").css("opacity","1");
               $("#brisket").addClass("smallShow");
               $("#9.smallDiv").addClass("borderW");
              });
              //not-trigger Brisket
              $("#brisket").mouseout(function(){
                $("#brisket").css("opacity","0");
                $("#9.smallDiv").removeClass("show");
                $("#l9.largeDiv").removeClass("borderR");
                });
                $( "#9.smallDiv" ).mouseout(function() {
                    $("#brisket").css("opacity","0");
                   $("#brisket").removeClass("smallShow");
                   $("#l9.largeDiv").removeClass("borderW");
                  });
                  $( "#l9.largeDiv" ).mouseout(function() {
                    $("#brisket").css("opacity","0");
                   $("#brisket").removeClass("smallShow");
                   $("#9.smallDiv").removeClass("borderW");
                  }); 


                    //trigger Clod
                    $("#clod").mouseover(function(){
                      $("#clod").css("opacity","1");
                      $("#10.smallDiv").addClass("show");
                      $("#l10.largeDiv").addClass("borderR");
                  })
          
                  $( "#10.smallDiv" ).mouseover(function() {
                      $("#clod").css("opacity","1");
                     $("#clod").addClass("smallShow");
                     $("#l10.largeDiv").addClass("borderW");
                    });
                    $( "#l10.largeDiv" ).mouseover(function() {
                      $("#clod").css("opacity","1");
                     $("#clod").addClass("smallShow");
                     $("#10.smallDiv").addClass("borderW");
                    });
                    //not-trigger Clod
                    $("#clod").mouseout(function(){
                      $("#clod").css("opacity","0");
                      $("#10.smallDiv").removeClass("show");
                      $("#l10.largeDiv").removeClass("borderR");
                      });
                      $( "#10.smallDiv" ).mouseout(function() {
                          $("#clod").css("opacity","0");
                         $("#clod").removeClass("smallShow");
                         $("#l10.largeDiv").removeClass("borderW");
                        });
                        $( "#l10.largeDiv" ).mouseout(function() {
                          $("#clod").css("opacity","0");
                         $("#clod").removeClass("smallShow");
                         $("#10.smallDiv").removeClass("borderW");
                        }); 


      //trigger Shank
      $("#shank").mouseover(function(){
        $("#shank").css("opacity","1");
        $("#11.smallDiv").addClass("show");
        $("#l11.largeDiv").addClass("borderR");
    })

    $( "#11.smallDiv" ).mouseover(function() {
        $("#shank").css("opacity","1");
       $("#shank").addClass("smallShow");
       $("#l11.largeDiv").addClass("borderW");
      });
      $( "#l11.largeDiv" ).mouseover(function() {
        $("#shank").css("opacity","1");
       $("#shank").addClass("smallShow");
       $("#11.smallDiv").addClass("borderW");
      });
      //not-trigger Shank
      $("#shank").mouseout(function(){
        $("#shank").css("opacity","0");
        $("#11.smallDiv").removeClass("show");
        $("#l11.largeDiv").removeClass("borderR");
        });
        $( "#11.smallDiv" ).mouseout(function() {
            $("#shank").css("opacity","0");
           $("#shank").removeClass("smallShow");
           $("#l11.largeDiv").removeClass("borderW");
          });
          $( "#l11.largeDiv" ).mouseout(function() {
            $("#shank").css("opacity","0");
           $("#shank").removeClass("smallShow");
           $("#11.smallDiv").removeClass("borderW");
          }); 

      }

state = {
  "partsinfo":
        [
            {
                "id": "1",
                "title":"Rib",
                 "method":"Stew/Oven/Barbeque",
                "intro":"A rib steak is a beef steak sliced from the rib primal of a beef animal, with rib bone attached. In the United States, the term rib eye steak is used for a rib steak with the bone removed; however in some areas, and outside the U.S., the terms are often used interchangeably."
                

            },


            {
                "id": "2",
                "title":"Chuck",
               

                    "method":"Stew/Slow Roast",
                    "intro":"Chuck steak is a cut of beef and is part of the sub-prime cut known as the chuck. The typical chuck steak is a rectangular cut, about 1'' thick and containing parts of the shoulder bones, and is often known as a '7-bone steak,' as the shape of the shoulder bone in cross section resembles the numeral '7'."
                

            },


            {
                "id": "3",
                "title":"Rump",
            

                    "method":"Pan Fried",
                    "intro":"Rump steak is a cut of beef. It may refer to: A steak from the top half of an American-cut round steak primal A British- or Australian-cut from the rump primal, largely equivalent to the American sirloin."
                

            },


            {
                "id": "4",
                "title":"Sirloin",
              

                    "method":"Pan Fried/Sous-Vide",
                    "intro":"The sirloin steak is cut from the sirloin where the T-bone, porterhouse, and club steaks are cut. The sirloin is actually divided into several types of steak."
                

            },

            {
                "id": "5",
                "title":"Topside",
             

                    "method":"Slow Roast",
                    "intro":"Topside of beef is the long, inner muscle of the cow's thigh which makes for a lean cut, yet it's more tender than silverside taken from the hindquarters."
                

            },

            {
                "id": "6",
                "title":"Silverside",
                

                    "method":"Roast/Sous-Vide",
                    "intro":"Silverside is boned out from the top along with the topside and thick flank. It is usually prepared as a 2nd class roasting joint."
                
            },

            {
                "id": "7",
                "title":"Leg",


                    "method":"Stew/Slow Roast",
                    "intro":"Leg steaks come from the leaner part of the leg and can come either 'bone-in' or boneless. The bone-in steaks are cut from the centre of the leg, where as the boneless steaks are cut from the leg without bone."
                

            },

            {
                "id": "8",
                "title":"Knuckle",
              

                    "method":"Stew/Slow Roast",
                    "intro":"The knuckle, or sirloin tip as it's also known, is cut from a primal called the round, or hip of beef. As the name suggests, this is in the animal's hindquarters, and includes the hip with its related muscles, and a portion of the leg."
                

            },

            {
                "id": "9",
                "title":"Flank",
      

                    "method":"Roast/Stir-Fried",
                    "intro":"Flank steak is a cut of beef taken from the abdominal muscles or lower chest of the steer. French butchers refer to it as bavette, which means 'bib'. Similarly, it is known in Brazil as fraldinha. "
                

            },

            {
                "id": "10",
                "title":"Brisket",
                

                    "method":"Slow Smoking/Stew",
                    "intro":"Brisket is a cut of meat from the breast or lower chest of beef or veal. The beef brisket is one of the nine beef primal cuts, though the precise definition of the cut differs internationally. The brisket muscles include the superficial and deep pectorals"
                

            },

            {
                "id": "11",
                "title":"Clod",
  

                    "method":"Brasied",
                    "intro":"The beef clod or shoulder clod is one of the least expensive cuts of beef and is taken from the shoulder region of the animal. Beef clod is a large muscle system, with some fat that covers the muscles."
                

            },

            {
                "id": "12",
                "title":"Shank",


                    "method":"Stew/Slow Roast",
                    "intro":"The beef shank is the leg portion of a steer or heifer. In Britain, the corresponding cuts of beef are the shin, and the leg. Due to the constant use of this muscle by the animal, it tends to be tough, dry, and sinewy, so is best when cooked for a long time in moist heat."
                

            }
            

            
        
        ]

 
}



   


render(){
  
  return (
    <div id="container">

     <div id="rightSide">
        <div id="title">

        <h1 >an <br></br><span className="glow">INCOMPLETE</span> <br></br>cookbook of <span className="glow">BEEF</span></h1>

        </div>
      </div>
   


<div id="leftSide">

{/* id={this.state.partsinfo[0].id} */}
<div className="smallDivContainer" >


<Header id="0" name={this.state.partsinfo[0].title}  href = "#l0"/> 
<Header id="1" name={this.state.partsinfo[1].title} href = "#l1"/> 
<Header id="2" name={this.state.partsinfo[2].title} href = "#l2"/> 
<Header id="3" name={this.state.partsinfo[3].title} href = "#l3"/> 
<Header id="4" name={this.state.partsinfo[4].title} href = "#l4"/> 
<Header id="5" name={this.state.partsinfo[5].title} href = "#l5"/> 
<Header id="6" name={this.state.partsinfo[6].title} href = "#l6"/> 
<Header id="7" name={this.state.partsinfo[7].title} href = "#l7"/> 
<Header id="8" name={this.state.partsinfo[8].title} href = "#l8"/> 
<Header id="9" name={this.state.partsinfo[9].title} href = "#l9"/> 
<Header id="10" name={this.state.partsinfo[10].title} href = "#l10"/> 
<Header id="11" name={this.state.partsinfo[11].title} href = "#l11"/> 



{/* fruit={this.state.partsinfo[0].method}
fruit={this.state.partsinfo[1].method}
fruit={this.state.partsinfo[2].method}
fruit={this.state.partsinfo[3].method}
fruit={this.state.partsinfo[4].method}
fruit={this.state.partsinfo[5].method}
fruit={this.state.partsinfo[6].method}
fruit={this.state.partsinfo[7].method}
fruit={this.state.partsinfo[8].method}
fruit={this.state.partsinfo[9].method}
fruit={this.state.partsinfo[10].method}
fruit={this.state.partsinfo[11].method} */}

</div>


<div className="largeInfoContainer">

    
<Division id="l0" name={this.state.partsinfo[0].title} 
          title={this.state.partsinfo[0].method} 
          content={this.state.partsinfo[0].intro}
          />

<Division id="l1" name={this.state.partsinfo[1].title} 
          title={this.state.partsinfo[1].method} 
          content={this.state.partsinfo[1].intro}/>

<Division id="l2" name={this.state.partsinfo[2].title} 
          title={this.state.partsinfo[2].method} 
          content={this.state.partsinfo[2].intro}/>

<Division id="l3"  name={this.state.partsinfo[3].title} 
          title={this.state.partsinfo[3].method} 
          content={this.state.partsinfo[3].intro}/>

<Division id="l4" name={this.state.partsinfo[4].title} 
          title={this.state.partsinfo[4].method} 
          content={this.state.partsinfo[4].intro}/>

<Division id="l5" name={this.state.partsinfo[5].title} 
          title={this.state.partsinfo[5].method} 
          content={this.state.partsinfo[5].intro}/>

<Division id="l6" name={this.state.partsinfo[6].title} 
          title={this.state.partsinfo[6].method} 
          content={this.state.partsinfo[6].intro}/>

<Division id="l7" name={this.state.partsinfo[7].title} 
          title={this.state.partsinfo[7].method} 
          content={this.state.partsinfo[7].intro}/>

<Division id="l8" name={this.state.partsinfo[8].title} 
          title={this.state.partsinfo[8].method} 
          content={this.state.partsinfo[8].intro}/>

<Division id="l9" name={this.state.partsinfo[9].title} 
          title={this.state.partsinfo[9].method} 
          content={this.state.partsinfo[9].intro}/>

<Division id="l10" name={this.state.partsinfo[10].title} 
          title={this.state.partsinfo[10].method} 
          content={this.state.partsinfo[10].intro}/>

<Division id="l11" name={this.state.partsinfo[11].title} 
          title={this.state.partsinfo[11].method} 
          content={this.state.partsinfo[11].intro}
          href="#l11"/>







</div>
<Logo id="svgContainer"/>



</div>



  
    {/* <button className="btn" onClick={this.clickBtn}> Change Data</button>*/}


    





    </div>
  );
}
}

export default App;


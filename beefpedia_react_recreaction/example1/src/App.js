import React,{Component} from 'react';
import { ReactComponent as Logo } from './beef_cuts.svg';
import './App.css';
import Header from './Components/Header/Header';
import Division from './Components/Division/Division';
import $ from "jquery";



class App extends Component {

    componentDidMount() {
        //scroll effect
      
        $("#10.smallDiv").click(function (){
            $(".largeInfoContainer").animate({
              scrollTop: $("#l10.largeDiv").offset().top - 50+'%'
            }, 1000)
          })
        
            $("#11.smallDiv").click(function (){
              $(".largeInfoContainer").animate({
                scrollTop: $("#l11.largeDiv").offset().top
              }, 1000)
            })
 

        //verision 1 it works
        //trigger rib
          $("#rib").mouseover(function(){
            $("#0.smallDiv").addClass("show");
            $("#l0.largeDiv").addClass("borderR");
        })

        $( "#0.smallDiv" ).mouseover(function() {
            $("#rib").css("opacity","1");
           $("#rib").addClass("smallShow");
           $("#l0.largeDiv").addClass("borderW");
          });


        //not-trigger rib
        $("#rib").mouseout(function(){
        $("#0.smallDiv").removeClass("show");
        $("#l0.largeDiv").removeClass("borderR");
        $("#rib").css("opacity","0");
        });
        $( "#0.smallDiv" ).mouseout(function() {
            $("#rib").css("opacity","0");
           $("#rib").removeClass("smallShow");
           $("#l0.largeDiv").removeClass("borderW");
          });

          //trigger chuck
          $("#chuck").mouseover(function(){
            $("#1.smallDiv").addClass("show");
            $("#l1.largeDiv").addClass("borderR");
        })

        $( "#1.smallDiv" ).mouseover(function() {
            $("#chuck").css("opacity","1");
           $("#chuck").addClass("smallShow");
           $("#l1.largeDiv").addClass("borderW");
          });

          //not-trigger chuck
          $("#chuck").mouseout(function(){
            $("#1.smallDiv").removeClass("show");
            $("#l1.largeDiv").removeClass("borderR");
            });
            $( "#1.smallDiv" ).mouseout(function() {
                $("#chuck").css("opacity","0");
               $("#chuck").removeClass("smallShow");
               $("#l1.largeDiv").removeClass("borderW");
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


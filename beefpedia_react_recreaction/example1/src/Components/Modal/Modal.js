import React,{Component} from 'react';
import './Modal.css';

class Modal extends Component{
    closeModal = ()=>{
        this.props.closeModal();
      }

   render(){
       if(!this.props.show){
           return null;
       }
    return(
        <div className="Modal">
            <div className='container'>
                <div className='videoHolder'>

                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/iNVgZGuaiN0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                </div>
        <h1>
        "Remember: ribs are about love, so don't share these ribs with people you don't respect."<br></br>
        <br></br>
        </h1>
        <h4>
Servings: 6-8
<br></br>
<br></br>
<span>Ingredients:</span><br></br>
10 pounds pork side ribs<br></br>
water<br></br>
kosher salt<br></br>
<br></br>
<span>for the pomegranate molasses barbecue sauce:</span><br></br>
2 onions<br></br>
5 jalapeños<br></br>
4 cloves garlic<br></br>
1 knob of ginger<br></br>
4 tablespoons canola oil<br></br>
2 tablespoons cayenne pepper<br></br>
2 tablespoons garlic powder<br></br>
2 tablespoons onion powder<br></br>
2 tablespoons mace<br></br>
1 tablespoon ground clove<br></br>
2 tablespoons ground coriander<br></br>
3 tablespoons smoked paprika<br></br>
3 tablespoons Korean chili flakes<br></br>
10 pomegranates<br></br>
4 tablespoons molasses<br></br>
4 tablespoons maple syrup<br></br>
4 tablespoons apple cider vinegar<br></br>
2 cups water<br></br>
<br></br>
<span>for the dukkah:</span><br></br>
white sesame seeds<br></br>
black sesame seeds<br></br>
pistachios<br></br>
fennel seed<br></br>
sunflower seeds<br></br>
pumpkin seeds<br></br>
<br></br>
<span>for serving:</span><br></br>
limes<br></br>
pomegranates<br></br>
cilantro<br></br>
parsley<br></br>
<br></br>
<span></span><br></br>
<br></br>
1) To cook the ribs, place ribs in a pot with cold, heavily salted water (make it taste like the ocean) and cover. Bring to a boil, then reduce to medium heat and let simmer. Skim the scum from the top. Cook until tender, about an hour and half.
<br></br>
<br></br>
2) To make the pomegranate molasses barbecue sauce, heat the canola oil in a saucepan over medium heat. Chop onions, garlic, jalapeño, and ginger and cook in the oil until golden brown. Add the cayenne, garlic powder, onion powder, mace, ground clove, ground coriander, smoked paprika, and Korean chili flakes. Add all of the seeds and juice from the pomegranates, then add the molasses, maple syrup, apple cider vinegar, and water. Bring to a boil, then simmer for 1 hour. When cool, blend in a blender until smooth.
<br></br>
<br></br>
3) For the dukkah, take all the seeds and place in a blender. Blitz on pulse until crumbly. Place in a bowl and set aside.
<br></br>
<br></br>
4) Chop the parsley and cilantro and place in a bowl.
<br></br>
<br></br>
5) Heat your grill up really, really hot! Place ribs on grill and start basting with the barbecue sauce. You are gonna have to move quick here, so don't crowd the grill. Glaze ribs, flip ribs, glaze ribs, flip ribs, until nice and sticky and charred. Repeat until all ribs are cooked
<br></br>
<br></br>
6) Place ribs on a nice cutting board and give them a final glaze of the barbecue sauce. Then sprinkle with the fresh-cut herbs and the dukkah. Slice the ribs into individual ribs for your guests. Add some lime wedges for a fresh hit of acid, squeeze some pomegranate juice and seeds on them, and you're done. World peace!
        </h4>
           
             <div><span id='close' onClick={()=>{this.closeModal();}}>&#10005;</span></div>

            </div>
        </div>
    );
   }

}


export default Modal;
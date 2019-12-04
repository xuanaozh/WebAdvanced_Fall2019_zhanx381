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
             <h1>{this.props.children}</h1>
             <div><span id='close' onClick={()=>{this.closeModal();}}>&#10005;</span></div>

            </div>
        </div>
    );
   }

}



export default Modal;
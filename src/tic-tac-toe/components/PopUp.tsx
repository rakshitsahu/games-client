import React from "react";
import gsap from "gsap";
import { ZIndex } from "./util";
interface PopUpProps{
    heading: string;
    description: string;
}
interface PopUpState{
    heading: string;
    description: string;
}
class PopUp extends React.Component<PopUpState, PopUpProps>{
    
    constructor(props : PopUpProps){
        super(props);
        this.state = {
            heading : this.props.heading,
            description : this.props.description
        }
    }
    componentDidMount(){
        
        const popupElement = document.getElementById("popup-container");
        let bgElement = document.getElementById("bg-container")
        let popTween =   gsap.fromTo(popupElement, 
            { y: 100 , scale: 0 },  // Initial state
            { 
            scale: 1,
            delay:0.5,
              y: 0,  // Final state
              duration: 0.5,  // Animation duration in seconds
              ease: "power3.out"  // Easing function
            }
          );
        let bgTween = gsap.fromTo(
            bgElement,
            {opacity:0},
            {opacity:0.7, duration:0.5}
        )
        
        bgTween.play()
          popTween.play();
    }
 render(): React.ReactNode {
    console.log("Came Here")
    const bgStyle = {background: 'linear-gradient(90deg, #5f0fbf 0%, #ab146e 100%)'}
     return (
        <div>
            <div id="bg-container" className={`absolute top-0 left-0 h-full w-full bg-black flex justify-center items-center  z-[${ZIndex.Popup}]`}>
                </div>
            <div id="popup-container" className="w-72 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl font-bold text-xl overflow-clip">
                <div style={bgStyle} id="popup-heading" className="flex text-white w-full py-4 justify-center items-center" >
                   {this.state.heading}
                </div>
                
                <div className=" bg-white h-52 flex text-center justify-center items-center p-2">
                {this.state.description}
                </div>
            </div>
        </div>
     )
 }
}
export default PopUp
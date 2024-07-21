import gsap from "gsap";
import React, { Component, useRef, useState  } from "react";
import Circle from '../assets/circle.png'
import Cross from '../assets/cross.png'
interface SquareProps {
    row : number,
    col : number,
    side : number
}
interface SquareState {
    sign: string,
    squareNo : number
  }
class Square extends Component<SquareProps ,SquareState>{
    signs : string[] = []
    constructor(props: SquareProps) {
        super(props);
        // Initialize state
        this.state = {
            sign: '',
            squareNo: (props.row * props.side) + props.col
          };
          this.signs= ['X','O']
      }
      invalidMove = () => {
        const squareElement = document.getElementById(`square-no-${this.state.squareNo}`);
        gsap.timeline()
          .to(squareElement, { x: -5, duration: 0.05 })
          .to(squareElement, { x: 5, duration: 0.05 })
          .to(squareElement, { x: -5, duration: 0.05 })
          .to(squareElement, { x: 5, duration: 0.05 })
          .to(squareElement, { x: 0, duration: 0.05 });
      };
      signAppearAnimation = ()=>{
        let tween = gsap.from(`#square-no-${this.state.squareNo}-sign`, {
          scale: 0,
          duration: 0.5,
          ease: "elastic",
        });
        tween.play();
      }
    handleClick = (squareNo : number) => {
      if(this.state.sign != ''){
        this.invalidMove()
      }
      this.setState((prevState) => ({
        sign: prevState.sign === Circle ? Cross : Circle,
      }));
      this.signAppearAnimation()
      };
    render() {
        const {row , col , side} = this.props
       
        // console.log(borderCss)
        return (
        <div id={`square-no-${this.state.squareNo}`} onClick={()=>{this.handleClick(this.state.squareNo)}} className={`w-full h-full flex justify-center items-center rounded-2xl bg-[#3b0853]`}>
            <img id={`square-no-${this.state.squareNo}-sign`} src={this.state.sign} alt="" />
        </div>
            )
    }
}
export default Square
import React, { Component } from "react";
import Square from "./Square";
interface GridProps {
    side: number;
  }
class Grid extends Component<GridProps> {
    render() {
      const { side } = this.props;
      const size = 100 / side;
      // Create the CSS Grid style
      const gridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: `repeat(${side}, ${size}%)`,
        gridTemplateRows: `repeat(${side}, ${size}%)`,
        gap: 1
        
      };
      const squares =  Array.from({ length: 9 }, (_, index) => (
        <Square row={Math.floor(index/side)} col={index%side} side={side}/>
      ));
      return (
        <div style={gridStyle} className=" h-80  w-80 p-4 ">
          {squares}
        </div>
      );
    }
  }
  
  export default Grid;
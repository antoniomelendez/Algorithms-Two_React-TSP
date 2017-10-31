import React from 'react';
import TSPRunner from './TSPRunner';
import heap from './Heaps';

let canvasContainerStyle = {
  margin: "10 auto"
}
let canvasStyle = {
  width: "500px",
  height: "500px"
}
class TSPCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  } 
  updateTSPVertices() {
    // when the TSP has a set of vertices (cities), draw them as small
    // circles here.
  }
  updateTSPPath() {
    // when the TSP has computed the "best" path, draw it here along the circles
  }
  drawCircle() {
    this.context.beginPath();
    this.context.arc(50,50,20,0,2*Math.PI,false);
    this.context.stroke();
  }
  click() {
    this.drawCircle();
    // console.log(heap);
  }
  render() {
    return (<div style={canvasContainerStyle}>
             <canvas id="TSP" ref={(c) => this.context = c.getContext('2d')} height={canvasStyle.height} width={canvasStyle.width} style={canvasStyle} onClick={() => this.click()} />
             <TSPRunner />
           </div>
    );
  }
}
export default TSPCanvas;
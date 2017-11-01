import React from 'react';
import TSPRunner from './TSPRunner';
import heap from './Heaps';
const heapResult = require('./TSPRunner.js')

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
  updateTSPVertices(results) {
    // when the TSP has a set of vertices (cities), draw them as small
    // circles here.
    console.log(results);
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
    console.log(heapResult);
  }
  render() {
    return (<div style={canvasContainerStyle}>
             <canvas id="TSP" ref={(c) => this.context = c.getContext('2d')} height={canvasStyle.height} width={canvasStyle.width} style={canvasStyle} onClick={() => this.click()} />
             <TSPRunner onComplete={this.updateTSPVertices}/>
           </div>
    );
  }
}
export default TSPCanvas;
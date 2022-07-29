import React from 'react'
import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

 function Wheel({wheel, moveClockwise, moveCounterClockwise}) {
  return (
    <div id="wrapper">
      <div id="wheel">
        {[0,1,2,3,4,5].map((i)=>{
          return <div className={i === wheel ? "cog active" : "cog" } style={{ "--i": i }}>{i === wheel ? "B" : ""}</div>
        })}
        
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={moveCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn"onClick={moveClockwise}>Clockwise</button>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
  wheel : state.wheel
  };
};

export default connect(
  mapStateToProps,
  { moveClockwise, moveCounterClockwise } // same as { updateTitle: updateTitle }
)(Wheel);
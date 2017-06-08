import React from 'react';

class Cell extends React.Component {

  render(){     
     return (
      <button onClick={this.props.clicked}>
      {this.props.val}
      </button>
    );
  }
}


export default Cell;

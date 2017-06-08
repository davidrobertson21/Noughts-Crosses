import React from 'react';
import Cell from '../components/Cell';

class NoughtsAndCrossesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      turn: "x",
      cells: ["", "", "", 
              "", "", "",
              "", "", ""],
      winner: null
    };
  }

  setValue(index) {

    const cells = this.state.cells;

    if(cells[index] === "" && this.state.winner === null) {
      
      cells[index] = this.state.turn;

      let turn = this.state.turn;

      if(turn === "x") {
        turn = "o";
      } else {
        turn = "x";
      }

      const winner = this.playerWin();

      this.setState({
        cells: this.state.cells,
        winner: winner,
        turn: turn
      });
    }
  }

  render(){
    return (
      <div>
        <h2>Noughts & Crosses</h2>
        <table>
        <tbody>
            <tr>
              <td><Cell val={this.state.cells[0]} clicked={()=> {this.setValue(0)}}/></td>
              <td><Cell val={this.state.cells[1]} clicked={()=> {this.setValue(1)}}/></td>
              <td><Cell val={this.state.cells[2]} clicked={()=> {this.setValue(2)}}/></td>
            </tr>
            <tr>
              <td><Cell val={this.state.cells[3]} clicked={()=> {this.setValue(3)}}/></td>
              <td><Cell val={this.state.cells[4]} clicked={()=> {this.setValue(4)}}/></td>
              <td><Cell val={this.state.cells[5]} clicked={()=> {this.setValue(5)}}/></td>
            </tr>
            <tr>
              <td><Cell val={this.state.cells[6]} clicked={()=> {this.setValue(6)}}/></td>
              <td><Cell val={this.state.cells[7]} clicked={()=> {this.setValue(7)}}/></td>
              <td><Cell val={this.state.cells[8]} clicked={()=> {this.setValue(8)}}/></td>
            </tr>
          </tbody>
        </table>
        {this.state.winner}
      </div>

    );
  }

  playerWin(){
    if(this.state.cells[0] === "x" && this.state.cells[1] === "x" && this.state.cells[2] === "x" 
      || this.state.cells[0] === "o" && this.state.cells[1] === "o" && this.state.cells[2] === "o"){ 
        return <p>{this.state.turn} wins</p>
      }


    else if(this.state.cells[3] === "x" && this.state.cells[4] === "x" && this.state.cells[5] === "x" 
      || this.state.cells[3] === "o" && this.state.cells[4] === "o" && this.state.cells[5] === "o"){ 
        return <p>{this.state.turn} wins</p>}

    else if(this.state.cells[6] === "x" && this.state.cells[7] === "x" && this.state.cells[8] === "x" 
    || this.state.cells[6] === "o" && this.state.cells[7] === "o" && this.state.cells[8] === "o"){ 
      return <p>{this.state.turn} wins</p>}

    else if(this.state.cells[0] === "x" && this.state.cells[3] === "x" && this.state.cells[6] === "x" 
    || this.state.cells[0] === "o" && this.state.cells[3] === "o" && this.state.cells[6] === "o"){ 
      return <p>{this.state.turn} wins</p>}
    
    else if(this.state.cells[1] === "x" && this.state.cells[4] === "x" && this.state.cells[7] === "x" 
    || this.state.cells[1] === "o" && this.state.cells[4] === "o" && this.state.cells[7] === "o"){ 
      return <p>{this.state.turn} wins</p>}
    
    else if(this.state.cells[2] === "x" && this.state.cells[5] === "x" && this.state.cells[8] === "x" 
    || this.state.cells[2] === "o" && this.state.cells[5] === "o" && this.state.cells[8] === "o"){ 
      return <p>{this.state.turn} wins</p>}
    
    else if(this.state.cells[0] === "x" && this.state.cells[4] === "x" && this.state.cells[8] === "x" 
    || this.state.cells[0] === "o" && this.state.cells[4] === "o" && this.state.cells[8] === "o"){ 
      return <p>{this.state.turn} wins</p>}
    
    else if(this.state.cells[2] === "x" && this.state.cells[4] === "x" && this.state.cells[6] === "x" 
    || this.state.cells[2] === "o" && this.state.cells[4] === "o" && this.state.cells[6] === "o"){ 
      return <p>{this.state.turn} wins</p>}

    else return null;
  }

}

export default NoughtsAndCrossesContainer;
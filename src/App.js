import React from 'react';
import ToolBar from './Components/ToolBar'
import Visualizer from './Components/Visualizer'
import './App.css';

class App extends React.Component {
  state = {
    sortType: null,
    array: []
  }

  componentWillMount(){
    this.generateArrayVals(10)
  }

  selectSortType = (sortType) =>{
    this.setState({sortType})
  }

  generateArrayVals = (numValues)=>{
      let array = [];
      for(let i=0;i <numValues;i++){
          array.push(Math.ceil(Math.random()*50))
      }
      this.setState({array});
  }

  render(){
    return (
      <div className="App">
        <div>
          <ToolBar generateArrayVals={this.generateArrayVals} selectSortType={this.selectSortType} />
          <Visualizer className="center" sortType={this.state.sortType} array={this.state.array}/>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import ToolBar from './Components/ToolBar'
import Visualizer from './Components/Visualizer'
import Algorithms from './Logic/SortAlgorithmsIndex'

import './App.css';

class App extends React.Component {
  state = {
    sortType: "bubble",
    array: []
  }

  componentDidMount(){
    this.generateArrayVals(10)
  }

  selectSortType = (sortType) =>{
    this.setState({sortType})
  }

  generateArrayVals = (numValues)=>{
      let array = [];
      for(let i=0;i < numValues;i++){
         array.push( Math.ceil(Math.random()*50))
      }
      this.setState({array});
  }

  wait(miliseconds) {
    var currentTime = new Date().getTime();
 
      while (currentTime + miliseconds >= new Date().getTime()) {
      }
  }

  arraysAreEqual(arr1, arr2){
    if(!arr1 || !arr2 || arr1.length !== arr2.length){ return false}
    let result = true
    for(let i = 0; i< arr1.length; i++){
      if(arr1[i] !== arr2[i]){ result = false}
    }
    return result
  }

  sort = ()=>{
    const type = this.state.sortType
    let unsortedArray = [...this.state.array]
    let sortedArray = Algorithms[`${type}Sort`]([...this.state.array],0)
    this.sortHelper(unsortedArray, sortedArray, type,1)
  }

  sortHelper =(unsortedArray, sortedArray, type, i = 1 )=>{
    this.setState({array: sortedArray})
    if(!this.arraysAreEqual(unsortedArray, sortedArray)){
      console.log('sorting')
      unsortedArray = [...sortedArray]
      sortedArray = Algorithms[`${type}Sort`]([...unsortedArray],i)
      setTimeout(()=>this.sortHelper(unsortedArray, sortedArray, type, i+1), 1000/sortedArray.length)
    }
  }

  reset = () =>{
    const array = this.generateArrayVals(this.state.array.length)
    this.setState(array)
  }

  render(){
    return (
      <div className="App">
        <div>
          <ToolBar sort={this.sort} reset={this.reset} generateArrayVals={this.generateArrayVals} selectSortType={this.selectSortType} />
          <Visualizer className="center" sortType={this.state.sortType} array={this.state.array}/>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';

const ToolBar = ({selectSortType, generateArrayVals, sort, reset}) =>{

    return (
        <nav className="nav-extended  light-blue darken-4">
            <div className="nav-wrapper center">
                <div className="left buttons">
                    <button onClick={sort} className="btn sort-button"> Sort </button>
                    <button onClick={reset} className="btn reset-button red"> Reset </button>
                </div>
                <a href="#!" className="brand-logo center">
                    <i className="material-icons">
                        sort
                    </i>
                    Sorting Algorithms Visualizer
                </a>
            </div>
            <div className="nav-content container row">
                <ul className="hide-on-med-and-down col">
                    <li><a href="#!" onClick={()=>selectSortType("bubble")}>Bubble Sort</a></li>
                    <li><a href="#!" onClick={()=>selectSortType("insertion")}>Insertion Sort</a></li>
                    <li><a href="#!" onClick={()=>selectSortType("selection")}>Selection Sort</a></li>
                    <li><a href="#!" onClick={()=>selectSortType("heap")}>Heap Sort</a></li>
                    <li><a href="#!" onClick={()=>selectSortType("merge")}>Merge Sort</a></li>
                </ul>
                <span className="col values-slider">
                    Size of array:
                    <form action="#">
                        <input onChange={e=>generateArrayVals(e.target.value)} type="range" id="test5" min="2" max="1000" width="30px"/>
                    </form>
                </span>
            </div>
        </nav>
    )
};

export default ToolBar;

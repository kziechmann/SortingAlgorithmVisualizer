import React from 'react';

const Visualizer = ({sortType, array}) =>{

    return (
        <div className="card-panel blue lighten-2 array-container">
            <div className="container">
                <span className="white-text">
                    <h5>{sortType.toUpperCase() +" SORT"}</h5>
                </span>
                <div className="array center">
                    {array.map((value,i) =>(
                        <div 
                         className="array-value orange accent-2"
                         style={{height:`${value}vh`, margin: `${50/array.length}px`}}
                         key={i}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Visualizer;

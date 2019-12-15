import React from 'react';
import Colors from '../Utilities/Colors'

const Visualizer = ({sortType, array}) =>{
    

    return (
        <div className="card-panel blue lighten-2 array-container">
            <div className="container">
                <span className="white-text">
                    <h5 >{sortType.toUpperCase() +" SORT"}</h5>
                </span>
                <div className="array center">
                    {array.map((value,i) =>{
                        return(
                            <div 
                            className="array-value accent-2"
                            style={{
                                height:`${value}vh`,
                                margin: `${50/array.length}px`,
                                backgroundColor: Colors[value]
                            }}
                            key={i}
                            >
                                <p style={{fontSize:`${75/array.length}px`}} >
                                    {array.length < 20? value : ""}
                                </p>
                            </div>
                    )})}
                </div>
            </div>
        </div>
    )
};

export default Visualizer;

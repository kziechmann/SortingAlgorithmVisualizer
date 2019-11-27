import React from 'react';

const Visualizer = ({sortType, array}) =>{

    return (
        <div class="card-panel teal lighten-3">
            <div class="container">
                <span class="white-text">
                    {sortType}
                </span>
                <div class="row center">
                    {array.map(value =>(
                        <div class="col red accent-2">
                            {value}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Visualizer;

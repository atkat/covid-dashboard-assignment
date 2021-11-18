import React from 'react';
import Graph from './cards/Graph';
import PieChart from './cards/PieChart';
import Map from './cards/Map';

export default function GlobalOverview() {
    return (
        <div className='overview__charts'>
                <div className="overview__left">
                    <Graph/>
                    <PieChart/>
                </div>
                <div className="overview__right">
                     <Map/> 
                </div>
            </div>
    )
}

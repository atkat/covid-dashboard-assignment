import React from 'react';
import Graph from './cards/Graph';
import PieChartComponent from './cards/PieChartComponent';
import Map from './cards/Map';

export default function GlobalOverview() {
    return (
        <div className='overview__charts'>
                <div className="overview__left">
                    <Graph/>
                    <PieChartComponent/>
                </div>
                <div className="overview__right">
                     <Map/> 
                </div>
            </div>
    )
}

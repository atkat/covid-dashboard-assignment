import React from 'react'

export default function StatsCard(props) {

    return (
        <div className='overview__stats-card'>
            <h3>{props.cardTitle}</h3>
            <p>New: {props.cardValue.todayCases}</p>
            <p>Total: {props.cardValue.cases}</p>
        </div>
    )
}

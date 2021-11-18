import React from 'react';
import { useState, useEffect } from 'react';

export default function StatsCard(props) {
//   const [statCardData, setStatCardData] = useState('')

        

        // const whichCard = (title) => {
        //     if (props.selectedCountryData.cardTitle === 'Cases') {
        //         setStatCardData (
                    
                   
        //         )
        //     }
        //     if (props.selectedCountryData.cardTitle === 'Deaths') {
        //         setStatCardData (
        //            
        //         )
        //     }
        //     if (props.selectedCountryData.cardTitle === 'Cases') {
        //         setStatCardData (
        //             <div className='overview__stats-card'>
        //      <h3>{props.cardTitle}</h3>
        //             <p>New: {props.selectedCountryData.todayRecovered}</p>
        //             <p>Total: {props.selectedCountyData.recovered}</p>
        //             </div>
        //         )
        //     }
        //     if (props.selectedCountryData.cardTitle === 'Tests') {
        //         setStatCardData (
        //             <div className='overview__stats-card'>
        //              <h3>{props.cardTitle}</h3>
        //             <p>Total: {props.selectedCountryData.tests}</p>
        //             </div   >
        //         )
        //     }
        // }

        // useEffect(() => {
        //     whichCard()
        // }, [])
        
        if (!props.selectedCountryData) {return (<p>Loading...</p>) };

        return (
            <>
            {props.cardTitle === 'Cases' && 
                (<div className='overview__stats-card'>
                    <h3>{props.cardTitle}</h3>
                    <p>New: {props.selectedCountryData.todayCases}</p>
                    <p>Total: {props.selectedCountryData.cases}</p>
                </div>)
            }
            {
            props.cardTitle === 'Deaths' &&
                <div className='overview__stats-card'>
                    <h3>{props.cardTitle}</h3> 
                    <p>New: {props.selectedCountryData.todayDeaths}</p>
                    <p>Total: {props.selectedCountryData.deaths}</p>
                </div>
            }
            {
            props.cardTitle === 'Recovered' &&
                <div className='overview__stats-card'>
                    <h3>{props.cardTitle}</h3> 
                    <p>New: {props.selectedCountryData.todayRecovered}</p>
                     <p>Total: {props.selectedCountryData.recovered}</p>
                </div>
            }
            {
            props.cardTitle === 'Tests' &&
                <div className='overview__stats-card'>
                    <h3>{props.cardTitle}</h3>
                    <p>Total: {props.selectedCountryData.tests}</p>
                    <p>Population: {props.selectedCountryData.population}</p>
                </div>
            }
            </>
        )
   
}

   

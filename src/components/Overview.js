import React from 'react';
import {useState, useEffect} from 'react';
import StatsCard from './cards/StatsCard';
import Dropdown from './Dropdown';
import Map from './cards/Map'
import PieChartComponent from './cards/PieChartComponent';
import Graph from './cards/Graph';

export default function Overview() {

    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedCountryData, setSelectedCountryData] = useState({})
    const [pieChartData, setPieChartData] = useState([])

    const getCountriesData = async () => {    
       
            const response = await fetch("https://disease.sh/v3/covid-19/countries")
            const responseData = await response.json();
            const countries = responseData
                                .map(country => (
                                    {
                                        name: country.country,
                                        code: country.countryInfo.iso2
                                    }
                                ));
                            
            setCountries(countries);

            const pieData = responseData
                    .map(country => (
                        {
                            name: country.country,
                            value: country.todayCases
                        }
                    ))
                    .sort((a,b) => b.value-a.value)
                    .slice(0,5)
              
            setPieChartData(pieData)
    }   
  
    const getSelectedCountryData = async () => {
        const endPoint = ( !selectedCountry || selectedCountry === 'Global' ) ? 'all' : `countries/${selectedCountry}`;
        const response = await fetch(`https://disease.sh/v3/covid-19/${endPoint}`);
        const responseData = await response.json();
        setSelectedCountryData(responseData)       
    }
 
    useEffect (() => {
        getCountriesData()
    }, [])

    useEffect (() => {
        getSelectedCountryData();
    }, [selectedCountry])   // this is wrong but for now does not work without it


    return (
        <div className='overview'>
            <Dropdown countries={countries} setSelectedCountry={setSelectedCountry}/>
            <div className='overview__cards'>
                <StatsCard cardTitle='Cases' selectedCountryData={selectedCountryData}/>
                <StatsCard cardTitle='Deaths' selectedCountryData={selectedCountryData}/>
                <StatsCard cardTitle='Recovered' selectedCountryData={selectedCountryData}/>
                <StatsCard cardTitle='Tests' selectedCountryData={selectedCountryData}/>
            </div>

            <div className='overview__charts'>               
                {(!selectedCountry || selectedCountry==='Global') ?
                <>
                    <div className='overview__left'>
                        <div className='overview__test'>
                            <PieChartComponent title='Most affected countries' pieChartData={pieChartData}/>
                            {/* just a filler list to play around with layout */}
                            <div className='overview__pieChartFiller'>  
                                <ul>
                                    {pieChartData.map( a => {
                                        return (
                                            <li>{a.name}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>    
                        <Graph selectedCountry={selectedCountry}/>                  
                    </div>
                    <div className="overview__right">
                        <Map/> 
                    </div> 
                </>
                : 
                <>
                    <div className="overview__left">
                        <Graph selectedCountry={selectedCountry}/>
                    </div>
                    <div className="overview__right">
                        <PieChartComponent title='important data' pieChartData={[{name: 'cool stat', value: 3.14}]}/>
                        <Graph selectedCountry={selectedCountry}/>
                    </div>
                </>
                }
            </div>
            
        </div>
    )
}

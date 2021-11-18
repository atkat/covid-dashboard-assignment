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

    const getSelectedCountryData =  () => {
        const endPoint = ( !selectedCountry || selectedCountry === 'Global' ) ? 'all' : `countries/${selectedCountry}`;
        console.log(endPoint)

        fetch(`https://disease.sh/v3/covid-19/${endPoint}`)
            .then(response=>response.json())
            .then(countryData => {
                setSelectedCountryData(countryData) 
            })
    }
    //try with async await
    // const getSelectedCountryData = async () => {
    //     const endPoint = ( !selectedCountry || selectedCountry === 'Global' ) ? 'all' : `countries/${selectedCountry}`;
    //     const response = await fetch(`https://disease.sh/v3/covid-19/${endPoint}`);
    //     const responseData = await response.json();
    //     console.log(responseData)
    //     setSelectedCountryData(responseData)       
    // }
 
    useEffect (() => {
        getCountriesData()
    }, [])

    useEffect (() => {
        getSelectedCountryData();
    }, [])


    return (
        <div className='overview'>
            <Dropdown countries={countries} setSelectedCountry={setSelectedCountry}/>
            <div className='overview__cards'>
                {/* <StatsCard cardTitle='Cases' cardValue={cases: selectedCountryData.cases, selectedCountryData.todayCases,}/> */}
                <StatsCard cardTitle='Deaths' cardValue={selectedCountryData}/>
                <StatsCard cardTitle='Recovered' cardValue={selectedCountryData}/>
                <StatsCard cardTitle='Hospitalised' cardValue={selectedCountryData}/>
            </div>

            <div className='overview__charts'>               
                {(!selectedCountry || selectedCountry==='Global') ?
                <>
                    <div className="overview__left">
                        <PieChartComponent pieChartData={pieChartData}/>    
                        <Graph/>                  
                    </div>
                    <div className="overview__right">
                        <Map/> 
                    </div> 
                </>
                : 
                <>
                    <div className="overview__left">
                        <Graph/>
                    </div>
                    <div className="overview__right">
                        {/* <PieChartComponent/> */}
                        <Graph/>
                    </div>
                </>
                }
            </div>
            
        </div>
    )
}

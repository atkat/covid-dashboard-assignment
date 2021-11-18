import React from 'react';
import {useState, useEffect} from 'react';
import StatsCard from './cards/StatsCard';
import Dropdown from './Dropdown';
import Map from './cards/Map'
import PieChart from './cards/PieChart';
import Graph from './cards/Graph';
import GlobalOverview from './GlobalOverview';

export default function Overview() {

    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('Global')
    const [selectedCountryData, setSelectedCountryData] = useState({})
    const [pieChartData, setPieChartData] = useState({})
    
    const getCountries = async () => {
       await fetch("https://disease.sh/v3/covid-19/countries")
       .then(response => response.json())
       .then(responseData => {
          const countries = responseData.map(country => (
            {
                name: country.country,
                code: country.countryInfo.iso2
            }
          ));
          setCountries(countries);
       })
    }

    const getSelectedCountryData = async () => {

        const endPoint = ( !selectedCountry || selectedCountry === 'Global' ) ? 'all' : `countries/${selectedCountry}`;

        await fetch(`https://disease.sh/v3/covid-19/${endPoint}`)
        .then(response => response.json())
        .then(countryData => setSelectedCountryData(countryData) )
    }

    const getPieChartData = async () => {
        await fetch('https://disease.sh/v3/covid-19/countries')
        .then(response => response.json())
        .then(data => {
            const firstFive = data.slice(4).map( c => c.todayCases);
            console.log(data[0])
            setPieChartData(firstFive)
        })
    }
 
    useEffect (() => {
        getCountries();
    }, [])

    useEffect (() => {
        getSelectedCountryData();
    }, [selectedCountry, selectedCountryData])

    useEffect (() => {
        getPieChartData();
        //console.log(pieChartData)
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
                    <GlobalOverview/> 
                    : 
                    <>
                    <div className="overview__left">
                        <Graph/>
                    </div>
                    <div className="overview__right">
                        <PieChart/>
                        <Graph/>
                    </div>
                    </>
                }
            </div>
            
        </div>
    )
}

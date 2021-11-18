import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {useState, useEffect} from 'react';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

export default function Graph(props) {

    //to be used to get real data for graphs
    const getHistoricalCountryData = async () => {
        const endPoint = ( !props.selectedCountry || props.selectedCountry === 'Global' ) ? 'all' : `${props.selectedCountry}`;

        const response = await fetch(`https://disease.sh/v3/covid-19/historical/${endPoint}`);
        const responseData = await response.json();
        console.log(responseData);
    }

    useEffect(() => {
        getHistoricalCountryData()
    }, [])

    return (
        <div className='overview__graph'>        
          <ResponsiveContainer  width='95%'>
            <LineChart
            width={400}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#b6b6b6" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#b6b6b6" />
            </LineChart>
        </ResponsiveContainer>
        </div>
    )
}


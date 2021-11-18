import React from 'react';
import { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Label } from 'recharts';



export default function PieChartComponent(props) {

    // from recharts docs
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#e64141'];
  
    const RADIAN = Math.PI / 180;
    const renderCustomisedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
          {'value'}
        </text>
      );
    };
    
    if (!props.pieChartData) (<p>Loading...</p>) 

    return (    
        <div className='overview__pieChart' 
            style= {{ 
                borderRadius: '10px',
                boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.25)'
                }}
        >        
            <div className='overview__pieChartLabel'>
                <h3>Most affected countries</h3>
            </div>
            <PieChart className='overview__pieChart' width={200} height={200}>    
                <Pie
                    data={props.pieChartData}
                    cx='50%'
                    cy='50%'
                    labelLine={false}
                    label={renderCustomisedLabel}
                    innerRadius={60}
                    outerRadius={95}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey='value'
                    >
                    {props.pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
               
            </PieChart>
        </div>
    )
}

import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

export default function Dropdown(props) {

    

    const handleFilterChange = event => {
        props.setSelectedCountry(event.target.value)
    }

    return (
        <div className='overview__dropdown'>
            <form >
            <input type="search" name="country" list="countryList" placeholder='type a country' onChange={handleFilterChange}/>
                <datalist id="countryList">
                    <option key="Global" value="Global">Global</option>
                    {props.countries.map(c => {
                        return (
                            <option key={c.name} value={c.name}>{c.name}</option>
                        )
                    })}
                </datalist>
            </form>
            
        </div>
       
        
      );
    }

    

     
     
      
        {/* // <Autocomplete
        //     disablePortal
        //     className= "overview-dropdown"
        //     options={countriesHardCoded}
        //     style={{
        //         color: 'gray'
        //     }}
        //     renderInput={(params) => <TextField {...params} label="type a country" />}
        //     //getOptionLabel={option => `${option.name}`}
        //     //renderOption=
        // />  */}
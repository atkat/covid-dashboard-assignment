import React from 'react';

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

import React from 'react';
import {Link} from 'react-router-dom';


const Country = (props)=>{
    const{name, population, area, alpha3Code }= props.country ;
    const countryStyle={ 
        border:'1px solid purple',
        margin:'10px',
        padding:'10px',
        borderRadius:'20px',

    }
return ( 
    <div style={countryStyle}>
        <h3>Name:{name}</h3>
        <p><small>Population: {population}</small></p>
        <p><small>Area: {area}</small></p>
        <p><Link to ={`/country/${alpha3Code}`}><button>Country Details</button></Link></p>
        


    </div>

);
};
export default Country;
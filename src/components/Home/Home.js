import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';




const Home = () => {
    const [country, setCountry]= useState([]);
    ;
    useEffect(()=> { 
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(data=> setCountry(data))
     
    },[])
    return (
        <div >
            <h3>Total Country: {country.length}</h3>
            { 
            country.map(cntry=><Country country={cntry}></Country>)
            }

        </div>
    );
};

export default Home;
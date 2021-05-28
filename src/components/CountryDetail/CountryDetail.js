import React, {useState, useEffect}from 'react';
import { useParams } from 'react-router';
const CountryDetail = (props) => {
    const {countryCode}= useParams();
    const [countryDetails, setCountryDetails]= useState({});

    useEffect(()=>{  
const url =`https://restcountries.eu/rest/v2/name/${countryCode}`
fetch(url)
.then(res=>res.json())
.then(data=>setCountryDetails(data))

    },[]);
   
    return (
        <div>
            <h3>This is country detail : {countryCode}</h3>
            <p>Region: {countryDetails.name}</p>
          

        </div>
    );
};

export default CountryDetail;
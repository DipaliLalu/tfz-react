/* eslint-disable array-callback-return */
import React, { useState } from 'react'
const countries = [
    {
        name: "China",
        code: "CH",
        cities: ["Hong Kong", "Beijing", "Shanghai", "Hefei", "Shishi"]
    },
    {
        name: "France",
        code: "FN",
        cities: ["Paris", "Toulouse", "Lyon",  "Montpellier"]
    },
    {
        name: "Japan",
        code: "JP",
        cities: ["Nagoya", "Toyohashi", "Seto", "Handa", "Toyokawa"]
    },
    {
        name: "United States",
        code: "US",
        cities: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"]
    },
    {
        name: "Canada",
        code: "CA",
        cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"]
    },
    {
        name: "India",
        code: "IN",
        cities: ["Junagadh", "Rajkot", "Surat", "Vapi", "Jamanager"]
    }];

function Dropdown() {
    const [city, setCity] = useState([]);
    return (
        <div className='container p-5 bg-secondary-subtle mt-5 w-50 d-flex justify-content-around gap-4 rounded-5'>
            <select name="" id="" onChange={(e) => {
                const city = countries.filter((value) => {
                    if (value.name === e.target.value) {
                        return value
                    }
                })
                const citys = city[0].cities; 
                console.log(citys)
                setCity(citys)
            }} value={countries.name} className='form-control'>
                <option value="countrie">Countries</option>
                {countries.map((country) => {
                    return <option key={country.code} value={country.name}>{country.name}</option>
                })}
            </select>

            <select name="" id="" className='form-control'>
                <option value="city">Cities</option>
                {city.map((value) => {
                    return <option key={value} value={value}>{value}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown

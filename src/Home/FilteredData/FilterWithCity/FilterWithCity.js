import React from 'react';
import cityUnavailable from './city_unavailable.png'
const FilterWithCity = () => {
    return (
        <div className="text-center m-5">
            <h3>This City type data is Unavailable in given JSON Data.</h3>
            <img src={cityUnavailable} alt="" style={{height:'600px', border:'2px solid gray'}}/>
        </div>
    );
};

export default FilterWithCity;
import React, { useEffect, useState } from 'react';
import CompanyCard from '../../CompanyCard/CompanyCard';

const FilterWithRegion = () => {
    const [filteredWithRegionCompanies, setFilteredWithRegionCompanies] = useState([])

    const [filterWithRegion, setFilterWithRegion] = useState('')

    const handleFilterWithRegion = event => {
        setFilterWithRegion(event.target.value)
        event.prevent.default() 
    }

    useEffect(() => {
        fetch('https://peaceful-plains-79276.herokuapp.com/filteredWithRegion?search=' + filterWithRegion)
            .then(res => res.json())
            .then(data => setFilteredWithRegionCompanies(data))
    }, [filterWithRegion])
    return (
        <div >
            <div className="row">
                <div class="input-group mb-3 w-50 text-center container-fluid mt-4 col-lg-10">
                    <span class="input-group-text"><h4>Filter with <span className="text-primary">Region</span></h4></span>
                    <input type="text" onChangeCapture={handleFilterWithRegion} class="form-control fs-5" aria-label="Amount (to the nearest dollar)" />
                    <span class="input-group-text">{(filteredWithRegionCompanies.length >= 0 && filteredWithRegionCompanies.length < 312) &&
                        <h4>{filteredWithRegionCompanies.length}</h4>
                    }</span>
                </div>
            </div>

            <div className="container g-3">
                <div className="row row-cols-lg-5">
                    
                    {
                        filteredWithRegionCompanies.map(company => <CompanyCard company={company} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FilterWithRegion;
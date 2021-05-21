import React, { useEffect, useState } from 'react';
import CompanyCard from '../../CompanyCard/CompanyCard';
const FilterWithSector = () => {
    const [filteredWithSectorCompanies, setFilteredWithSectorCompanies] = useState([])

    const [filterWithSector, setFilterWithSector] = useState('')

    const handleFilterWithSector = event => {
        setFilterWithSector(event.target.value)
    }

    useEffect(() => {
        fetch('https://peaceful-plains-79276.herokuapp.com/filteredWithSector?search=' + filterWithSector)
            .then(res => res.json())
            .then(data => setFilteredWithSectorCompanies(data))
    }, [filterWithSector])
    return (
        <div >
            <div className="row">
                <div class="input-group mb-3 w-50 text-center container-fluid mt-4 col-lg-10">
                    <span class="input-group-text"><h4>Filter with <span className="text-primary">Sector</span></h4></span>
                    <input type="text" onChangeCapture={handleFilterWithSector} class="form-control fs-5" aria-label="Amount (to the nearest dollar)" />
                    <span class="input-group-text">{(filteredWithSectorCompanies.length >= 0 && filteredWithSectorCompanies.length < 310) &&
                        <h4>{filteredWithSectorCompanies.length}</h4>
                    }</span>
                </div>
            </div>

            <div className="container g-3">
                <div className="row row-cols-lg-5">
                    
                    {
                        filteredWithSectorCompanies.map(company => <CompanyCard company={company} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FilterWithSector;
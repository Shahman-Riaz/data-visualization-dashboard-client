import React, { useEffect, useState } from 'react';
import CompanyCard from '../../CompanyCard/CompanyCard';

const FilterWithSource = () => {
    const [filteredWithSourceCompanies, setFilteredWithSourceCompanies] = useState([])

    const [filterWithSource, setFilterWithSource] = useState('')

    const handleFilterWithSource = event => {
        setFilterWithSource(event.target.value)
    }

    useEffect(() => {
        fetch('https://peaceful-plains-79276.herokuapp.com/filteredWithSource?search=' + filterWithSource)
            .then(res => res.json())
            .then(data => setFilteredWithSourceCompanies(data))
    }, [filterWithSource])
    return (
        <div>
            <div className="row">
                    <div class="input-group mb-3 w-50 text-center container-fluid mt-4 col-lg-10">
                            <span class="input-group-text"><h4>Filter with <span className="text-primary">Source</span></h4></span>
                            <input type="text" onChangeCapture={handleFilterWithSource} class="form-control fs-5" aria-label="Amount (to the nearest dollar)"/>
                                <span class="input-group-text">{(filteredWithSourceCompanies.length >= 0 && filteredWithSourceCompanies.length < 310) &&<h4>{filteredWithSourceCompanies.length}</h4>}
                        </span>
                    </div>
            </div>
            <div className="container g-3">
                        <div className="row row-cols-lg-5">
                       
                            {
                                filteredWithSourceCompanies.map(company => <CompanyCard company={company} />)
                            }
                        </div>
            </div>
        </div>
    );
};

export default FilterWithSource;
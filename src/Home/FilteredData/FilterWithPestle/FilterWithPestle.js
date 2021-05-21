import React, { useEffect, useState } from 'react';
import CompanyCard from '../../CompanyCard/CompanyCard';

const FilterWithPestle = () => {
    const [filteredWithPestleCompanies, setFilteredWithPestleCompanies] = useState([])

    const [filterWithPestle, setFilterWithPestle] = useState('')

    const handleFilterWithPestle = event => {
        setFilterWithPestle(event.target.value)
       
    }

    useEffect(() => {
        fetch('https://peaceful-plains-79276.herokuapp.com/filteredWithPestle?search=' + filterWithPestle)
            .then(res => res.json())
            .then(data => setFilteredWithPestleCompanies(data))
    }, [filterWithPestle])
    return (
        <div>
            <div className="row">
                <div class="input-group mb-3 w-50 text-center container-fluid mt-4 col-lg-10">
                    <span class="input-group-text"><h4>Filter with <span className="text-primary">Pestle</span></h4></span>
                    <input type="text" onChangeCapture={handleFilterWithPestle} class="form-control fs-5" aria-label="Amount (to the nearest dollar)" />
                    <span class="input-group-text">{(filteredWithPestleCompanies.length >= 0 && filteredWithPestleCompanies.length < 310) &&<h4>{filteredWithPestleCompanies.length}</h4>
                    }</span>
                </div>
            </div>

            <div className="container g-3">
                <div className="row row-cols-lg-5">
                    
                    {
                        filteredWithPestleCompanies.map(company => <CompanyCard company={company} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FilterWithPestle; 
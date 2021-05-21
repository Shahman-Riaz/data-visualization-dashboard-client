import React, { useEffect, useState } from 'react';
import CompanyCard from '../../CompanyCard/CompanyCard';

const FilterWithTopic = () => {
    const [filteredWithTopicCompanies, setFilteredWithTopicCompanies] = useState([])

    const [filterWithTopic, setFilterWithTopic] = useState('')

    const handleFilterWithTopic = event => {
        setFilterWithTopic(event.target.value)
      
    }

    useEffect(() => {
        fetch('https://peaceful-plains-79276.herokuapp.com/filteredWithTopic?search=' + filterWithTopic)
            .then(res => res.json())
            .then(data => setFilteredWithTopicCompanies(data))
    }, [filterWithTopic])

    return (
        <div>
            <div className="row">
                <div class="input-group mb-3 w-50 text-center container-fluid mt-4 col-lg-10">
                    <span class="input-group-text"><h4>Filter with <span className="text-primary"> Topic</span></h4></span>
                    <input type="text" onChangeCapture={handleFilterWithTopic} class="form-control fs-5" aria-label="Amount (to the nearest dollar)" />
                    <span class="input-group-text">{(filteredWithTopicCompanies.length >= 0 && filteredWithTopicCompanies.length < 310) &&<h4>{filteredWithTopicCompanies.length}</h4>}
                    </span>
                </div>
            </div>

            <div className="container g-3">
                <div className="row row-cols-lg-5">

                    {
                        filteredWithTopicCompanies.map(company => <CompanyCard company={company} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FilterWithTopic;
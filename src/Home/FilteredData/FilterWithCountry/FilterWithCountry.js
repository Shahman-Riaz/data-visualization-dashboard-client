import React, { useEffect, useState } from 'react';
import './FilterWithCountry.css'

const FilterWithCountry = () => {
    const [filteredWithCountryCompanies, setFilteredWithCountryCompanies] = useState([])

    const [filterWithCountry, setFilterWithCountry] = useState('')

    const handleFilterWithCountry = event => {
        setFilterWithCountry(event.target.value)
    }
                                                                  
    useEffect(() => {
        fetch('https://peaceful-plains-79276.herokuapp.com/filteredWithCountry?search='+filterWithCountry)
            .then(res => res.json())
            .then(data => setFilteredWithCountryCompanies(data))
    }, [filterWithCountry])
    return (
        <div>
            <div className="row">
                <div class="input-group mb-3 w-50 text-center container-fluid mt-4 col-lg-10">
                        <span class="input-group-text"><h4>Filter with <span className="text-primary">Country</span></h4></span>
                        <input type="text" placeholder="Input a Country name" onChangeCapture={handleFilterWithCountry} class="fs-5 form-control" aria-label="Amount (to the nearest dollar)"/>
                            <span class="input-group-text">{(filteredWithCountryCompanies.length >= 0 && filteredWithCountryCompanies.length < 100) &&
                        <h4>{filteredWithCountryCompanies.length}</h4>
                    }</span>
                    </div>
                </div>

           
            
            <div className="container g-3 filterByCountry">

           {
              (filteredWithCountryCompanies.length > 0 && filteredWithCountryCompanies.length <100) && <div>
                  <h3 className="text-center mb-3 table-headline">Filtered by Country: </h3>
               <table className="table table-borderless">
                     <thead>
                     <tr className="table-header">
                   <th className="text-secondary text-left" scope="col">No</th>
                   <th className="text-secondary" scope="col">Topic</th>
                   <th className="text-secondary" scope="col">Sector</th>
                   <th className="text-secondary" scope="col">Pestle</th>
                   <th className="text-secondary" scope="col">Start Year</th>
                   <th className="text-secondary" scope="col">End Year</th>
                   <th className="text-secondary" scope="col">Likelihood</th>
                   <th className="text-secondary" scope="col">Relevance</th>
                   <th className="text-secondary" scope="col">Intensity</th>
                   <th className="text-secondary" scope="col">Region</th>
                   <th className="text-secondary" scope="col">Country</th>
                   </tr>
                     </thead>
                     <tbody className="tbl-body">
                   {
                     filteredWithCountryCompanies.map((company, index) => 
                       <tr className="individual-order">
                           <td>{index + 1}</td>
                           <td>{company.topic}</td>
                           <td>{company.sector}</td>
                           <td>{company.pestle}</td>
                           <td>{company.start_year}</td>
                           <td>{company.end_year}</td>
                           <td>{company.likelihood}</td>
                           <td>{company.relevance}</td>
                           <td>{company.intensity}</td>
                           <td>{company.region}</td>
                           <td><b>{company.country}</b></td>
                       </tr>
                       )
                   }
               </tbody>
               </table>
               </div>
           }
            </div>
        </div>
    );
};

export default FilterWithCountry;
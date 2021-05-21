import React, { useEffect, useState } from 'react';

const FilterWithEndYear = () => {
    const [filteredWithEndYearCompanies, setFilteredWithEndYearCompanies] = useState([])

    const [filterWithEndYear, setFilterWithEndYear] = useState('')

    const handleFilterWithEndYear = event => {
        setFilterWithEndYear(event.target.value)
    }

    useEffect(() => {
        fetch('https://peaceful-plains-79276.herokuapp.com/filteredWithEndYear?search='+filterWithEndYear)
            .then(res => res.json())
            .then(data => setFilteredWithEndYearCompanies(data))
    }, [filterWithEndYear])
    return (
        <div>
        <div className="row">
            <div class="input-group mb-3 w-50 text-center container-fluid mt-4 col-lg-10">
                    <span class="input-group-text"><h4>Filter with <span className="text-primary"> End Year</span></h4></span>
                    <input type="text" placeholder="Input an End Year" onChange={handleFilterWithEndYear} class="fs-5 form-control" />
                        <span class="input-group-text">{(filteredWithEndYearCompanies.length >= 0 && filteredWithEndYearCompanies.length < 100) &&
                    <h4>{filteredWithEndYearCompanies.length}</h4>
                }</span>
                </div>
            </div>

       
        
        <div className="container g-3">

       {
          (filteredWithEndYearCompanies.length > 0 && filteredWithEndYearCompanies.length <100) && <div className="filterByEndYear">
              <h3 className="text-center mb-3 table-headline">Filtered by End Year: </h3>
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
                 filteredWithEndYearCompanies.map((company, index) => 
                   <tr className="individual-order">
                       <td>{index + 1}</td>
                       <td>{company.topic}</td>
                       <td>{company.sector}</td>
                       <td>{company.pestle}</td>
                       <td>{company.start_year}</td>
                       <td><b>{company.end_year}</b></td>
                       <td>{company.likelihood}</td>
                       <td>{company.relevance}</td>
                       <td>{company.intensity}</td>
                       <td>{company.region}</td>
                       <td>{company.EndYear}</td>
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

export default FilterWithEndYear;
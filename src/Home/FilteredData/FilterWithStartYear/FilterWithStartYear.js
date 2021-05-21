import React, { useEffect, useState } from 'react';
import CompanyCard from '../../CompanyCard/CompanyCard';
import './FilterWithStartYear.css'

const FilterWithStartYear = () => {
    const [filteredWithStartYearCompanies, setFilteredWithStartYearCompanies] = useState([])

    const [filterWithStartYear, setFilterWithStartYear] = useState('')

    const handleFilterWithStartYear = event => {
        setFilterWithStartYear(event.target.value)
    }

    useEffect(() => {
        fetch('https://peaceful-plains-79276.herokuapp.com/filteredWithStartYear?search='+filterWithStartYear)
            .then(res => res.json())
            .then(data => setFilteredWithStartYearCompanies(data))
    }, [filterWithStartYear])
    return (
        <div>
        <div className="row">
            <div class="input-group mb-3 w-50 text-center container-fluid mt-4 col-lg-10">
                    <span class="input-group-text"><h4>Filter with <span className="text-primary">StartYear</span></h4></span>
                    <input type="text" placeholder="Input a StartYear name" onChange={handleFilterWithStartYear} class="fs-5 form-control" aria-label="Amount (to the nearest dollar)"/>
                        <span class="input-group-text">{(filteredWithStartYearCompanies.length >= 0 && filteredWithStartYearCompanies.length < 100) &&
                    <h4>{filteredWithStartYearCompanies.length}</h4>
                }</span>
                </div>
            </div>

       
        
        <div className="container g-3">
            <div className="row row-cols-lg-5">
                
                {
                    filteredWithStartYearCompanies.map(company => <CompanyCard company={company} />)
                }
            </div>


   
        {/* {
          (filteredWithStartYearCompanies.length > 0 && filteredWithStartYearCompanies.length <100) && <div>
              <h3 className="text-center mb-3 table-headline">Filtered by Start Year: </h3>
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
                 filteredWithStartYearCompanies.map((company, index) => 
                   <tr className="individual-order">
                       <td>{index + 1}</td>
                       <td>{company.topic}</td>
                       <td>{company.sector}</td>
                       <td>{company.pestle}</td>
                       <td><b>{company.start_year}</b></td>
                       <td>{company.end_year}</td>
                       <td>{company.likelihood}</td>
                       <td>{company.relevance}</td>
                       <td>{company.intensity}</td>
                       <td>{company.region}</td>
                       <td>{company.country}</td>
                   </tr>
                   )
               }
           </tbody>
           </table>
           </div>
       }  */}

        </div>
    </div>
    );
};

export default FilterWithStartYear;
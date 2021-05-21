import React, { useEffect, useState } from 'react';
import CompanyCard from '../CompanyCard/CompanyCard';
import Spinner from '../Spinner/Spinner';

const MainBody = () => {
    const [companies, setCompanies] = useState([])
    useEffect(() => {
       fetch("https://peaceful-plains-79276.herokuapp.com/companies")
       .then(res => res.json())
       .then(data => setCompanies(data))
       
    },[])
    return (
        <div className="container-fluid g-5">
             <h3 className="text-center mt-1">All Data: </h3>
            <div className="row row-cols-lg-5">
            {
                companies.length === 0 &&<Spinner />
            }
           
            { 
                companies.map(company => <CompanyCard company={company}/>)
            }
        </div>
        </div>
    );
};

export default MainBody;
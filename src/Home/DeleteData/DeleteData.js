import React, { useEffect, useState } from 'react';
import './DeleteData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../Spinner/Spinner';

const DeleteData = () => {
    const [allCompanies, setAllCompanies] = useState([])
    useEffect(() => {
       fetch('https://peaceful-plains-79276.herokuapp.com/companies')
       .then(res => res.json())
       .then(data => setAllCompanies(data))
    },[])

    function deleteData(id){
        fetch(`https://peaceful-plains-79276.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
           alert('Data deleted successfully');
            window.location.reload();
        })
    }

    return (
        <div>
        {
            allCompanies.length === 0 && <Spinner />
        }
            { (allCompanies.length) &&
             <div>
                  <h3 className="text-center mb-3 table-headline">All Data: [{allCompanies.length}]</h3>
               <table className="table table-borderless delete-data container">
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
                   <th className="text-secondary" scope="col">Delete Data</th>
                   </tr>
                     </thead>
                     <tbody className="tbl-body">
                   {
                     allCompanies.map((company, index) => 
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
                           <td>{company.country}</td>
                           <td><button onClick={() => deleteData(company._id)}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                       </tr>
                       )
                   }
               </tbody>
               </table>
               </div>
           }
        </div>
    );
};

export default DeleteData;
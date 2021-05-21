import React from 'react';
import companies from '../FakeData/FakeData'
const AddCompany = () => {

// this component is only used to send all companies data to MongoDB.

    const handleAddCompanies = () => {
        fetch('https://peaceful-plains-79276.herokuapp.com/addCompanies', {
          method:'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(companies.slice())
        })
      }

    
    return (
        <div>
           {/* <button onClick={handleAddCompanies}>Add Com</button> */}
        </div>
    );
};

export default AddCompany;
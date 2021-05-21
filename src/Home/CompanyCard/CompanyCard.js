import React from 'react';
import './CompanyCard.css'
const CompanyCard = ({company}) => {
    const {intensity, likelihood,source,pestle, sector, relevance, start_year, country, topic, region, end_year} = company
    const capitalizeTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
    return (
        <div className="g-4 col-lg-3  col-md-4 ">

            <div className="company-card text-left">
            
            <ul></ul>
                <span className="mb-2">
                    <li>Topic: <span className="bold-text">{capitalizeTopic}</span></li>
                    <li>Sector: <span className="bold-text">{sector}</span></li>
                    <li>Source: <span className="bold-text">{source}</span></li>
                    <li>Pestle: <span className="bold-text">{pestle}</span></li>
                    <li>Start year: <span className="bold-text">{start_year}</span></li>
                    <li>End year: <span className="bold-text">{end_year}</span></li>
                    <li>Likelihood: <span className="bold-text">{likelihood}</span></li>
                    <li>Relevance: <span className="bold-text">{relevance}</span></li>
                    <li>Intensity: <span className="bold-text">{intensity}</span></li>
                    <li>Region: <span className="bold-text">{region}</span></li>
                    <li>Country: <span className="bold-text">{country}</span></li>
                    
                </span>
                
            
            
            

        </div>
        </div>
    );
};

export default CompanyCard;
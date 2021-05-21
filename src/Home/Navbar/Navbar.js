import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    
    return (
        <div className="row gx-5">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand navbar-headline" >Home</Link>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 fs-5 link-parent mb-lg-0">
                          
                            <li class="nav-item">
                                <Link class="nav-link text-dark" to="/country">Country</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link text-dark" to="/topic">Topic</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-dark" to="/sector">Sector</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-dark" to="/region">Region</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-dark" to="/pestle">Pestle</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-dark" to="/source">Source</Link>
                            </li>
                            
                            <li class="nav-item">
                                <Link class="nav-link text-dark" to="/endYear">End year</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-dark" to="/city">City</Link>
                            </li>
                            <li class="nav-item">
                            <Link  class="nav-link text-dark" to='/addNewData'>Add new data</Link>
                            </li>
                            <li class="nav-item">
                            <Link  class="nav-link text-dark" to='/deleteData'>Delete Data</Link>
                            </li>
                        </ul>
                        <span class="navbar-text">
                        <button style={{border:'1px solid white', padding:'10px', borderRadius:'8px'}}><Link  class="navbar-brand navbar-headline" >Data Visualization Filtering Dashboard</Link></button>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
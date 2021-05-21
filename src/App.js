import './App.css';
import MainBody from './Home/MainBody/MainBody';
import Navbar from './Home/Navbar/Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Home/NotFound/NotFound';
import FilterWithTopic from './Home/FilteredData/FilterWithTopic/FilterWithTopic';
import FilterWithCountry from './Home/FilteredData/FilterWithCountry/FilterWithCountry';
import FilterWithRegion from './Home/FilteredData/FilterWithRegion/FilterWithRegion';
import FilterWithSource from './Home/FilteredData/FilterWithSource/FilterWithSource';
import FilterWithSector from './Home/FilteredData/FilterWithSector/FilterWithSector';
import FilterWithPestle from './Home/FilteredData/FilterWithPestle/FilterWithPestle';
import FilterWithCity from './Home/FilteredData/FilterWithCity/FilterWithCity';
import FilterWithEndYear from './Home/FilteredData/FilterWithEndYear/FilterWithEndYear';
import AddNewData from './Home/AddNewData/AddNewData';
import DeleteData from './Home/DeleteData/DeleteData';

function App() {
  
  return (
        <Router>
          <Navbar />
          <Switch>

            <Route exact path="/">
              <MainBody />
            </Route>

            <Route path="/notFound">
              <NotFound />
            </Route>

            <Route path="/topic">
              <FilterWithTopic />
            </Route>

            <Route path="/country">
              <FilterWithCountry />
            </Route>

            <Route path="/region">
              <FilterWithRegion />
            </Route>

            <Route path="/source">
              <FilterWithSource />
            </Route>

            <Route path="/sector">
              <FilterWithSector />
            </Route>

            <Route path="/pestle">
              <FilterWithPestle />
            </Route>

            <Route path="/city">
              <FilterWithCity />
            </Route>

            <Route path="/endYear">
              <FilterWithEndYear />
            </Route>

            <Route path="/addNewData">
              <AddNewData />
            </Route>

            <Route path="/deleteData">
              <DeleteData />
            </Route>

          </Switch>
        
    </Router>
    
  );
}

export default App;

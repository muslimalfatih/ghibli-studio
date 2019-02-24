import * as React from 'react'
// import App from './App'
import FilmsPage from './pages/films/Films'
import FilmDetail from './pages/films/FilmDetail'
import PeoplesPage from './pages/peoples/Peoples'
import PeoplesDetail from './pages/peoples/PeopleDetail'
import LocationsPage from './pages/locations/Locations'
import LocationDetail from './pages/locations/LocationDetail'
import SpeciesPage from './pages/species/Species'
import SpeciesDetail from './pages/species/SpeciesDetail'
import VehiclesPage from './pages/vehicles/Vehicles'
import VehicleDetail from './pages/vehicles/VehicleDetail'
import { Switch, Route } from 'react-router-dom'


const Routes: React.SFC = () => (
  <Switch>
    <Route exact path="/" component={FilmsPage}/>
    <Route exact path="/films/:id" component={FilmDetail}/>
    <Route exact path="/people" component={PeoplesPage}/>
    <Route exact path="/people/:id" render={(props: any) => <PeoplesDetail {...props}/>}/>
    <Route exact path="/locations" component={LocationsPage}/>
    <Route exact path="/locations/:id" component={LocationDetail}/>
    <Route exact path="/species" component={SpeciesPage}/>
    <Route exact path="/species/:id" component={SpeciesDetail}/>
    <Route exact path="/vehicles" component={VehiclesPage}/>
    <Route exact path="/vehicles/:id" component={VehicleDetail}/>
  </Switch>
)

export default Routes




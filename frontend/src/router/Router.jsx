import React from "react";
import { Routes, Route ,Navigate} from "react-router-dom"
import Home from './../pages/Home'
import Vols from './../pages/Vols'
import Login from './../pages/Login'
import Register from './../pages/Register'
import Tours from './../pages/Tours'
import TourDetails from './../pages/TourDetails'
import SearchResult from './../pages/searchResult'
import ThankYou from "../pages/ThankYou";
import AdminTours from "../pages/AdminTours";
import Destination from "./../components/Destination/Destinations";
import Ticket from "../components/Ticket/Ticket";
const Routers =()=>{
    return (
        <Routes>
            <Route path="/" 
            element={<Navigate to='/home'/>}></Route>
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/tours' element={<Tours/>} />
        <Route path='/vols' element={<Vols/>} />
        <Route path='/thank-you' element={<ThankYou/>} />
        <Route path='/admin' element={<AdminTours/>} />
        <Route path='/ticket' element={<Ticket/>} />
        <Route path="/tour/:tourId" element={<TourDetails />} />
        <Route path='/tours/search' element={<SearchResult/>} />
        <Route path='/destinations' element={<Destination/>} />
        </Routes>
    )
};
export default Routers;

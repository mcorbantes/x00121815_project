//All our imports that we need
import React, { Component } from 'react';
import { StatCard } from '../components/Statcard/StatCard.jsx';
import { NavbarTop } from '../components/Navbar/NavbarTop.jsx';
import { Barchart } from '../components/Barchart/Barchart.jsx';
import { Linechart } from '../components/Linechart/Linechart.jsx';
import { BrushChart } from '../components/BrushChart/BrushChart.jsx';
import { TotalClicks } from '../components/TotalClicks/TotalClicks.jsx';
import { TotalPageReload } from '../components/TotalPageReload/TotalPageReload.jsx';
import { TotalSignIn } from '../components/TotalSignIn/TotalSignIn.jsx';
import { TotalSignOut } from '../components/TotalSignOut/TotalSignOut.jsx';

class Dashboard extends Component {
  render() {
    return (
        //where all our components are stored,
        //the dashboard is essentially a container for all the components
        <div className="container">
          <div className="navbarSpace">
            <NavbarTop/>
          </div>
          <div id="statcard" className="container-fluid">
            <StatCard/>
          </div>
          <div className="row" id="barchart">
            <Barchart/>
            <TotalClicks/>
          </div>
          <div className="row" id="linechart">
            <TotalSignIn/>
            <TotalSignOut/>
            <Linechart/>
          </div>
          <div className="row" id="brushchart">
            <BrushChart/>
            <TotalPageReload/>
          </div>
        </div>
    );
  }
}

export default Dashboard;

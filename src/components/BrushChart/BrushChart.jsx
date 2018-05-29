// All our imports that we need
import React, { Component } from 'react';
import { BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { BrushChartData } from '../../variables/Variables.jsx';

export class BrushChart extends Component {
  //Func so that when we (onClick) our update logo a notification at the top right of the screen appears
  createNotification = (notif) => {
    return () => {
      //a switch allows us for multiple cases, in this situation we only have 1 which is 'error'
      switch (notif) {
        case 'error':
          //if the case is 'error' which is the only 1 then it will display an error message
          NotificationManager.error('Error message: No update!', '', 3000, () => {
          });
          break;
        default:
      }
    };
  };

  render() {
    return (
        <div className="col-md-8">
          <h2>Brushchart : Total Page Reloads per day</h2>
          {/* We assign our update logo so that when we (onClick) we call our func createNotification */}
          <h4>Update Now! <i className="fas fa-sync fa-sm" id="reloadIcon"
                             onClick={this.createNotification('error')}></i></h4>
          <hr className="style"></hr>
          {/* Our brushchart graph, we import our brushCharData from variables folder and pass it in so that we are able to use it in our graph*/}
          <BarChart width={750} height={300} data={BrushChartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="9 9"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }}/>
            <ReferenceLine y={0} stroke='#000'/>
            <Brush dataKey='name' height={30} stroke="#8884d8"/>
            <Bar dataKey="Reloads" fill="#4d79ff"/>
          </BarChart>
          <NotificationContainer/>
        </div>
    );
  }
}

export default BrushChart;

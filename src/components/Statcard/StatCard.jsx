//All our imports that we need
import React, { Component } from 'react';
import Clock from 'react-live-clock';
import CountUp from 'react-countup';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export class StatCard extends Component {
  //Func so that when we (onClick) our update logo a notification at the top right of the screen appears
  createNotification = (notif) => {
    return () => {
      //a switch allows us for multiple cases, in this situation we only have 1 which is 'error'
      switch (notif) {
        case 'warning':
          //if the case is 'warning' which is the only 1 then it will display a warning message
          NotificationManager.warning('Error message: Already updated!', '', 3000, () => {
          });
          break;
        default:
      }
    };
  };

  render() {
    return (
        <div className="row">
          <div className="col-sm-3">
            <div className="well" id="stat1">
              <h4>Total Page Reload per Month <i className="fas fa-spinner fa-sm"></i></h4>
              {/*our counter to display numerical data to 'mimic live data'*/}
              <p id="statCard"><CountUp
                  className="counter"
                  start={1057}
                  end={9999}
                  duration={6000000}
                  useEasing={true}
                  useGrouping={true}
                  separator=","
                  decimals={3}
                  decimal=","
              />
              </p>
              <hr className="style"></hr>
              <p id="statCard">Update Now! <i className="fas fa-sync fa-sm" id="reloadIcon"
                                onClick={this.createNotification('warning')}></i></p>
              <div id="statCard">
                {/*Our clock, that is in real time based on the timezone you set*/}
                <Clock format={'HH:mm:ss A'} ticking={true} timezone={'Ireland/Dublin'}/>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="well" id="stat2">
              <h4>Total Amount of Clicks per Month <i className="fas fa-hand-pointer fa-"></i></h4>
              <p id="statCard"><CountUp
                  className="counter"
                  start={2057}
                  end={9999}
                  duration={600000}
                  useEasing={true}
                  useGrouping={true}
                  separator=","
                  decimals={3}
                  decimal=","
              /></p>
              <hr className="style"></hr>
              <p id="statCard">Update Now! <i className="fas fa-sync fa-sm" id="reloadIcon"
                                onClick={this.createNotification('warning')}></i></p>
              <div id="statCard">
                <Clock format={'HH:mm:ss A'} ticking={true} timezone={'Ireland/Dublin'}/>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="well" id="stat3">
              <h4>Total User Sign In per Month <i className="fas fa-user-plus fa-sm"></i></h4>
              <p id="statCard"><CountUp
                  className="counter"
                  start={115}
                  end={999}
                  duration={600000}
                  useEasing={true}
                  useGrouping={true}
                  separator=","
                  decimals={3}
                  decimal=","
              /></p>
              <hr className="style"></hr>
              <p id="statCard">Update Now! <i className="fas fa-sync fa-sm" id="reloadIcon"
                                onClick={this.createNotification('warning')}></i></p>
              <div id="statCard">
                <Clock format={'HH:mm:ss A'} ticking={true} timezone={'Ireland/Dublin'} id="time"/>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="well" id="stat4">
              <h4>Total User Sign Out per Month <i className="fas fa-user-times fa-sm"></i></h4>
              <p id="statCard"><CountUp
                  className="counter"
                  start={102}
                  end={990}
                  duration={600000}
                  useEasing={true}
                  useGrouping={true}
                  separator=","
                  decimals={3}
                  decimal=","
              /></p>
              <hr className="style"></hr>
              <p id="statCard">Update Now! <i className="fas fa-sync fa-sm" id="reloadIcon"
                                onClick={this.createNotification('warning')}></i></p>
              <div id="statCard">
                <Clock format={'HH:mm:ss A'} ticking={true} timezone={'Ireland/Dublin'} id="time"/>
              </div>
            </div>
          </div>
          <NotificationContainer/>
        </div>
    );
  }
}

export default StatCard;

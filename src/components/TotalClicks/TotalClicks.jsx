//All our imports that we need
import React, { Component } from 'react';
import Clock from 'react-live-clock';
import CountUp from 'react-countup';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export class TotalClicks extends Component {
  //Func so that when we (onClick) our update logo a notification at the top right of the screen appears
  createNotification = (notif) => {
    return () => {
      //a switch allows us for multiple cases, in this situation we only have 1 which is 'error'
      switch (notif) {
        case 'warning':
          //if the case is 'warning' which is the only 1 then it will display an warning message
          NotificationManager.warning('Error message: Already updated!', '', 3000, () => {
          });
          break;
        default:
      }
    };
  };

  render() {
    return (
        <div className="col-md-4" id="clickStat">
          <h4>Total Clicks per Week <i className="fas fa-hand-pointer fa-md"></i></h4>
          <p id="totalClicks"><CountUp
              className="counter"
              start={105}
              end={999}
              duration={60000}
              useEasing={true}
              useGrouping={true}
              separator=","
              decimals={3}
              decimal=","
          /></p>
          <hr className="style"></hr>
          {/* We assign our update logo so that when we (onClick) we call our func createNotification */}
          <p id="totalClicks">Update Now! <i className="fas fa-sync fa-md" id="reloadIcon"
                                             onClick={this.createNotification('warning')}></i></p>
          <div>
            <p id="totalClicks">
              <Clock format={'HH:mm:ss A'} ticking={true} timezone={'Ireland/Dublin'} id="time"/>
            </p>
          </div>
          <NotificationContainer/>
        </div>
    );
  }
}

export default TotalClicks;

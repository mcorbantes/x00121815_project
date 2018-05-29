//All our imports that we need
import React, { Component } from 'react';
import Clock from 'react-live-clock';
import CountUp from 'react-countup';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export class TotalPageReload extends Component {
  //Func so that when we (onClick) our update logo a notification at the top right of the screen appears
  createNotification = (notif) => {
    //a switch allows us for multiple cases, in this situation we only have 1 which is 'warning'
    return () => {
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
        <div className="col-md-4" id="reloadStat">
          <h4>Total Page Reloads per Week <i className="fas fa-hand-pointer fa-md"></i></h4>
          <p id="pageload"><CountUp
              className="counter"
              start={205}
              end={999}
              duration={60000}
              useEasing={true}
              useGrouping={true}
              separator=","
              decimals={3}
              decimal=","
          /></p>
          <hr className="style"></hr>
          <p id="pageload">Update Now! <i className="fas fa-sync fa-md" id="reloadIcon"
                            onClick={this.createNotification('warning')}></i></p>
          <div id="pageload">
            <Clock format={'HH:mm:ss A'} ticking={true} timezone={'Ireland/Dublin'} id="time"/>
          </div>
          <NotificationContainer/>
        </div>
    );
  }
}

export default TotalPageReload;

//All our imports that we need
import React, { Component } from 'react';
import Clock from 'react-live-clock';
import CountUp from 'react-countup';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export class TotalSignIn extends Component {
  createNotification = (notif) => {
    return () => {
      switch (notif) {
        case 'warning':
          NotificationManager.warning('Error message: Already updated!', '', 3000, () => {
          });
          break;
        default:
      }
    };
  };

  render() {
    return (
        <div className="col-md-2" id="signInStat">
          <h4>Total User Sign In per Week <i className="fas fa-user-plus fa-sm"></i></h4>
          <p id="sign"><CountUp
              className="counter"
              start={15}
              end={99}
              duration={60000}
              useEasing={true}
              useGrouping={true}
              separator=","
              decimals={3}
              decimal=","
          /></p>
          <hr className="style"></hr>
          <p id="sign">Update Now! <i className="fas fa-sync fa-sm" id="reloadIcon"
                            onClick={this.createNotification('warning')}></i></p>
          <div id="sign">
            <Clock format={'HH:mm:ss A'} ticking={true} timezone={'Ireland/Dublin'} id="time"/>
          </div>
          <NotificationContainer/>
        </div>
    );
  }
}

export default TotalSignIn;

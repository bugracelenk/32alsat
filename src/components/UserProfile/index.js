import React, { Component } from 'react';

import BasicInfo from '../BasicInfo/index';
import OtherInfo from '../OtherInfo/index';
import './styles.sass';

class UserProfile extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    return (
      <div className="infoWrapper">
        <BasicInfo editable={false}/>
        <OtherInfo editable={false}/>
      </div>
    );
  }
}

export default UserProfile;

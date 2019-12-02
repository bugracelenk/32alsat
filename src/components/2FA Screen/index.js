import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './styles.sass';

class TwoFAPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.modalWrapper.classList.add(this.props.openClass);
    }, 50);
  }

  close() {
    this.modalWrapper.classList.remove(this.props.openClass);
    setTimeout(() => {
      this.props.close();
    }, 850);
  }

  render() {
    return (
      <div className="addItemWrapper" ref={node => { this.modalWrapper = node; }}>
        <div className="hider" />
        <div className="modal">
          <div className="heading">
            <h3>2 Faktörlü Kimlik Doğrulaması</h3>
          </div>
          <div className="itemWrapper">
            
            <div className="itemInfoWrapper">
              <div className="inputWrapper">
                <label htmlFor="itemName">Gelen Kod:</label>
                <input id="itemName" name="itemName" type="text" className="itemName" placeholder="2FA Kodunu Giriniz" required />
              </div>
            </div>
          </div>
          <div className="buttonWrapper">
            <button className="saveItemBtn" onClick={this.close.bind(this)}>Vazgeç</button>
            <button className="saveItemBtn" onClick={this.props.btnFunction.bind(this)}>Onayla</button>
          </div>
        </div>
      </div>
    );
  }
}

TwoFAPage.propTypes = {
  close: PropTypes.func,
  openClass: PropTypes.string,
  btnFunction: PropTypes.func
};

export default TwoFAPage;

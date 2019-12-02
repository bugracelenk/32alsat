import React, { Component } from "react";
import { connect } from 'react-redux';
import { userLogin, storeLogin } from '../../actions/authActions';
import { browserHistory } from 'react-router';
import TwoFAPage from '../2FA Screen';
import "./styles.sass";

class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      email: "",
      modalOpened: false
    }

    this.onLgnBtn = this.onLgnBtn.bind(this);
  }
  closeModal() {
    this.setState({ modalOpened: false });
    document.body.classList.remove("modal-opened");
    document.body.style.marginRight = 0;
  }

  getModal() {
    if (this.state.modalOpened) {
      return (
        <TwoFAPage openClass="open" close={this.closeModal.bind(this)} btnFunction={() => {
          switch(this.state.email) {
            case "kullanici":
              this.props.userLogin();
              break;
            case "magaza":
              this.props.storeLogin();
              break;
            default: return;
          }
        }} />
      );
    } else {
      return;
    }
  }

  openModal() {
    const scrollBar = document.querySelector(".scrollbar-measure");
    const scrollBarWidth = scrollBar.offsetWidth - scrollBar.clientWidth;
    document.body.classList.add("modal-opened");
    document.body.style.marginRight = `${scrollBarWidth}px`;
    this.setState({ modalOpened: true });
  }

  onChange(e) {
    this.setState({ email: e.target.value})
  }

  onLgnBtn() {
    this.openModal();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.auth.loginType !== this.props.auth.loginType) {
      browserHistory.push("/")
    }
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector(".menu").classList.remove("open");
  }
  render() {
    return (
      <div>
        {this.getModal()}
        <div className="loginWrapper">
          <h3 className="loginHeading text-center">Giriş Yap</h3>
          <div className="inputWrapper">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              className="email"
              type="text"
              placeholder="Email"
              onChange= { this.onChange.bind(this)}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="password">Şifre:</label>
            <input
              id="password"
              className="password"
              type="password"
              placeholder="Şifre"
            />
          </div>
          <div className="btnWrapper">
            <button onClick={ () => {this.openModal()} } className="loginBtn lgnBtn">Giriş Yap</button>
          </div>
        </div>
        <div className="loginWrapper">
          <h3 className="loginHeading text-center">
            Sosyal Medya Hesaplarınızla Giriş Yapın
          </h3>
          <div className="btnWrapper">
            <button className="loginBtn fbBtn">Facebook İle Giriş</button>
            <button className="loginBtn googleBtn">Google İle Giriş</button>
            <button className="loginBtn twitterBtn">Twitter İle Giriş</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { userLogin, storeLogin })(Login);

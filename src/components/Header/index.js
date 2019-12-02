import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import "./styles.sass";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsName: ""
    };
    this.loggedInMenu = (
      <div className="menu">
        <Link
          onlyActiveOnIndex={true}
          key={1}
          to="/"
          activeClassName="activeNavLink"
          className="navLink"
        >
          Ana Sayfa
        </Link>
        <Link
          onlyActiveOnIndex={true}
          key={2}
          to="/search"
          activeClassName="activeNavLink"
          className="navLink"
        >
          Arama
        </Link>
        <Link
          onlyActiveOnIndex={true}
          key={3}
          to="/profile"
          activeClassName="activeNavLink"
          className="navLink"
        >
          Profil
        </Link>
        <Link
          onlyActiveOnIndex={true}
          key={4}
          to="/myItems"
          activeClassName="activeNavLink"
          className="navLink"
        >
          {this.state.itemsName}
        </Link>
        <a onClick={() => this.props.logout()} className="navLink">
          Çıkış Yap
        </a>
      </div>
    );

    this.loggedOutMenu = (
      <div className="menu loginMenu">
        <Link
          onlyActiveOnIndex={true}
          key={6}
          activeClassName="activeNavLink"
          className="navLink"
          to="/search"
        >
          Arama
        </Link>
        <Link
          onlyActiveOnIndex={true}
          key={7}
          activeClassName="activeNavLink"
          className="navLink"
          to="/login"
        >
          Giriş Yap
        </Link>
        <Link
          onlyActiveOnIndex={true}
          key={8}
          activeClassName="activeNavLink"
          className="navLink"
          to="/register"
        >
          Kayıt Ol
        </Link>
      </div>
    );
  }

  componentWillMount() {
    this.previousWidth = 0;
    this.menuButton = (
      <button
        className="menuBtn"
        onClick={() => {
          document.querySelector(".menu").classList.toggle("open");
        }}
      >
        MENU
      </button>
    );

    this.setNav();
    this.setMenuState(window.innerWidth);
    this.previousWidth = window.innerWidth;
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setMenuState(window.innerWidth);
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.loggedIn !== this.props.auth.loggedIn) {
      if (this.props.auth.loggedIn) {
        if (this.props.auth.loginType === "User") {
          this.loggedInMenu = (
            <div className="menu">
              <Link
                onlyActiveOnIndex={true}
                key={1}
                to="/"
                activeClassName="activeNavLink"
                className="navLink"
              >
                Ana Sayfa
              </Link>
              <Link
                onlyActiveOnIndex={true}
                key={2}
                to="/search"
                activeClassName="activeNavLink"
                className="navLink"
              >
                Arama
              </Link>
              <Link
                onlyActiveOnIndex={true}
                key={3}
                to="/profile"
                activeClassName="activeNavLink"
                className="navLink"
              >
                Profil
              </Link>
              <Link
                onlyActiveOnIndex={true}
                key={4}
                to="/myItems"
                activeClassName="activeNavLink"
                className="navLink"
              >
                İlanlarım
              </Link>
              <a onClick={() => this.props.logout()} className="navLink">
                Çıkış Yap
              </a>
            </div>
          );
        } else if (this.props.auth.loginType === "Store") {
          this.loggedInMenu = (
            <div className="menu">
              <Link
                onlyActiveOnIndex={true}
                key={1}
                to="/"
                activeClassName="activeNavLink"
                className="navLink"
              >
                Ana Sayfa
              </Link>
              <Link
                onlyActiveOnIndex={true}
                key={2}
                to="/search"
                activeClassName="activeNavLink"
                className="navLink"
              >
                Arama
              </Link>
              <Link
                onlyActiveOnIndex={true}
                key={3}
                to="/profile"
                activeClassName="activeNavLink"
                className="navLink"
              >
                Profil
              </Link>
              <Link
                onlyActiveOnIndex={true}
                key={4}
                to="/myItems"
                activeClassName="activeNavLink"
                className="navLink"
              >
                Mağazam
              </Link>
              <a onClick={() => this.props.logout()} className="navLink">
                Çıkış Yap
              </a>
            </div>
          );
        }
      }
    }
    this.setNav();
  }

  setMenuState(width) {
    if (this.previousWidth !== width) {
      if (width > 768) {
        const menu = document.querySelector("div.menu");
        if (menu) {
          menu.classList.remove("open");
        }
        this.setState({ menuActive: false });
      } else {
        this.setState({ menuActive: true });
      }
      this.previousWidth = width;
    }
  }

  setNav() {
    // check for auth here
    if (this.props.auth.loggedIn) {
      this.setState({ nav: this.loggedInMenu });
    } else {
      this.setState({ nav: this.loggedOutMenu });
    }
  }

  render() {
    return (
      <header className="header">
        <h1>
          <Link onlyActiveOnIndex={true} to="/" className="logo">
            32 Al-Sat
          </Link>
        </h1>
        <h1>
          <div className="inputWrapper">
            <input
              id="itemName"
              name="itemName"
              type="text"
              className="itemName"
              placeholder="Eşya Arayın..."
              required
            />
          </div>
        </h1>
        {this.state.menuActive ? this.menuButton : ""}
        {this.state.nav}
      </header>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, { logout })(Header);

import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./styles.sass";
const options = [
  { value: "kt1", label: "Kategori1" },
  { value: "kt2", label: "Kategori2" },
  { value: "kt3", label: "Kategori3" }
];
const options1 = [
  { value: "iln1", label: "İlan1" },
  { value: "iln2", label: "İlan2" },
  { value: "iln3", label: "İlan3" }
];
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kategori: "",
      seciliKategori: "",
      seciliIlan: "123",
      itemVisibilty: false
    };
    this._onSelect = this._onSelect.bind(this);
    this.onIlanSelect = this.onIlanSelect.bind(this);
  }

  _onSelect(option) {
    this.setState({ seciliKategori: option });
  }

  onIlanSelect(option) {
    this.setState({ seciliİlan: option });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.loginType !== this.props.auth.loginType) {
      browserHistory.push("/");
    }
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector(".menu").classList.remove("open");
  }
  render() {
    return (
      <div>
        <div className="loginWrapper">
          <h3 className="loginHeading text-center">Admin Panel</h3>
          <div className="inputWrapper">
            <label htmlFor="email">Kategori Ekle:</label>
            <input
              id="email"
              className="email"
              type="text"
              placeholder="Kategori Adı Giriniz"
              onChange={e => {
                this.setState({ kategori: e.target.value });
              }}
            />
          </div>
          <div className="btnWrapper">
            <button onClick={this.onLgnBtn} className="loginBtn lgnBtn">
              Kategori Ekle
            </button>
          </div>
          <div className="inputWrapper">
            <label htmlFor="password">Kategori Kaldır:</label>
            <div className="dd-wrapper">
              <Dropdown
                options={options}
                onChange={this._onSelect}
                value={options[0]}
                placeholder="Kategori Seçin"
              />
            </div>
            <div className="btnWrapper">
              <button className="loginBtn kdlrBtn">Kategoriyi Kaldır</button>
            </div>
          </div>
          <div className="inputWrapper">
            <label htmlFor="password">İlan Onayla:</label>
            <div className="dd-wrapper">
              <Dropdown
                options={options1}
                onChange={this.onIlanSelect}
                value={options1[0]}
                placeholder="İlan Seçin"
              />
            </div>
            <div className="btnWrapper">
              <button
                onClick={() => {
                  this.setState({ itemVisibilty: true })
                }}
                className="loginBtn gitBtn"
              >
                İlanı Göster
              </button>
            </div>
          </div>
        </div>
        <div className="itemPageWrapper" style={{ display: this.state.itemVisibilty ? "" : "none"}}>
          <div className="itemImgWrapper" />
          <div className="itemInfoWrapper">
            <a className="backLink" onClick={() => {this.setState({ itemVisibilty: false})}}>
              <span className="small">
                <svg
                  fill="#000000"
                  height="13"
                  viewBox="0 0 18 15"
                  width="13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 10l5 5 5-5z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </span>
              İlanı Kapat
            </a>
            <h3 className="itemName">Eloquent Javascript</h3>
            <p className="itemCost frm">₺40</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nulla
              modi, odit explicabo hic doloremque commodi ab molestiae. Iure
              voluptatem labore et aliquid soluta inventore expedita quam vel a
              earum!
            </p>
            <p className="seller frm">
              <Link to="user/123">
                <span>Bla Bla</span>
              </Link>{" "}
              Tarafından
            </p>
            <button className="reqTradeBtn normalBtn">İlanı Onayla</button>
            <button className="reqTradeBtn normalBtn" style={{ marginLeft: 20}}>İlanı Onaylama</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

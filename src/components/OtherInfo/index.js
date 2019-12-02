import React, { Component } from "react";
import {
  FaPlus,
  FaMinus,
  FaUserAltSlash,
  FaUserAlt,
  FaUserFriends
} from "react-icons/fa";
import { connect } from "react-redux";

import "./styles.sass";

class OtherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationEditing: false,
      contactEditing: false,
      followUser: "Takip Et",
      blockUser: "Engelle",
      showHesapMenu: false
    };

    this.followButton = this.followButton.bind(this);
    this.blockButton = this.blockButton.bind(this);
  }

  getLocationData() {
    if (this.props.editable) {
      if (this.state.locationEditing) {
        return (
          <div className="lIWrapper" key="lIWrapper">
            <div className="inputWrapper">
              <label htmlFor="sehir">Şehir:</label>
              <input
                id="sehir"
                className="sehir"
                type="text"
                placeholder="Şehir"
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="adres">Adres:</label>
              <input
                id="adres"
                className="adres"
                type="text"
                placeholder="Adres"
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="binaNo">Bina No:</label>
              <input
                id="binano"
                className="binaNo"
                type="text"
                placeholder="Bina No"
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="katDaire">Kat/Daire:</label>
              <input
                id="katdaire"
                className="katDaire"
                type="text"
                placeholder="Kat/Daire"
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="postaKodu">Posta Kodu:</label>
              <input
                id="postaKodu"
                className="postaKodu"
                type="text"
                placeholder="Posta Kodu"
              />
            </div>
          </div>
        );
      } else {
        return (
          <div className="lIWrapper" key="lIWrapperText">
            <div className="inputWrapper">
              <label>Şehir:</label>
              <p className="inputData">Isparta</p>
            </div>
            <div className="inputWrapper">
              <label>Adres:</label>
              <p className="inputData">Bahçelievler Mahallesi, 156. Cadde</p>
            </div>
            <div className="inputWrapper">
              <label>Bina No:</label>
              <p className="inputData">25</p>
            </div>
            <div className="inputWrapper">
              <label>Kat/Daire:</label>
              <p className="inputData">5/20</p>
            </div>
            <div className="inputWrapper">
              <label>Posta Kodu:</label>
              <p className="inputData">32200</p>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="lIWrapper" key="lIWrapperText">
          <div className="inputWrapper">
            <label>Şehir:</label>
            <p className="inputData">Isparta</p>
          </div>
          <div className="inputWrapper">
            <label>Adres:</label>
            <p className="inputData">Bahçelievler Mahallesi, 156. Cadde</p>
          </div>
          <div className="inputWrapper">
            <label>Bina No:</label>
            <p className="inputData">25</p>
          </div>
          <div className="inputWrapper">
            <label>Kat/Daire:</label>
            <p className="inputData">5/20</p>
          </div>
          <div className="inputWrapper">
            <label>Posta Kodu:</label>
            <p className="inputData">32200</p>
          </div>
        </div>
      );
    }
  }

  getContactData() {
    if (this.props.editable) {
      if (this.state.contactEditing) {
        return (
          <div className="cIWrapper" key="cIWrapper">
            <div className="inputWrapper">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                className="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="phone">Telefon No:</label>
              <input
                id="phone"
                className="phone"
                type="tel"
                placeholder="Telefon No"
              />
            </div>
          </div>
        );
      } else {
        return (
          <div className="cIWrapper" key="cIWrapperText">
            <div className="inputWrapper">
              <label>Email:</label>
              <p className="inputData">isparta@isparta.com</p>
            </div>
            <div className="inputWrapper">
              <label>Telefon No:</label>
              <p className="inputData">+91-9999999999</p>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="cIWrapper" key="cIWrapperText">
          <div className="inputWrapper">
            <label>Email:</label>
            <p className="inputData">isparta@isparta.com</p>
          </div>
          <div className="inputWrapper">
            <label>Telefon No:</label>
            <p className="inputData">+91-9999999999</p>
          </div>
        </div>
      );
    }
  }

  getButtons(info) {
    let buttons;
    if (this.props.editable) {
      if (!this.state.locationEditing && info === "LOCATION") {
        return (
          <button
            className="marB20"
            onClick={() => {
              this.setState({ locationEditing: true });
            }}
          >
            Düzenle
          </button>
        );
      } else if (!this.state.contactEditing && info === "CONTACT") {
        return (
          <button
            className="marB20"
            onClick={() => {
              this.setState({ contactEditing: true });
            }}
          >
            Düzenle
          </button>
        );
      } else {
        switch (info) {
          case "LOCATION":
            buttons = [
              <button
                className="marB20"
                key="lSave"
                onClick={() => {
                  this.setState({ locationEditing: false });
                }}
              >
                Kaydet
              </button>,
              <button
                className="marB20 cancelBtn"
                key="lCancel"
                onClick={() => {
                  this.setState({ locationEditing: false });
                }}
              >
                Vazgeç
              </button>
            ];

            break;
          case "CONTACT":
            buttons = [
              <button
                className="marB20"
                key="cSave"
                onClick={() => {
                  this.setState({ contactEditing: false });
                }}
              >
                Kaydet
              </button>,
              <button
                className="marB20 cancelBtn"
                key="cCancel"
                onClick={() => {
                  this.setState({ contactEditing: false });
                }}
              >
                Vazgeç
              </button>
            ];
            break;
        }
      }
      return buttons;
    }
  }

  followButton() {
    if (this.state.followUser === "Takip Et") {
      this.setState({ followUser: "Takipten Çık" });
    } else {
      this.setState({ followUser: "Takip Et" });
    }
  }
  blockButton() {
    if (this.state.blockUser === "Engelle") {
      this.setState({ blockUser: "Engeli Kaldır" });
    } else {
      this.setState({ blockUser: "Engelle" });
    }
  }
  render() {
    return (
      <div className="otherInfo">
        <div className="locationInfo">
          <div className="heading">
            <h3 className="normal marB20">Adres Bilgisi</h3>
            {this.getButtons("LOCATION")}
            {!this.props.editable ? (
              <button className="marB20 marL20" onClick={this.followButton}>
                {this.state.followUser === "Takip Et" ? (
                  <FaPlus style={{ marginBottom: -2 }} />
                ) : (
                  <FaMinus style={{ marginBottom: -2 }} />
                )}{" "}
                {this.state.followUser}
              </button>
            ) : null}
            {!this.props.editable ? (
              <button className="marB20 marL20" onClick={this.blockButton}>
                {this.state.blockUser === "Engelle" ? (
                  <FaUserAltSlash style={{ marginBottom: -2 }} />
                ) : (
                  <FaUserAlt style={{ marginBottom: -2 }} />
                )}{" "}
                {this.state.blockUser}
              </button>
            ) : null}
            {this.props.editable ? (
              <button
                onClick={() =>
                  this.setState({ showHesapMenu: !this.state.showHesapMenu })
                }
                className="marB20 marL20"
              >
                <FaUserAlt size={15} style={{ marginBottom: -2 }} /> Hesap
                İşlemleri
              </button>
            ) : null}
            {this.props.editable ? (
              <div>
                {this.state.showHesapMenu ? (
                  <div className="dd-menu-wrapper">
                    <button className="marB20 marL20">
                      <FaUserAlt size={15} style={{ marginBottom: -2 }} /> Hesap
                      Ekle
                    </button>
                    <button className="marB20 marL20">
                      <FaUserFriends size={15} style={{ marginBottom: -2 }} />{" "}
                      Hesap Değiştir
                    </button>
                    <button className="marB20 marL20">
                      <FaUserAltSlash size={15} style={{ marginBottom: -2 }} />{" "}
                      Hesap Kaldır
                    </button>
                  </div>
                ) : null}{" "}
              </div>
            ) : null}
          </div>
          {this.getLocationData()}
        </div>
        <div className="contactInfo">
          <div className="heading">
            <h3 className="normal marB20">İletişim Bilgisi</h3>
            {this.getButtons("CONTACT")}
          </div>
          {this.getContactData()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, null)(OtherInfo);

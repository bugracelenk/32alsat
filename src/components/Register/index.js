import React, { Component } from "react";
import { browserHistory } from 'react-router';
import "./styles.sass"; 

class Register extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector(".menu").classList.remove("open");
  }
  render() {
    return (
      <div className="infoWrapper">
        <div className="basicInfo">
          <div className="profilePic" />
          <div className="nameWrapper">
            <h3 className="normal">Profil Fotoğrafı Ekle</h3>
          </div>
        </div>
        <div className="lIWrapper" key="lIWrapper">
          <div className="inputWrapper">
            <label htmlFor="adSoyad">Ad Soyad:</label>
            <input
              id="adSoyad"
              className="adSoyad"
              type="text"
              placeholder="Ad Soyad"
            />
          </div>
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
          <div className="tradeBtnWrapper lower">
            <button onClick={() =>  { browserHistory.push("/login")}} className="registerBtn normalBtn">Kayıt Ol</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

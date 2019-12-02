import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './styles.sass';

class AddItemPage extends Component {
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
            <h3>Ürün Ekle</h3>
          </div>
          <div className="itemWrapper">
            <div className="itemPicWrapper">
              <div className="img" />
              <p className="imgText frm">Ürün Fotoğrafı Yükle</p>
            </div>
            <div className="itemInfoWrapper">
              <div className="inputWrapper">
                <label htmlFor="itemName">Adı:</label>
                <input id="itemName" name="itemName" type="text" className="itemName" placeholder="Ürünün Adını Giriniz" required />
              </div>
              <div className="priceWrapper">
                <div className="inputWrapper">
                  <label htmlFor="itemPrice">Fiyatı:</label>
                  <input min="0" id="itemPrice" name="itemPrice" type="number" className="itemPrice" placeholder="Fiyatı Giriniz" required />
                </div>
              </div>
              <div className="inputWrapper">
                <label htmlFor="itemDescription">Açıklama:</label>
                <textarea name="itemDescription" id="itemDescription" className="itemDescription" placeholder="Ürün Açıklamasını Giriniz" />
              </div>
              <div className="inputWrapper">
                <label htmlFor="itemTags">Etiketler(Virgül ile ayırın):</label>
                <textarea name="itemTags" id="itemTags" className="itemTags" placeholder="Etiketleri Giriniz" />
              </div>
            </div>
          </div>
          <div className="buttonWrapper">
            <button className="saveItemBtn" onClick={this.close.bind(this)}>Kaydet</button>
            <button className="cancelItemBtn" onClick={this.close.bind(this)}>Vazgeç</button>
          </div>
        </div>
      </div>
    );
  }
}

AddItemPage.propTypes = {
  close: PropTypes.func,
  openClass: PropTypes.string
};

export default AddItemPage;

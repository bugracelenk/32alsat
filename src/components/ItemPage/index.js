import React, { Component } from 'react';
import { Link } from 'react-router';
import { FaRegBookmark, FaHeart, FaBookmark } from 'react-icons/fa';
import { IoMdHeartDislike } from 'react-icons/io';
import './styles.sass';

class ItemPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Favorilere Ekle",
      like: "Beğen"
    }

    this.onClick = this.onClick.bind(this);
    this.likeButton = this.likeButton.bind(this);
  }

  onClick(){
    if(this.state.buttonText === "Favorilere Ekle") {
      this.setState({ buttonText: "Favorilerden Çıkar" })
    }else {
      this.setState({ buttonText: "Favorilere Ekle" })
    }
  }
  likeButton(){
    if(this.state.like === "Beğen") {
      this.setState({ like: "Beğenmekten Vazgeç" })
    }else {
      this.setState({ like: "Beğen" })
    }
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    return (
      <div className="itemPageWrapper">
        <div className="itemImgWrapper" />
        <div className="itemInfoWrapper">
          <Link className="backLink" to="/">
            <span className="small">
              <svg fill="#000000" height="13" viewBox="0 0 18 15" width="13" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10l5 5 5-5z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </span>Tüm Eşyalar
          </Link>
          <h3 className="itemName">Eloquent Javascript</h3>
          <p className="itemCost frm">₺40</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nulla modi, odit explicabo hic doloremque commodi ab molestiae. Iure voluptatem labore et aliquid soluta inventore expedita quam vel a earum!
          </p>
          <p className="seller frm"><Link to="user/123"><span>Bla Bla</span></Link> Tarafından</p>
          <button className="reqTradeBtn normalBtn">Takas Teklifinde Bulun</button>
          <button onClick= { this.onClick } className="addFavBtn normalBtn">{this.state.buttonText === "Favorilere Ekle" ? <FaBookmark size={15} style={{ marginBottom: -4}}/> : <FaRegBookmark size={15} style={{ marginBottom: -4}}/>} {this.state.buttonText}</button>
          <button onClick={ this.likeButton} className="likeBtn normalBtn">{this.state.like === "Beğen" ? <FaHeart size={15} style={{ marginBottom: -4}}/> : <IoMdHeartDislike size={15} style={{ marginBottom: -4}}/>} {this.state.like}</button>
        </div>
      </div>
    );
  }
}

export default ItemPage;

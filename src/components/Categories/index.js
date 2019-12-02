import React, { Component } from "react";
import "./styles.sass";
import Category from "../Category/index";
import { Label, Icon } from "semantic-ui-react";
import { browserHistory } from "react-router";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ["Ütü", "Buzdolabı", "Dolap", "Televizyon", "Masa"],
      selectedTags: []
    };
  }
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector(".menu").classList.remove("open");
  }
  render() {
    return (
      <div>
        <div className="heading">
          <h3 className="normal marB20">Etiketler</h3>
          <div className="inputWrapper">
            <label htmlFor="email">Min:</label>
            <input
              id="minVal"
              className="minval"
              type="text"
              placeholder="Min"
            />
          </div>
          <div className="inputWrapper marL20">
            <label htmlFor="email">Max:</label>
            <input
              id="maxVal"
              className="maxval"
              type="text"
              placeholder="Max"
            />
          </div>
          <button
            onClick={() => {
              browserHistory.push("/search/searchin-area");
            }}
            className="marL20 marB20 btnListele"
          >
            Listele
          </button>
        </div>
        <label htmlFor="etiketler">Seçilenler</label>
        <div className="tag-wrapper">
          {this.state.selectedTags.length > 0
            ? this.state.selectedTags.map(tag => (
                <Label onClick={() => {
                  console.log(this.state)
                  console.log(tag)
                  let result = this.state.selectedTags.filter(_tag => _tag !== tag);
                  console.log(result)
                  this.setState({ tags: [...this.state.tags, tag], selectedTags: result });
                }}>
                  {tag}
                  <Icon name="delete" />
                </Label>
              ))
            : null}
        </div>
        <label htmlFor="etiketler">Tüm Etiketler</label>
        <div className="tag-wrapper">
          {this.state.tags.map(tag => (
            <Label
              onClick={() => {
                let result = this.state.tags.filter(_tag => _tag !== tag);
                this.setState({
                  selectedTags: [...this.state.selectedTags, tag],
                  tags: result
                });
              }}
            >
              {tag}
              <Icon name="add" style={{ marginLeft: 5, marginRight: -3 }} />
            </Label>
          ))}
        </div>
        <h3 className="normal marB20">Kategoriler</h3>
        <main className="main">
          <Category title="kategoriler" />
          {"12345678901".split("").map((e, i) => (
            <Category key={i} />
          ))}
        </main>
      </div>
    );
  }
}

export default Homepage;

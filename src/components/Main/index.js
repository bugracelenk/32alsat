import React, { Component } from "react";
import "./styles.sass";
import Item from "../Item/index";

class Homepage extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector(".menu").classList.remove("open");
  }
  render() {
    return (
      <div>
        <main className="main">
          {"1234567890".split("").map((e, i) => (
            <Item key={i} />
          ))}
        </main>
        <div className="pagination-wrapper">
          <div className="pagination">
            <a className="prev page-numbers" href="javascript:;">geri</a>
            <span aria-current="page" className="page-numbers current">1</span>
            <a className="page-numbers" href="javascript:;">2</a>
            <a className="page-numbers" href="javascript:;">3</a>
            <a className="page-numbers" href="javascript:;">4</a>
            <a className="page-numbers" href="javascript:;">5</a>
            <a className="page-numbers" href="javascript:;">6</a>
            <a className="page-numbers" href="javascript:;">7</a>
            <a className="page-numbers" href="javascript:;">8</a>
            <a className="page-numbers" href="javascript:;">9</a>
            <a className="page-numbers" href="javascript:;">10</a>
            <a className="next page-numbers" href="javascript:;">ileri</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;

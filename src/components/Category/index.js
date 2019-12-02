import React, { Component, PropTypes } from "react";
// import {Link} from 'react-router';

import "./styles.sass";

class Category extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: false
    }
  }
  render() {
    return (
      <div className="item">
        <div
          className={this.state.selected ? "content selected" : "content"}
          onClick={
            this.props.title
              ? null
              : () => {
                  this.setState({ selected: !this.state.selected})
                }
          }
          style={this.props.title ? { cursor: "default" } : null}
        >
          {this.props.title ? this.props.title : ""}
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  title: PropTypes.String
};

export default Category;
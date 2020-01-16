import React, { Component } from "react";

class LikedMovie extends Component {
  render() {
    let classLike = "";
    if (this.props.movie.like) classLike = "fa fa-heart";
    else classLike = "fa fa-heart-o";
    return (
      <i
        className={classLike}
        onClick={this.props.onClick}
        aria-hidden="true"
      ></i>
    );
  }
}

export default LikedMovie;

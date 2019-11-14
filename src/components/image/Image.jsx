import React from "react";

class Image extends React.Component {
  render() {
    return (
      <div
        style={{
          margin: "0 auto",
          width: this.props.width
        }}
      >
        >
        <img src={this.props.imageSrc} alt="TODO" />
      </div>
    );
  }
}

export default Image;

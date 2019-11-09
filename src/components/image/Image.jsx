import { Block } from "jsxstyle";

import React from "react";

class Image extends React.Component {
  render() {
    return (
      <Block margin="0 auto" width={this.props.width}>
        <img src={this.props.imageSrc} alt="TODO" />
      </Block>
    );
  }
}

export default Image;

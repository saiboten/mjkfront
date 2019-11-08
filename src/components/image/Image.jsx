import { Block } from "jsxstyle";

import React from "react";

class Image extends React.Component {
  render() {
    <Block margin="0 auto" width={this.props.width}>
      <img src={this.props.imageSrc} />
    </Block>;
  }
}

export default Image;

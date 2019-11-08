import { Block } from 'jsxstyle';

import React from 'react';

var Image = React.createClass({
   render: function() {
        <Block margin="0 auto" width={this.props.width}>
            <img src={this.props.imageSrc} />
        </Block>
   }
});

export default Image;
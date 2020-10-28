import ReactAudioPlayer from "react-audio-player";

import React from "react";

interface Props {
  link: string;
}

const SongAudio = (props: Props) => {
  /* var audioProps = {
            src: this.props.link,
            preload: "none",
            controls: "yes"
        };

        <Block width="100%" component="audio" props={audioProps}>
        <a href={this.props.link}>Last ned låt</a>
        </Block> */

  return (
    <ReactAudioPlayer
      src={props.link}
      controls
      style={{
        width: "100%",
      }}
    />
  );
};

export default SongAudio;

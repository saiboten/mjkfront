import { Block } from "jsxstyle";
import React from "react";
import { Days } from "./days/Days";
import { Footer } from "./footer/Footer";
import { Facebook } from "./facebook/Facebook";
import { SingleGuessDayContainer } from "./days/day/SingleGuessDayContainer";
import { Wrapper } from "./lib/Wrapper";
import { UserStatisticsContainer } from "./userresults/UserStatisticsContainer";
import { HighScoreContainer } from "./highscore/HighScoreContainer";
import { CurrentUserStatisticsContainer } from "./user/CurrentUserStatisticsContainer";

export class Main extends React.Component {
  render() {
    // var imgStyle = { width: "100%" };
    var imgAttributes = {
      src: "/static/images/santas.png",
      alt: "Julenisse"
    };

    return (
      <>
        <Wrapper>
          <Block
            mediaQueries={{
              sm: "screen and (max-width: 450px)"
            }}
            display="flex"
            flexDirection="column"
            smFlexDirection="row"
            smJustifyContent="space-between"
            smAlignItems="center"
            smPadding="5px"
          >
            <Block component="h1" textAlign="center">
              Musikkjulekalender!
            </Block>
            <Block
              mediaQueries={{
                sm: "screen and (max-width: 450px)"
              }}
              height="300px"
              width="232px"
              margin="0 auto"
              smWidth="50px"
              smHeight="50px"
              smMarginRight="10px"
              smBorderRadius="50%"
              component="img"
              props={imgAttributes}
            />
          </Block>
          <Block display="flex" flexWrap="wrap" padding="5px">
            <SingleGuessDayContainer />
          </Block>
          <UserStatisticsContainer />
          <HighScoreContainer />
          <CurrentUserStatisticsContainer />
          <Days />
          <p className="smallspace">
            Følg oss gjerne på{" "}
            <a href="https://www.facebook.com/musikkjulekalender">facebook!</a>
          </p>
          <Facebook />
        </Wrapper>
        <Footer />
      </>
    );
  }
}

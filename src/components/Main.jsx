import { Block } from "jsxstyle";
import React from "react";
import { Days } from "./days/Days";
import { Footer } from "./footer/Footer";
import { Facebook } from "./facebook/Facebook";
import { SingleGuessDay } from "./days/day/SingleGuessDay";
import { Wrapper } from "./lib/Wrapper";
import styled from "styled-components";
import { UserStatistics } from "./userresults/UserStatistics";
import { CurrentUserStatistics } from "./user/CurrentUserStatistics";
import { HighScoreList } from "./highscore/HighScoreList";

const StyledTwoColumns = styled.div`
  display: flex;
  justify-content: space-around;
`;

export class Main extends React.Component {
  render() {
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
          <StyledTwoColumns>
            <SingleGuessDay />
            <CurrentUserStatistics />
          </StyledTwoColumns>
          <StyledTwoColumns>
            <UserStatistics />
            <HighScoreList />
          </StyledTwoColumns>
          <Days />
          <Facebook />
        </Wrapper>
        <Footer />
      </>
    );
  }
}

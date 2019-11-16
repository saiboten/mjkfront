import React from "react";
import { Wrapper } from "../lib/Wrapper";
import styled from "styled-components";
import { H2 } from "../lib/Heading";

const StyledContent = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
`;

const StyledParagraph = styled.p`
  margin-bottom: 1rem;
`;

export const About = function() {
  return (
    <Wrapper>
      <StyledContent>
        <H2>Om kalenderen</H2>
        <StyledParagraph>
          Hver dag åpnes det en ny luke i kalenderen. Hver luke er et lydklipp,
          og din oppgave er å gjette hvilken låt som spilles!
        </StyledParagraph>
        <StyledParagraph>
          Du vil umiddelbart få svar på om du hadde riktig eller feil svar.
        </StyledParagraph>
        <StyledParagraph>
          Vi har en toppscoreliste som viser hvem som leder konkurrensen, i
          tillegg til en dagsliste med de som har svart riktig på dagens
          oppgave.
        </StyledParagraph>
        <StyledParagraph>
          Den beste brukeren blir premiert med et krus for to, og et diplom!
        </StyledParagraph>

        <H2>Bidragsytere</H2>
        <div style={{ marginBottom: "1rem" }}>
          Kalenderen hadde ikke vært mulig uten følgende flotte mennesker:
          <ul
            style={{
              paddingLeft: "2rem"
            }}
          >
            <li>Stein</li>
            <li>Tomas</li>
            <li>"Skøyerfanden"</li>
            <li>Bjarte</li>
            <li>Kim</li>
            <li>Matt</li>
            <li>Sindre</li>
          </ul>
        </div>

        <H2>Kontakt</H2>
        <StyledParagraph>
          Den enkleste måten å ta kontakt med folket bak kalenderen er å bruke
          vår{" "}
          <a href="https://www.facebook.com/musikkjulekalender">
            facebook-side
          </a>
        </StyledParagraph>
        <StyledParagraph>
          Det er også mulig å ta kontakt med mannen bak kalenderen - Tobias - på{" "}
          <a href="http://www.twitter.com/saiboten">twitter</a>
        </StyledParagraph>
      </StyledContent>
    </Wrapper>
  );
};

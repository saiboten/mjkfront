import React from "react";
import { Wrapper } from "../lib/Wrapper";
import styled from "styled-components";
import { H2 } from "../lib/Heading";
import { Profile } from "./Profile";
import { ListElement, UnorderedList } from "../lib/ListElement";
import { Paragraph } from "../lib/Paragraph";

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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(25rem, 1fr))",
            gridGap: "1rem",
            justifyItems: "center"
          }}
        >
          <Profile image="/static/images/bjarte.png" name="Bjarte">
            <p style={{ marginBottom: "1rem" }}>
              Bjarte er en ekstremt dyktig og allsidig trommis, som spiller i
              flere band enn de fleste. Han spiller blant annet i/med:
            </p>
            <UnorderedList>
              <ListElement>Jarle H Olsen Quadrasonic</ListElement>
              <ListElement>Powerslaves</ListElement>
              <ListElement>Jon Martin Skauge</ListElement>
              <ListElement>Pretty Blue</ListElement>
              <ListElement>Pitch Black Mentality</ListElement>
              <ListElement>Preachers</ListElement>
              <ListElement>Fastloaders</ListElement>
              <ListElement>Stein Hauge Band,</ListElement>
              <ListElement>Brutallica</ListElement>
              <ListElement>og mange flere.</ListElement>
            </UnorderedList>
            <p>
              For mer detaljer, gå til&nbsp;
              <a href="https://bjartekhelland.com/">bjartekhelland.com</a>, der
              du også kan se videoer, m.m.
            </p>
          </Profile>
          <Profile
            image="/static/images/stein.png"
            name="Stein Henrik Olaussen"
          >
            <Paragraph>
              Stein er en gitarist, bassist, trommis, vokalist, frontmann og
              generelt multiinstrumentalist. Han er mannen bak prosjektet Denver
              Mini, som hadde sin storhetstid på midten av 2000-tallet, og
              spiller for øyeblikket i band som Værbitt og Kalfaret.
            </Paragraph>
            <Paragraph>
              Når Stein ikke spiller musikk, så løper han. Og han løper langt,
              og fort. I år sprang han inn til 2:38:59 på Berlin Maraton, en tid
              som er hinsides all fornuft.
            </Paragraph>
          </Profile>
          <Profile image="/static/images/skoyerfanden.png" name="Tomas">
            Info kommer
          </Profile>
          <Profile image="/static/images/skoyerfanden.png" name="Skøyerfanden">
            Skøyerfanden. Ingen vet noe om denne skikkelsen.
          </Profile>
          <Profile image="/static/images/skoyerfanden.png" name="Kim">
            Kim liker bass!
          </Profile>
          <Profile image="/static/images/skoyerfanden.png" name="Matt Weigand">
            Matt
          </Profile>
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

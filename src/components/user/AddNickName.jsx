import React, { useState, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { InputLabel } from "../lib/InputLabel";
import { Input } from "../lib/Input";
import { Form } from "../lib/Form";
import { FieldSet } from "../lib/FieldSet";
import { setNickName as setNickNameAPI } from "../../api/userApi";
import { StyledButton } from "../lib/StyledButton";
import { ReactComponent as EditIcon } from "./edit.svg";
import styled from "styled-components";

const StyledEditIcon = styled(EditIcon)`
  fill: "blue";
  position: absolute;
  right: 0;
  top: 0;
`;

export function AddNickName() {
  const { user, setUser } = useContext(DataContext);

  const [edit, setEdit] = useState(false);
  const [nickName, setNickName] = useState("");
  const [feedback, setFeedback] = useState("");

  if (!user) {
    return null;
  }

  const isLoggedIn = user.userName !== undefined;

  function submitNickname(e) {
    e.preventDefault();

    setNickNameAPI(nickName)
      .then(data => {
        if (data.success) {
          setFeedback("Brukernavn oppdatert");
          setEdit(false);
          setUser({
            nickName,
            ...user
          });
        } else {
          setFeedback("Klarte ikke å oppdatere brukernavn. Prøv igjen senere.");
        }
      })
      .catch(() => {
        setFeedback("Klarte ikke å oppdatere brukernavn. Prøv igjen senere.");
      });
  }

  return (
    <div
      style={{
        marginBottom: "1rem"
      }}
    >
      {isLoggedIn && (
        <div style={{ position: "relative" }}>
          <span
            style={{
              paddingRight: "3rem"
            }}
          >
            Du er logget inn som{" "}
            <strong>{user.nickName || user.userName}</strong>
          </span>
          {!edit && (
            <StyledEditIcon onClick={() => setEdit(true)}>Hei</StyledEditIcon>
          )}
        </div>
      )}
      {edit && (
        <Form onSubmit={submitNickname}>
          <FieldSet>
            <InputLabel for="nickname">Endre brukernavn</InputLabel>
            <Input
              id="nickname"
              onChange={e => setNickName(e.target.value)}
              type="text"
            ></Input>
          </FieldSet>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StyledButton disabled={nickName.length < 3} type="submit">
              Endre
            </StyledButton>
          </div>
        </Form>
      )}
      {feedback}
    </div>
  );
}

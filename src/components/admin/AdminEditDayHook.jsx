import React, { useState } from "react";
import { array } from "prop-types";
import moment from "moment";
import DatePicker from "react-datepicker";
import { DateHeader } from "../DateHeader";
import SongAudio from "../days/day/SongAudio";
import Dropzone from "react-dropzone";
import request from "superagent";

import "@elastic/eui/dist/eui_theme_light.css";

import {
  EuiButton,
  EuiCheckboxGroup,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiFilePicker,
  EuiLink,
  EuiRange,
  EuiSelect,
  EuiSpacer,
  EuiSwitch,
  EuiText
} from "@elastic/eui";

import "react-datepicker/dist/react-datepicker.css";
import {
  updateDay,
  deleteDay,
  fetchAdminData,
  addSolution,
  deleteSolution
} from "../../api/adminApi";
import styled from "styled-components";
import { useField, Formik } from "formik";

const cooperators = [
  "Skøyerfanden",
  "Tomas",
  "Bjarte",
  "Tobias",
  "Kim",
  "Stein"
];

const MyTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <EuiFormRow label={label}>
      <>
        <EuiFieldText {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    </EuiFormRow>
  );
};

export function AdminEditDayHook({
  day: {
    link,
    description,
    revealDateAsString,
    solutionArtist,
    solutionSong,
    optionalSolutionVideo,
    revealDate,
    solutionDate
  }
}) {
  const [file, setFile] = useState(null);

  function onDrop(files) {
    // file: files[0]
  }

  function upload() {
    var req = request.post("/api/admin/upload/" + revealDateAsString);
    req.query({ filename: file.name });
    req.attach("file", file);

    req.end(function(err, res) {
      console.log("Success? ", res);
    });
  }

  function abortUpload() {
    // Reset state
  }

  var fileupload = (
    <p>
      <EuiButton onClick={upload}>Last opp</EuiButton>
      <EuiButton onClick={abortUpload}>Avbryt opplasting</EuiButton>
    </p>
  );

  return (
    <div>
      Hei
      <Formik
        initialValues={{
          description: description,
          link: link,
          artist: solutionArtist,
          song: solutionSong,
          revealDateAsString,
          optionalSolutionVideo,
          revealDate,
          solutionDate
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        render={props => (
          <EuiForm onSubmit={props.handleSubmit}>
            <MyTextField
              name="revealDateAsString"
              type="text"
              label="Åpningsdato"
            />
            <MyTextField name="description" type="text" label="Beskrivelse" />
            <MyTextField name="artist" type="text" label="Artist/Gruppe" />
            <MyTextField name="sang" type="text" label="Sang" />
            <MyTextField
              name="optionalSolutionVideo"
              type="text"
              label="Løsningsvideo"
            />
            <MyTextField name="link" type="text" label="Link" />
            <MyTextField name="revealDate" type="text" label="Luke åpner" />
            <MyTextField name="solutionDate" type="text" label="Løsningsdato" />
            <MyTextField
              name="difficulty"
              type="text"
              label="Vanskelighetsgrad"
            />
            <MyTextField name="cooperator" type="text" label="Bidragsyter" />
            <EuiButton type="submit">Submit</EuiButton>
          </EuiForm>
        )}
      />
    </div>
  );
}

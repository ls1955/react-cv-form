import { useState } from "react";

import GeneralInfoSection from "./GeneralInfoSection.jsx";
import EducationSection from "./EducationSection.jsx";
import JobSection from "./JobSection.jsx";
import CV from "./CV.jsx";

import "../styles/CVForm.css";

export default function CVForm() {
  const [info, setInfo] = useState({ name: "", email: "", tel: "" });
  const [educations, setEducations] = useState([
    {
      school: "",
      major: "",
      gradDate: "",
    },
  ]);
  const [jobs, setJobs] = useState([
    {
      company: "",
      position: "",
      from: "",
      to: "",
    },
  ]);
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = Array.from(document.querySelectorAll("input"));
    if (!inputs.every((input) => input.reportValidity())) return;

    setSubmitClicked(true);
  };

  if (submitClicked) {
    return (
      <CV
        info={info}
        educations={educations}
        jobs={jobs}
        onShowCV={setSubmitClicked}
      />
    );
  }

  return (
    <div>
      <h1>CV application</h1>
      <form id="cv-form">
        <GeneralInfoSection info={info} onUpdate={setInfo} />
        <EducationSection educations={educations} onUpdate={setEducations} />
        <JobSection jobs={jobs} onUpdate={setJobs} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

import { useState } from "react";

import GeneralSection from "./GeneralSection.jsx";
import EducationSection from "./EducationSection.jsx";
import JobSection from "./JobSection.jsx";
import CV from "./CV.jsx";

import "../styles/CVForm.css";

export default function CVForm() {
  const [info, setInfo] = useState({ name: "", email: "", tel: "" });
  const [educations, setEducations] = useState([
    { school: "", major: "", gradDate: "" },
  ]);
  const [jobs, setJobs] = useState([
    { company: "", position: "", from: "", to: "" },
  ]);
  const [showCV, setShowCV] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = Array.from(document.querySelectorAll("input"));
    if (!inputs.every((input) => input.reportValidity())) return;

    setShowCV(true);
  };

  if (showCV) {
    return (
      <CV
        info={info}
        educations={educations}
        jobs={jobs}
        onShowCV={setShowCV}
      />
    );
  }

  return (
    <div>
      <h1>CV application</h1>
      <form id="cv-form">
        <GeneralSection info={info} onUpdate={setInfo} />
        <EducationSection educations={educations} onUpdate={setEducations} />
        <JobSection jobs={jobs} onUpdate={setJobs} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

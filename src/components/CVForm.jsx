import { useState } from "react";

import GeneralInfoSection from "./GeneralInfoSection.jsx";
import EduExpsSection from "./EduExpsSection.jsx";
import JobExpsSection from "./JobExpsSection.jsx";
import CVFormResult from "./CVFormResult.jsx";

export default function CVForm() {
  const [info, setInfo] = useState({ name: "", email: "", tel: "" });
  const [eduExps, setEduExps] = useState([
    {
      school: "",
      major: "",
      gradDate: "",
    },
  ]);
  const [jobExps, setJobExps] = useState([
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
      <CVFormResult
        info={info}
        eduExps={eduExps}
        jobExps={jobExps}
        onEdit={setSubmitClicked}
      />
    );
  }

  return (
    <div>
      <h1>CV application</h1>
      <form>
        <GeneralInfoSection info={info} onUpdate={setInfo} />
        <EduExpsSection eduExps={eduExps} onUpdate={setEduExps} />
        <JobExpsSection jobExps={jobExps} onUpdate={setJobExps} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

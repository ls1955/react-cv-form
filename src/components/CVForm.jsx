import { useState } from "react";

import GeneralInfoSection from "./GeneralInfoSection.jsx";
import EduExpsSection from "./EduExpsSection.jsx";
import JobExpsSection from "./JobExpsSection.jsx";

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

    const inputs = Array.from(document.querySelectorAll("input"))
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

function CVFormResult({ info, eduExps, jobExps, onEdit }) {
  // Inform CVForm that we wanna edit the form again
  const handleEdit = () => onEdit(false);

  const eduList = eduExps.map((eduExp, i) => {
    return (
      <li key={i}>
        {eduExp["school"]} {`(Graduated at ${eduExp["gradDate"]})`}
        <p>{eduExp["major"]}</p>
      </li>
    );
  });
  const jobList = jobExps.map((jobExp, i) => {
    return (
      <li key={i}>
        {jobExp["position"]} at {jobExp["company"]} ({jobExp["from"]} -{" "}
        {jobExp["to"]})
      </li>
    );
  });

  return (
    <div className="result">
      <section>
        <h1>{info["name"]}</h1>
        <p>
          <b>Email:</b> {info["email"]}
        </p>
        <p>
          <b>Contact:</b> {info["tel"]}
        </p>
      </section>
      <section>
        <h2>Educational Experiences</h2>
        <ul>{eduList}</ul>
      </section>
      <section>
        <h2>Job Experiences</h2>
        <ul>{jobList}</ul>
      </section>

      <p className="notification">
        Thanks for submitting the form. You could still{" "}
        <button onClick={handleEdit} className="edit-form-button">edit the form</button>.
      </p>
    </div>
  );
}

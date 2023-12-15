import { useState } from "react";

import GeneralInfoSection from "./GeneralInfoSection.jsx";
import EduExpsSection from "./EduExpsSection.jsx";

export default function CVForm() {
  const [info, setInfo] = useState({ name: "", email: "", tel: "" });
  const [eduExps, setEduExps] = useState([
    {
      school: "",
      major: "",
      gradDate: "",
    },
  ]);
  const [jobExps, setJobExps] = useState({
    company: "",
    position: "",
    from: "",
    to: "",
  });
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <form>
      <h1>CV application</h1>
      <GeneralInfoSection info={info} onUpdate={setInfo} />
      <EduExpsSection eduExps={eduExps} onUpdate={setEduExps} />
      <JobExpsSection jobExps={jobExps} onUpdate={setJobExps} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

function JobExpsSection({ jobExps, onUpdate }) {
  const handleCompany = (e) =>
    onUpdate({ ...jobExps, company: e.target.value });
  const handlePosition = (e) =>
    onUpdate({ ...jobExps, position: e.target.value });
  const handleFrom = (e) => onUpdate({ ...jobExps, from: e.target.value });
  const handleTo = (e) => onUpdate({ ...jobExps, to: e.target.value });

  return (
    <fieldset>
      <legend>Job experiences</legend>
      <label>
        Company:{" "}
        <input
          type="text"
          value={jobExps["company"]}
          onChange={handleCompany}
        />
      </label>
      <label>
        Position:{" "}
        <input
          type="text"
          value={jobExps["position"]}
          onChange={handlePosition}
        />
      </label>
      <label>
        From:{" "}
        <input type="month" value={jobExps["from"]} onChange={handleFrom} />
      </label>
      <label>
        To: <input type="month" value={jobExps["to"]} onChange={handleTo} />
      </label>
    </fieldset>
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
        <ul>
          <li>
            {jobExps["from"]} - {jobExps["to"]} at {jobExps["company"]}
          </li>
        </ul>
      </section>

      <p>
        Thanks for submitting the form. You could still{" "}
        <button onClick={handleEdit}>edit the form</button>.
      </p>
    </div>
  );
}

import { useState } from "react";

export default function CVForm() {
  const [info, setInfo] = useState({ name: "", email: "", tel: "" });
  const [eduExps, setEduExps] = useState({
    schoolName: "",
    major: "",
    gradDate: "",
  });
  const [jobExps, setJobExps] = useState({
    companyName: "",
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

function GeneralInfoSection({ info, onUpdate }) {
  const handleName = (e) => onUpdate({ ...info, name: e.target.value });
  const handleEmail = (e) => onUpdate({ ...info, email: e.target.value });
  const handleTel = (e) => onUpdate({ ...info, tel: e.target.value });

  return (
    <fieldset>
      <legend>General information</legend>
      <label>
        Name: <input type="text" value={info["name"]} onChange={handleName} />
      </label>
      <label>
        Email:{" "}
        <input type="email" value={info["email"]} onChange={handleEmail} />
      </label>
      <label>
        Tel: <input type="tel" value={info["tel"]} onChange={handleTel} />
      </label>
    </fieldset>
  );
}

function EduExpsSection({ eduExps, onUpdate }) {
  const handleSchoolName = (e) =>
    onUpdate({ ...eduExps, schoolName: e.target.value });
  const handleMajor = (e) => onUpdate({ ...eduExps, major: e.target.value });
  const handleGradDate = (e) =>
    onUpdate({ ...eduExps, gradDate: e.target.value });

  return (
    <fieldset>
      <legend>Educational Experiences</legend>
      <label>
        School name:{" "}
        <input
          type="text"
          value={eduExps["schoolName"]}
          onChange={handleSchoolName}
        />
      </label>
      <label>
        Major:{" "}
        <input type="text" value={eduExps["major"]} onChange={handleMajor} />
      </label>
      <label>
        Graduation Date:{" "}
        <input
          type="month"
          value={eduExps["gradDate"]}
          onChange={handleGradDate}
        />
      </label>
    </fieldset>
  );
}

function JobExpsSection({ jobExps, onUpdate }) {
  const handleCompanyName = (e) =>
    onUpdate({ ...jobExps, companyName: e.target.value });
  const handlePosition = (e) =>
    onUpdate({ ...jobExps, position: e.target.value });
  const handleFrom = (e) => onUpdate({ ...jobExps, from: e.target.value });
  const handleTo = (e) => onUpdate({ ...jobExps, to: e.target.value });

  return (
    <fieldset>
      <legend>Job experiences</legend>
      <label>
        Company name:{" "}
        <input
          type="text"
          value={jobExps["companyName"]}
          onChange={handleCompanyName}
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
  const handleEdit = () => onEdit(false);

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
        <hr />
        <ul>
          <li>
            {eduExps["schoolName"]} {`(Graduated at ${eduExps["gradDate"]})`}
            <p>{eduExps["major"]}</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Job Experiences</h2>
        <hr />
        <ul>
          <li>
            {jobExps["from"]} - {jobExps["to"]} at {jobExps["companyName"]}
          </li>
        </ul>
      </section>
      <button onClick={handleEdit}>Edit form</button>
    </div>
  );
}

import { useState } from "react";

export default function CVForm() {
  const [info, setInfo] = useState({ name: "", email: "", tel: "" });
  const [eduExps, setEduExps] = useState({
    schoolName: "",
    major: "",
    gradDate: "",
  });

  return (
    <form>
      <GeneralInfoSection info={info} onUpdate={setInfo} />
      <EduExpsSection eduExps={eduExps} onUpdate={setEduExps} />
      <JobExpsSection />
    </form>
  );
}

function GeneralInfoSection({ info, onUpdate }) {
  const handleName = (e) => onUpdate({ ...info, name: e.target.value });
  const handleEmail = (e) => onUpdate({ ...info, email: e.target.value });
  const handleTel = (e) => onUpdate({ ...info, tel: e.target.value });

  return (
    <div>
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
    </div>
  );
}

function EduExpsSection({ eduExps, onUpdate }) {
  const handleSchoolName = (e) =>
    onUpdate({ ...eduExps, schoolName: e.target.value });
  const handleMajor = (e) => onUpdate({ ...eduExps, major: e.target.value });
  const handleGradDate = (e) =>
    onUpdate({ ...eduExps, gradDate: e.target.value });

  return (
    <div>
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
    </div>
  );
}

function JobExpsSection() {
  return (
    <div>
      <label>
        Company name: <input type="text" />
      </label>
      <label>
        Position: <input type="text" />
      </label>
      <label>
        From: <input type="month" />
      </label>
      <label>
        To: <input type="month" />
      </label>
    </div>
  );
}

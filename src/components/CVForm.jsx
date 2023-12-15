import { useState } from "react";

export default function CVForm() {
  const [info, setInfo] = useState({ name: "", email: "", tel: "" });
  const [eduInfo, setEduInfo] = useState({
    schoolName: "",
    major: "",
    graduationDate: "",
  });

  return (
    <form>
      <GeneralInformationSection info={info} onUpdate={setInfo} />
      <EducationExperiencesSection eduInfo={eduInfo} onUpdate={setEduInfo} />
      <PracticalExperiencesSection />
    </form>
  );
}

function GeneralInformationSection({ info, onUpdate }) {
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

function EducationExperiencesSection({ eduInfo, onUpdate }) {
  const handleSchoolName = (e) =>
    onUpdate({ ...eduInfo, schoolName: e.target.value });
  const handleMajor = (e) => onUpdate({ ...eduInfo, major: e.target.value });
  const handleGraduationDate = (e) =>
    onUpdate({ ...eduInfo, graduationDate: e.target.value });

  return (
    <div>
      <label>
        School name:{" "}
        <input
          type="text"
          value={eduInfo["schoolName"]}
          onChange={handleSchoolName}
        />
      </label>
      <label>
        Major:{" "}
        <input type="text" value={eduInfo["major"]} onChange={handleMajor} />
      </label>
      <label>
        Graduation Date:{" "}
        <input
          type="month"
          value={eduInfo["graduationDate"]}
          onChange={handleGraduationDate}
        />
      </label>
    </div>
  );
}

function PracticalExperiencesSection() {
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

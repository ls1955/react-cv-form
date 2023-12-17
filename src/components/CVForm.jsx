import GeneralSection from "./GeneralSection.jsx";
import EducationSection from "./EducationSection.jsx";
import JobSection from "./JobSection.jsx";

import "../styles/CVForm.css";

export default function CVForm({
  info,
  setInfo,
  educations,
  setEducations,
  jobs,
  setJobs,
  setShowCV,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = Array.from(document.querySelectorAll("input"));
    if (!inputs.every((input) => input.reportValidity())) return;

    setShowCV(true);
  };

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

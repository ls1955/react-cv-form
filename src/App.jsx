import React, { useState } from "react";

import CVForm from "./components/CVForm";
import CV from "./components/CV";

import "./App.css";

function App() {
  const [info, setInfo] = useState({ name: "", email: "", tel: "" });
  const [educations, setEducations] = useState([
    { school: "", major: "", gradDate: "" },
  ]);
  const [jobs, setJobs] = useState([
    { company: "", position: "", from: "", to: "" },
  ]);
  const [showCV, setShowCV] = useState(false);

  if (!showCV) {
    const props = {
      info,
      setInfo,
      educations,
      setEducations,
      jobs,
      setJobs,
      setShowCV,
    };

    return (
      <React.StrictMode>
        <CVForm {...props} />
      </React.StrictMode>
    );
  }

  return (
    <React.StrictMode>
      <CV
        info={info}
        educations={educations}
        jobs={jobs}
        onShowCV={setShowCV}
      />
    </React.StrictMode>
  );
}

export default App;

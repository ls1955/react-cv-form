import { useState } from "react";

export default function CVForm() {
  const [info, setInfo] = useState({ name: "", email: "", tel: "" });

  console.log(info)

  return (
    <form>
      <GeneralInformationSection info={info} setInfo={setInfo} />
      <EducationExperiencesSection />
      <PracticalExperiencesSection />
    </form>
  );
}

function GeneralInformationSection({ info, setInfo }) {
  const handleName = (e) => setInfo({...info, name: e.target.value});
  const handleEmail = (e) => setInfo({...info, email: e.target.value});
  const handleTel = (e) => setInfo({...info, tel: e.target.value});

  return (
    <div>
      <label>
        Name: <input type="text" value={info["name"]} onChange={handleName} />
      </label>
      <label>
        Email: <input type="email" value={info["email"]} onChange={handleEmail} />
      </label>
      <label>
        Tel: <input type="tel" value={info["tel"]} onChange={handleTel}/>
      </label>
    </div>
  );
}

function EducationExperiencesSection() {
  return (
    <div>
      <label>
        School name: <input type="text" />
      </label>
      <label>
        Title of study: <input type="text" />
      </label>
      <label>
        Graduation Date: <input type="month" />
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

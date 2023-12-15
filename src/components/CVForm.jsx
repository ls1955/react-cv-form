export default function CVForm() {
  return (
    <form>
      <GeneralInformationSection />
      <EducationExperiencesSection />
      <PracticalExperiencesSection />
    </form>
  );
}

function GeneralInformationSection() {
  return (
    <div>
      <label>
        Name: <input type="text" />
      </label>
      <label>
        Email: <input type="email" />
      </label>
      <label>
        Tel: <input type="tel" />
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
            <label>Company name: <input type="text" /></label>
            <label>Position: <input type="text" /></label>
            <label>From: <input type="month" /></label>
            <label>To: <input type="month" /></label>
        </div>
    )
}

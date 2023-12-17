import "../styles/CV.css";

export default function CV({ info, eduExps, jobExps, onShowCV }) {
  // Inform CVForm that we wanna edit the form again
  const handleEdit = () => onShowCV(false);

  const educationExperiences = eduExps.map((eduExp, i) => {
    return (
      <li key={i}>
        {eduExp["school"]} {`(Graduated at ${eduExp["gradDate"].substring(0, 4)})`}
        <p>{eduExp["major"]}</p>
      </li>
    );
  });
  const jobExperiences = jobExps.map((jobExp, i) => {
    return (
      <li key={i}>
        {jobExp["position"]} at {jobExp["company"]} ({jobExp["from"].substring(0, 4)} -{" "}
        {jobExp["to"].substring(0, 4)})
      </li>
    );
  });

  return (
    <>
      <div id="CV">
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
          <ul>{educationExperiences}</ul>
        </section>
        <section>
          <h2>Job Experiences</h2>
          <ul>{jobExperiences}</ul>
        </section>
      </div>
      <p className="notification">
        Thanks for submitting the form. You could still{" "}
        <button onClick={handleEdit} className="edit-form-button">
          edit the form here
        </button>
        .
      </p>
    </>
  );
}

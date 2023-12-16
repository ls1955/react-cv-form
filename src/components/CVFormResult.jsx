export default function CVFormResult({ info, eduExps, jobExps, onEdit }) {
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
    <>
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

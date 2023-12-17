import "../styles/CV.css";

export default function CV({ info, educations, jobs, onShowCV }) {
  const handleEdit = () => onShowCV(false);

  const educationListItems = educations.map((edu, i) => {
    return (
      <li key={i}>
        {edu["school"]} {`(Graduated at ${edu["gradDate"].substring(0, 4)})`}
        <p>{edu["major"]}</p>
      </li>
    );
  });
  const jobListItems = jobs.map((job, i) => {
    return (
      <li key={i}>
        {job["position"]} at {job["company"]} ({job["from"].substring(0, 4)} -{" "}
        {job["to"].substring(0, 4)})
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
          <ul>{educationListItems}</ul>
        </section>
        <section>
          <h2>Job Experiences</h2>
          <ul>{jobListItems}</ul>
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

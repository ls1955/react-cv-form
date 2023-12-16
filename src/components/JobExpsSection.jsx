import JobExpBlock from "./JobExpBlock";

export default function JobExpsSection({ jobExps, onUpdate }) {
  const handleAddField = (e) => {
    e.preventDefault();
    onUpdate([...jobExps, {
      company: "", position: "", from: "", to: ""
    }])
  }
  const jobBlocks = jobExps.map((jobExp, i) => {
    return (
      <JobExpBlock
        key={i}
        index={i}
        jobExp={jobExp}
        onUpdate={onUpdate}
        jobExps={jobExps}
      />
    );
  });

  return (
    <fieldset>
      <legend>Job experiences</legend>
      {jobBlocks}
      <button onClick={handleAddField}>+</button>
    </fieldset>
  );
}

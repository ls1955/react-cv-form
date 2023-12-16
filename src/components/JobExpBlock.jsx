export default function JobExpBlock({ jobExp, index, onUpdate, jobExps }) {
  const handleCompany = (e) => {
    const newJobExps = [...jobExps];
    newJobExps[index]["company"] = e.target.value;
    onUpdate(newJobExps);
  };
  const handlePosition = (e) => {
    const newJobExps = [...jobExps];
    newJobExps[index]["position"] = e.target.value;
    onUpdate(newJobExps);
  };
  const handleFrom = (e) => {
    const newJobExps = [...jobExps];
    newJobExps[index]["from"] = e.target.value;
    onUpdate(newJobExps);
  };
  const handleTo = (e) => {
    const newJobExps = [...jobExps];
    newJobExps[index]["to"] = e.target.value;
    onUpdate(newJobExps);
  };

  return (
    <fieldset>
      <legend>Job experiences</legend>
      <label>
        Company:{" "}
        <input type="text" value={jobExp["company"]} onChange={handleCompany} />
      </label>
      <label>
        Position:{" "}
        <input
          type="text"
          value={jobExp["position"]}
          onChange={handlePosition}
        />
      </label>
      <label>
        From:{" "}
        <input type="month" value={jobExp["from"]} onChange={handleFrom} />
      </label>
      <label>
        To: <input type="month" value={jobExp["to"]} onChange={handleTo} />
      </label>
    </fieldset>
  );
}

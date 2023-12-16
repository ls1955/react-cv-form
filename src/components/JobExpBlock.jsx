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
      <label>
        Company*:{" "}
        <input type="text" value={jobExp["company"]} onChange={handleCompany} required/>
      </label>
      <label>
        Position*:{" "}
        <input
          type="text"
          value={jobExp["position"]}
          onChange={handlePosition}
          required
        />
      </label>
      <label>
        From*:{" "}
        <input type="month" value={jobExp["from"]} max={jobExp["to"]} onChange={handleFrom} required/>
      </label>
      <label>
        To*: <input type="month" value={jobExp["to"]} min={jobExp["from"]} onChange={handleTo} required/>
      </label>
    </fieldset>
  );
}

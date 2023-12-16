export default function JobExpBlock({ index, onUpdate, jobExps }) {
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
        <input
          type="text"
          value={jobExps[index]["company"]}
          onChange={handleCompany}
          required
        />
      </label>
      <label>
        Position*:{" "}
        <input
          type="text"
          value={jobExps[index]["position"]}
          onChange={handlePosition}
          required
        />
      </label>
      <label>
        From*:{" "}
        <input
          type="month"
          value={jobExps[index]["from"]}
          onChange={handleFrom}
          required
        />
      </label>
      <label>
        To*:{" "}
        <input
          type="month"
          value={jobExps[index]["to"]}
          min={jobExps[index]["from"]}
          onChange={handleTo}
          required
        />
      </label>
    </fieldset>
  );
}

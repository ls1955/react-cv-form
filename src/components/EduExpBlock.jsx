export default function EduExpBlock({ eduExp, index, onUpdate, eduExps }) {
  const handleSchool = (e) => {
    const newEduExps = [...eduExps];
    newEduExps[index]["school"] = e.target.value;
    onUpdate(newEduExps);
  };
  const handleMajor = (e) => {
    const newEduExps = [...eduExps];
    newEduExps[index]["major"] = e.target.value;
    onUpdate(newEduExps);
  };
  const handleGradDate = (e) => {
    const newEduExps = [...eduExps];
    newEduExps[index]["gradDate"] = e.target.value;
    onUpdate(newEduExps);
  };

  return (
    <fieldset>
      <label>
        School:{" "}
        <input type="text" value={eduExp["school"]} onChange={handleSchool} />
      </label>
      <label>
        Major:{" "}
        <input type="text" value={eduExp["major"]} onChange={handleMajor} />
      </label>
      <label>
        Graduation Date:{" "}
        <input
          type="month"
          value={eduExp["gradDate"]}
          onChange={handleGradDate}
        />
      </label>
    </fieldset>
  );
}

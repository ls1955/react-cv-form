export default function EduExpBlock({ index, onUpdate, eduExps }) {
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
        School*:{" "}
        <input
          type="text"
          value={eduExps[index]["school"]}
          onChange={handleSchool}
          required
        />
      </label>
      <label>
        Major*:{" "}
        <input
          type="text"
          value={eduExps[index]["major"]}
          onChange={handleMajor}
          required
        />
      </label>
      <label>
        Graduation Date*:{" "}
        <input
          type="month"
          value={eduExps[index]["gradDate"]}
          onChange={handleGradDate}
          required
        />
      </label>
    </fieldset>
  );
}

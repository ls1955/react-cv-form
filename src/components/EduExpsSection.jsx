import EduExpBlock from "./EduExpBlock";

export default function EduExpsSection({ eduExps, onUpdate }) {
  const handleAddField = (e) => {
    e.preventDefault();
    onUpdate([
      ...eduExps,
      {
        school: "",
        major: "",
        gradDate: "",
      },
    ]);
  };
  const eduFields = eduExps.map((eduExp, i) => {
    return (
      <EduExpBlock
        key={i}
        eduExp={eduExp}
        eduExps={eduExps}
        index={i}
        onUpdate={onUpdate}
      />
    );
  });

  return (
    <fieldset>
      <legend>Educational Experiences</legend>
      {eduFields}
      <button onClick={handleAddField}>+</button>
    </fieldset>
  );
}

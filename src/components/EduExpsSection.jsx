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
  const eduBlocks = eduExps.map((_, i) => {
    return (
      <EduExpBlock key={i} eduExps={eduExps} index={i} onUpdate={onUpdate} />
    );
  });

  return (
    <fieldset>
      <legend>Educational Experiences</legend>
      {eduBlocks}
      <button onClick={handleAddField}>+</button>
    </fieldset>
  );
}

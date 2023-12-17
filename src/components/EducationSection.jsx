import EducationFields from "./EducationFields";

export default function EducationSection({ eduExps, onUpdate }) {
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
  const fieldsets = eduExps.map((_, i) => {
    return (
      <EducationFields key={i} eduExps={eduExps} index={i} onUpdate={onUpdate} />
    );
  });

  return (
    <fieldset>
      <legend>Educational Experiences</legend>
      {fieldsets}
      <button onClick={handleAddField}>+</button>
    </fieldset>
  );
}

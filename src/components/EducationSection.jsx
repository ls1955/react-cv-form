import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import EducationFields from "./EducationFields";

export default function EducationSection({ educations, onUpdate }) {
  const handleAddField = (e) => {
    e.preventDefault();
    onUpdate([...educations, { school: "", major: "", gradDate: "" }]);
  };
  const fieldsets = educations.map((_, i) => {
    return (
      <EducationFields
        key={uuidv4()}
        educations={educations}
        index={i}
        onUpdate={onUpdate}
      />
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

EducationSection.propTypes = {
  educations: PropTypes.array,
  onUpdate: PropTypes.func,
};

import PropTypes from "prop-types";

export default function EducationFields({ educations, index, onUpdate }) {
  const handleUpdate = (e) => {
    const newEducations = [...educations];
    newEducations[index][e.target.name] = e.target.value;
    onUpdate(newEducations);
  };

  return (
    <fieldset>
      <label>
        School*:{" "}
        <input
          type="text"
          name="school"
          value={educations[index]["school"]}
          onChange={handleUpdate}
          required
        />
      </label>
      <label>
        Major*:{" "}
        <input
          type="text"
          name="major"
          value={educations[index]["major"]}
          onChange={handleUpdate}
          required
        />
      </label>
      <label>
        Graduation Date*:{" "}
        <input
          type="month"
          name="gradDate"
          value={educations[index]["gradDate"]}
          onChange={handleUpdate}
          required
        />
      </label>
    </fieldset>
  );
}

EducationFields.propTypes = {
  educations: PropTypes.array,
  index: PropTypes.number,
  onUpdate: PropTypes.func,
};

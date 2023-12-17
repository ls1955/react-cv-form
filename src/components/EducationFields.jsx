import PropTypes from "prop-types";

export default function EducationFields({ educations, index, onUpdate }) {
  const handleUpdate = (e) => {
    const newEducations = [...educations];
    newEducations[index][e.target.name] = e.target.value;
    onUpdate(newEducations);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    onUpdate(educations.toSpliced(index, 1));
  };

  return (
    <div className="fields-wrapper">
      <button onClick={handleDelete} className="delete-button">
        X
      </button>

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
    </div>
  );
}

EducationFields.propTypes = {
  educations: PropTypes.array,
  index: PropTypes.number,
  onUpdate: PropTypes.func,
};

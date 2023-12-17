import PropTypes from "prop-types";

export default function JobFields({ jobs, index, onUpdate }) {
  const handleUpdate = (e) => {
    const newJobs = [...jobs];
    jobs[index][e.target.name] = e.target.value;
    onUpdate(newJobs);
  };

  return (
    <fieldset>
      <label>
        Company*:{" "}
        <input
          type="text"
          name="company"
          value={jobs[index]["company"]}
          onChange={handleUpdate}
          required
        />
      </label>
      <label>
        Position*:{" "}
        <input
          type="text"
          name="position"
          value={jobs[index]["position"]}
          onChange={handleUpdate}
          required
        />
      </label>
      <label>
        From*:{" "}
        <input
          type="month"
          name="from"
          value={jobs[index]["from"]}
          onChange={handleUpdate}
          required
        />
      </label>
      <label>
        To*:{" "}
        <input
          type="month"
          name="to"
          value={jobs[index]["to"]}
          min={jobs[index]["from"]}
          onChange={handleUpdate}
          required
        />
      </label>
    </fieldset>
  );
}

JobFields.propTypes = {
  jobs: PropTypes.array,
  index: PropTypes.number,
  onUpdate: PropTypes.func,
};

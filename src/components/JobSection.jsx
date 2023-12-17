import PropTypes from "prop-types";

import JobFields from "./JobFields";

export default function JobSection({ jobs, onUpdate }) {
  const handleAddField = (e) => {
    e.preventDefault();
    onUpdate([...jobs, { company: "", position: "", from: "", to: "" }]);
  };
  const fieldsets = jobs.map((_, i) => {
    return <JobFields key={i} jobs={jobs} index={i} onUpdate={onUpdate} />;
  });

  return (
    <fieldset>
      <legend>Job experiences</legend>
      {fieldsets}
      <button onClick={handleAddField}>+</button>
    </fieldset>
  );
}

JobSection.propTypes = {
  jobs: PropTypes.array,
  onUpdate: PropTypes.func,
};

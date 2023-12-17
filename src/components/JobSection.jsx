import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import JobFields from "./JobFields";

export default function JobSection({ jobs, onUpdate }) {
  const handleAddField = (e) => {
    e.preventDefault();
    onUpdate([...jobs, { company: "", position: "", from: "", to: "" }]);
  };
  const fieldsets = jobs.map((_, i) => {
    return (
      <JobFields key={uuidv4()} jobs={jobs} index={i} onUpdate={onUpdate} />
    );
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

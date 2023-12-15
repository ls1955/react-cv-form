// The first sections of CVForm.
export default function GeneralInfoSection({ info, onUpdate }) {
  const handleName = (e) => onUpdate({ ...info, name: e.target.value });
  const handleEmail = (e) => onUpdate({ ...info, email: e.target.value });
  const handleTel = (e) => onUpdate({ ...info, tel: e.target.value });

  return (
    <fieldset>
      <legend>General information</legend>
      <label>
        Name: <input type="text" value={info["name"]} onChange={handleName} />
      </label>
      <label>
        Email:{" "}
        <input type="email" value={info["email"]} onChange={handleEmail} />
      </label>
      <label>
        Tel: <input type="tel" value={info["tel"]} onChange={handleTel} />
      </label>
    </fieldset>
  );
}

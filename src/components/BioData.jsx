function BioData(prop) {
  return (
    <div className="bio-data">
      <h1>Bio-Data of {prop.name}</h1>
      <hr />
      <div className="personal-info">
        <h2>Personal Information</h2>
        <p>Name: {prop.name}</p>
        <p>Email: {prop.email} </p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          {prop.skills.map((skill) => (
            <li> {skill}</li>
          ))}
        </ul>
      </div>
      <div className="interest">
        <h2>Interests</h2>
        <ul>
          {prop.Interests.map((Interest) => (
            <li> {Interest}</li>
          ))}
        </ul>
      </div>

      <hr />
      <div>
        <p>Recomanded by {prop.recomand}</p>
      </div>
    </div>
  );
}
export default BioData;

import React, { useState } from "react";

function Sample() {

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  return (
    <div>
      <h2>Registration Form</h2>
      <label>First Name :&nbsp;</label>
      <input type="text" value={firstName} onChange={(e) => setfirstName(e.target.value)}></input><br /><br />
      <label>Last Name :&nbsp;</label>
      <input type="text" value={lastName} onChange={(e) => setlastName(e.target.value)}></input><br /><br />
      <h3>Full Name is :  </h3>{firstName} {lastName}
    </div>
  )
}

export default Sample;

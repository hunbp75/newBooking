import validator from "validator";
import React, { useState } from "react";

//Email
const Form = () => {
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    let email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Hibás E-mail cím!!!");
    }
  };

  //Aktuális dátum
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;

  return (
    <div className="form-container">
      <h1 className="asztalfoglalas">Asztalfoglalás</h1>
      <form className="form">
        <input type="text" id="name" placeholder="Name:" />
        <input
          type="number"
          id="person"
          placeholder="Vendégek száma:"
          min="1"
          max="25"
        ></input>
        <input
          type="email"
          id="email"
          placeholder="E-mail:"
          onChange={(e) => validateEmail(e)}
        ></input>{" "}
        <span>{emailError}</span>
        <input type="date" id="date" min={today} />
        <input type="time" id="time" />
        <input type="submit" id="submit" value="Foglalás" />
      </form>
    </div>
  );
};

export default Form;

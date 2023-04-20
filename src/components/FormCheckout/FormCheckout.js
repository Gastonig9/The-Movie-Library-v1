import React, { useState } from "react";

export default function FormCheckout({ onCheckout }) {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  function handleInputChange(evt) {
    const inputText = evt.target.value;
    const inputName = evt.target.name;
    //userData["phone"] -> userData.phone
    const newUserData = { ...userData };
    newUserData[inputName] = inputText;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    onCheckout(userData);
  }

  function clearFormData(evt) {
    evt.preventDefault();
    setUserData({
      username: "",
      email: "",
      phone: "",
    });
  }

  return (
    <>
      <form onSubmit={onSubmit} className="bg-dark text-white p-4 w-50 mx-auto mt-5">
        <div className="form-group">
          <label className="label-input">Your name</label>
          <input value={userData.username} name="username" type="text" required onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label className="label-input">Your Email</label>
          <input value={userData.email} name="email" type="email" required onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label className="label-input">Your Phone</label>
          <input value={userData.phone} name="phone" type="number" required onChange={handleInputChange} className="form-control" />
        </div>
        <button onClick={onSubmit} type="submit" className="btn btn-primary mb-1 mt-3 w-50">
          Crear orden
        </button>
        <br />
        <button onClick={clearFormData} className="btn btn-danger">Cancelar</button>
      </form>
    </>
  );
}
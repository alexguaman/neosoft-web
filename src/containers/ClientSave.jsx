import axios from "axios";
import React, { useRef } from "react";
import { useAlert } from 'react-alert';
import "../styles/ClientSave.scss";

const ClientSave = () => {
  const form = useRef(null);
  const API = "http://localhost:8090/neosoft-api/clientes/";
  const alert = useAlert();
   
  const [nombresField, setNombresField] = React.useState({
    value: "",
    hasError: false,
  });

  const validateNames = (names) => names !== "";

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(form.current);
    const dataClient = {
      nombres: formData.get("nombres"),
      email: formData.get("email"),
      edad: formData.get("edad"),
    };

    const hasError = !validateNames(dataClient.nombres);
    setNombresField((prevState) => ({ ...prevState, hasError }));

    console.log(hasError);
    if (!hasError) {
      console.log(dataClient);
      sendPostRequest(dataClient);
      handleReset();
    }

  };

  const sendPostRequest = async (dataClient) => {
    await axios
      .post(API, dataClient)
      .then((resp) => {
        console.log(resp);
        console.log(resp.data);

        if (resp.data.status == 201){
          alert.show("Saved Succesfully... ");
        } else {
          alert.show("Error: " + resp.data.status + " - " + resp.data.message);
        }
        
      })
      .catch((err) => {
        console.error(err);
        alert.show("An error has occurred " + err);
      });
      
  };

  function handleChange(evt) {
   const hasError = false;
    setNombresField((prevState) => ({ ...prevState, hasError }));
  }

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  };

  return (
    <div className="clientSave">
      <div className="form-container">
        <h1 className="title">Ingresar Cliente</h1>

        <form action="/" className="form" ref={form}>
          <label htmlFor="nombres" className="label">
            Nombres
          </label>
          <input
            type="text"
            name="nombres"
            className="input"
            onChange={handleChange}
          />

          <label htmlFor="email" className="label">
            Email
          </label>
          <input type="text" name="email" className="input" />

          <label htmlFor="edad" className="label">
            Edad
          </label>
          <input type="number" name="edad" className="input" />

          <p className="msg-validate-error"
            id="msgID"
            aria-live="assertive"
            style={{ visibility: nombresField.hasError ? "visible" : "hidden" }}
          >
            Campo Nombres no puede ser vacio
          </p>

          <button
            onClick={handleSubmit}
            className="primary-button login-button"
          >
            Save
          </button>

          
        </form>
      </div>
    </div>
  );
};

export default ClientSave;

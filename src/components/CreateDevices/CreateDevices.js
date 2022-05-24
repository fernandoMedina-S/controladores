import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const CreateDevices = (props) => {

  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");

  const handleType = (e) => {
    setType(e.target.value);
  }

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleLocation = (e) => {
    setLocation(e.target.value);
  }

  const handleSize = (e) => {
    setSize(e.target.value);
  }

  const resetForm = () =>{
    setType("");
    setName("");
    setSize("");
    setLocation("");
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const newObject = [
      {
        id: type+name,
        type,
        name,
        location,
        size,
        state: "installing",
      },
    ]
    props.newDevice(newObject);
    resetForm();
  }
  return (
    <div className="create-devices__main-container">
      <form className="create-devices__main-form" onSubmit={(e) => handleSubmit(e)}>
        <TextField
          id="standard-basic"
          label="Tipo dispositivo"
          variant="standard"
          className="create-devices__text-field"
          onChange={(e) => handleType(e)}
          value={type}
        />
        <TextField
          id="standard-basic"
          label="Nombre"
          variant="standard"
          className="create-devices__text-field"
          onChange={(e) => handleName(e)}
          value={name}
        />
        <TextField
          id="standard-basic"
          label="Ubicacion"
          variant="standard"
          className="create-devices__text-field"
          onChange={(e) => handleLocation(e)}
          value={location}
        />
        <TextField
          id="standard-basic"
          label="Tamaño en bloques"
          variant="standard"
          className="create-devices__text-field"
          onChange={(e) => handleSize(e)}
          value={size}
        />
        <Button variant="contained" color="secondary" type="submit">
          Crear
        </Button>
      </form>
    </div>
  );
};

export default CreateDevices;

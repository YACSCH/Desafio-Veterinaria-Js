const fs = require("fs");

const fileName = "citas.json";

const registrar = (nombre, edad, animal, color, enfermedad) => {
  try {
    const citas = JSON.parse(fs.readFileSync(fileName, "utf-8"));
    const cita = {
      nombre,
      edad,
      animal,
      color,
      enfermedad,
    };

    citas.push(cita);
    fs.writeFileSync(fileName, JSON.stringify(citas));
    console.log("Registro Agregado!!!");
  } catch (error) {
    console.log("Error al registrar la cita:", error);
  }
};

const leer = () => {
  try {
    const citas = fs.readFileSync(fileName, "utf-8");

    JSON.parse(citas).forEach((cita) => {
      console.log(cita);
    });
  } catch (error) {
    console.log("Error al leer la cita:", error);
  }
};

module.exports = { registrar, leer };

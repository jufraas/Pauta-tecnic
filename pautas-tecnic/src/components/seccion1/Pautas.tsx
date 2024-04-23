import React, { useState } from "react";
import InputRow from "../inputrow";
import imgPauta from "../imgs/img-pauta.png";
import "./Pautas.css";

const Pauta: React.FC = () => {
  // definimos un estado para almacenar los valores de los inputs
  const [values, setValues] = useState<number[]>([0, 0, 0, 0, 0, 0])

  // función para manejar el cambio de valor en un input
  const handleInputChange = (index: number, value: number) => {
    // Creamos una copia del array de valores.
    const newValues = [...values]
    newValues[index] = value
    setValues(newValues)
  };

  const ventasGenerales = values.reduce((acc, curr) => acc + curr, 0)

  // renderizamos el componente pauta
  return (
    <div className="contenedor">
      <div className="titulo">
        <h1>Inversion en Pautas</h1>
      </div>
      <div className="contenedor2">
        <img src={imgPauta} className="pauta-imagen" />
        <div className="opciones">
          <div>
            <InputRow
              index={0}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <InputRow  index={1} onChange={handleInputChange} />
          </div>
          <div>
            <InputRow  index={2} onChange={handleInputChange} />
          </div>
          <div>
            <InputRow
              index={3}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <InputRow  index={4} onChange={handleInputChange} />
          </div>
          <div>
            <InputRow
              index={5}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <h1>{ventasGenerales}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pauta;

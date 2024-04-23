import React from 'react';
import './seccion1/Pautas.css'

// Definimos la interfaz de las props del componente InputRow.
interface InputRowProps {
  index: number
  onChange: (index: number, value: number) => void
}

// Definimos el componente InputRow.
const InputRow: React.FC<InputRowProps> = ({ index, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value)
    onChange(index, isNaN(value) ? 0 : value)
  };

  // Renderizamos el componente InputRow
  return (
    <div>
      <input type="number" onChange={handleInputChange} />
    </div>
  );
};

export default InputRow;
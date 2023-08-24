import "./campo.css";

const Campo = (props) => {
  // Destructuracion
  const { type = "text"} = props;
  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };
  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default Campo;

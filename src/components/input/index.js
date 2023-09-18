import inputStyle from "./style.css";

export default function Input () {
  return (
  <div style={inputStyle.div}>
    <input style={inputStyle.input} type="text" placeholder="Adivinhe o Pokemon"></input>
  </div>
  );
}
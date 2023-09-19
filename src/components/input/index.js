import inputStyle from "./style.css";

export default function Input ({setCount, count}) {

  function handleSubmit (event) {
    if (event.key == 'Enter') {
      console.log('teste');
      setCount(count++);
    }
  }

  return (
  <div style={inputStyle.div}>
      <input onKeyPress={handleSubmit} style={inputStyle.input} name="hit" type="text" placeholder="Adivinhe o Pokemon"></input>
  </div>
  );
}
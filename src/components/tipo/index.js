import styles from "./styles.css";

export default function Tipo({ tipo }) {
  return (
    <>
      <div style={{ backgroundColor: tipo?.color }} className="tipo">
        <p>Tipo: {tipo?.name}</p>
      </div>
    </>
  );
}
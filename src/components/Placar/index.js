import "./style.css";

export default function Placar({ score, highscore }) {
  return (
    <div className="score-container">
      <h3 className="score">acertos: {String(score).padStart(3, '0')}</h3>
      <div className="score-divider" />
      <h3 className="highscore">recorde: {String(highscore).padStart(3, '0')}</h3>
    </div>
  );
}
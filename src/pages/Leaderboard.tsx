import React, { useEffect, useState } from 'react';

type Score = {
  score: number;
};

const LeaderBoard: React.FC = () => {
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost/get_game_scores.php')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar datos');
        return res.json();
      })
      .then((data: Score[]) => {
        setScores(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando puntuaciones...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Puntuación</th>
          </tr>
        </thead>
        <tbody>
          {scores.map(({ score }, index) => (
            <tr key={index}>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
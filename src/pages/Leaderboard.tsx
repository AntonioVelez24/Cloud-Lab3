import React, { useEffect, useState } from 'react';

type Score = {
  username: string;
  game_name: string;
  score: number;
  time: number;
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

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6 text-black text-center">🏆 Leaderboard</h1>

      {loading && <p className="text-lg text-gray-700">Cargando puntuaciones...</p>}
      {error && <p className="text-red-600 font-semibold">Error: {error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="min-w-full table-fixed border border-black text-center">
            <thead>
              <tr className="bg-gray-200 text-black font-bold border border-black">
                <th className="py-2 px-4 border border-black">Jugador</th>
                <th className="py-2 px-4 border border-black">Juego</th>
                <th className="py-2 px-4 border border-black">Puntaje</th>
                <th className="py-2 px-4 border border-black">Tiempo (s)</th>
              </tr>
            </thead>
            <tbody>
              {scores.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-600 border border-black">
                    No hay puntuaciones registradas.
                  </td>
                </tr>
              ) : (
                scores.map(({ username, game_name, score, time }, index) => (
                  <tr key={index} className="border border-black">
                    <td className="py-2 px-4 border border-black">{username}</td>
                    <td className="py-2 px-4 border border-black">{game_name}</td>
                    <td className="py-2 px-4 border border-black">{score}</td>
                    <td className="py-2 px-4 border border-black">{time}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LeaderBoard;

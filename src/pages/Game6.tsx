function Game6() {
    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">Game 6</h1>
                {/* Carga el juego de Construct 2 usando un iframe */}
                <iframe
                    src="/Game6/index.html" // Asegúrate de que esta ruta es correcta
                    title="Game 6"
                    width="100%"
                    height="600px"
                    style={{ border: "none" }}
                ></iframe>
                <div>
                    <h1>Game 6</h1>
                    <p>This is the sixth game.</p>
                </div>
            </div>
        </div>
    );
}
export default Game6;
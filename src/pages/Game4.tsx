import { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game4() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Game4/Game4.loader.js",
        dataUrl: "/Game4/Game4.data",
        frameworkUrl: "/Game4/Game4.framework.js",
        codeUrl: "/Game4/Game4.wasm",
    });

    const [inputValue, setInputValue] = useState("");

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    function handleSendText() {
        sendMessage("SceneManager", "ReceiveText", inputValue);
    }

    function handleSceneRestart() {
        sendMessage("SceneManager", "ReloadScene");
    }

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">Game 4</h1>
                <Unity unityProvider={unityProvider} className="centered-unity" />
                <div style={{ marginTop: 20 }}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Escribe aquí..."
                        style={{ marginRight: 10, padding: 5 }}
                    />
                    <button onClick={handleSendText}>
                        Enviar al juego
                    </button>
                </div>
                <div style={{ marginTop: 30 }}>
                    <button onClick={handleSceneRestart}>
                        Reiniciar escena
                    </button>
                </div>
                <div>
                    <h1>Game 4</h1>
                    <p>This is the fourth game.</p>
                </div>
            </div>
        </div>
    );
}

export default Game4;
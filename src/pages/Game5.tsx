import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game5() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Game5/Game5.loader.js",
        dataUrl: "/Game5/Game5.data",
        frameworkUrl: "/Game5/Game5.framework.js",
        codeUrl: "/Game5/Game5.wasm",
    });

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        (window as any).onUnityMessage = (msg: string) => {
            console.log("Mensaje recibido desde Unity:", msg);
        };
        return () => {
            delete (window as any).onUnityMessage;
        };
    }, []);

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
                <h1 className="centered-title">Game 5</h1>
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
                    <h1>Game 5</h1>
                    <p>This is the fifth game.</p>
                </div>
            </div>
        </div>
    );
}

export default Game5;
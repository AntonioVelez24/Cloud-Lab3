import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game3() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Game3/Game3.loader.js",
        dataUrl: "/Game3/Game3.data.br",
        frameworkUrl: "/Game3/Game3.framework.js.br",
        codeUrl: "/Game3/Game3.wasm.br",
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

    function handleSceneRestart() {
        sendMessage("SceneManager", "ReloadScene");
    }

    function handleSendText() {
        sendMessage("SceneManager", "ReceiveText", inputValue);
    }

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">Game 3</h1>
                <Unity unityProvider={unityProvider} className="centered-unity" />
                <div style={{ marginTop: 20 }}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Escribe aquí..."
                        style={{ marginRight: 10, padding: 5 }}
                    />
                    <button onClick={handleSendText}>Enviar al juego</button>
                </div>
                <div style={{ marginTop: 30 }}>
                    <button onClick={handleSceneRestart}>Reiniciar escena</button>
                </div>
                <div>
                    <h1>Game 3</h1>
                    <p>This is the third game.</p>
                </div>
            </div>
        </div>
    );
}

export default Game3;
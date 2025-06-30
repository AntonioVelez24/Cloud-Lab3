import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game5() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Game5/Game5.loader.js",
        dataUrl: "/Game5/Game5.data.br",
        frameworkUrl: "/Game5/Game5.framework.js.br",
        codeUrl: "/Game5/Game5.wasm.br",
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
        sendMessage("ReloadManager", "ReceiveText", inputValue);
    }

    function handleSceneRestart() {
        sendMessage("ReloadManager", "ReloadScene");
    }

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">Game 5</h1>
                <Unity
                    unityProvider={unityProvider}
                    className="centered-unity"
                    style={{
                        width: "1920px",
                        height: "1080px",
                        transform: "scale(0.7)",
                        transformOrigin: "top center"
                    }}
                />
                <div style={{ marginTop: 10 }}>
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
                <div style={{ marginTop: 16 }}>
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
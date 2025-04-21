import { Unity, useUnityContext } from "react-unity-webgl";

function Game2() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Game2/CardGame2.loader.js",
        dataUrl: "/Game2/CardGame2.data",
        frameworkUrl: "/Game2/CardGame2.framework.js",
        codeUrl: "/Game2/CardGame2.wasm",
    });

    function handleSceneRestart() {
        sendMessage("SceneManager", "ReloadScene");
    }

    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">Game 2</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                    <div className="centered-content">
                    <button onClick={handleSceneRestart}>Restart Scene</button>
                </div>               
                </div>
                <div>
                    <h1>Game 2</h1>
                    <p>This is the second game.</p>
                </div>
            </div>
        </>
    );
}

export default Game2;
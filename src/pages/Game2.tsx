import { Unity, useUnityContext } from "react-unity-webgl";

function Game2() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/CardGame.loader.js",
        dataUrl: "/CardGame.data.unityweb",
        frameworkUrl: "/CardGame.framework.js.unityweb",
        codeUrl: "/CardGame.wasm.unityweb",
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
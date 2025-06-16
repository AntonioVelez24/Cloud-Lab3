import { Unity, useUnityContext } from "react-unity-webgl";

function Login() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/Login/Login Scene.loader.js",
        dataUrl: "/Login/Login Scene.data.br",
        frameworkUrl: "/Login/Login Scene.framework.js.br",
        codeUrl: "/Login/Login Scene.wasm.br",
    });

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">Login</h1>
                <h1>Welcome Back!</h1>
                <p>Please enter your credentials to access your account.</p>
                <div style={{ marginTop: 20 }}>
                    <Unity unityProvider={unityProvider} className="centered-unity" />
                </div>
            </div>
        </div>
    );
}

export default Login;
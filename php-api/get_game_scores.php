import { Unity, useUnityContext } from "react-unity-webgl";
ss-Control-Allow-Origin: *");
function Login() {ntent-Type: application/json");
    const { unityProvider } = useUnityContext({
        loaderUrl: "/Login/Login.loader.js",
        dataUrl: "/Login/Login.data",
        frameworkUrl: "/Login/Login.framework.js",All(PDO::FETCH_ASSOC);
        codeUrl: "/Login/Login.wasm",res);
    });    return (        <>            <div className="centered-container">                <div className="centered-content">                    <h1 className="centered-title">Login</h1>                </div>                <div>
                    <h1>Welcome Back!</h1>
                    <p>Please enter your credentials to access your account.</p>
                </div>
                <div style={{ marginTop: 20 }}>
                    <Unity unityProvider={unityProvider} className="centered-unity" />
                </div>
            </div>
        </>
    );
}

export default Login;
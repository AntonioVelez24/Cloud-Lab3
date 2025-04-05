import MainBanner from "../common/MainBanner.tsx";
import myimagen from "../assets/images/myimagen.jpg";
import '../Home.css';

function Home() {
    return (
        <>
            <MainBanner />
            <section className="about-me">
                <h2> Sobre mí: </h2>
                <img src={myimagen} alt="Mi foto" className="about-me-image" />
                <p><strong>Nombre:</strong> Fabricio Antonio</p>
                <p><strong>Apellidos:</strong> Velez Bazan</p>
                <p><strong>Edad:</strong> 19 años</p>
                <p><strong>Carrera:</strong> Diseño y desarrollo de simuladores y videojuegos </p>
            </section>
        </>
    );
}

export default Home;
import '../styles/Header.css';
import MeImage from '../img/me.png';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/tablero');
    };

    return (
        <div className="header-container">
            <nav className='navbar'>
                <div className="header-content">
                    <h1 className='titleHeader'>Crea fácilmente tu <span className='letters'>Backlog</span> de proyecto.</h1>
                    <p className="backlog-description">
                        Un Backlog es la lista priorizada de tareas, requisitos y funcionalidades 
                        que deben implementarse en un proyecto de software. En este se especifican
                        las tareas que se deben realizar y en qué tiempos, ajustado a metodología Scrum
                        y flexible para Incremental y Cascada.
                    </p>
                </div>
            </nav>
            <div className="main-content">
                <div className="author-section">
                    <img src={MeImage} alt="Mauricio Garro R." className='imageMe' />
                    <p className='textPage'>Proyecto creado por Mauricio Garro Rodríguez</p>
                </div>
                <div className="button-container">
                    <button className='btnComenzar' onClick={handleClick}>¡Comienza ahora!</button>
                </div>
            </div>
            <section className='features-section'>
                <div className="features-container">
                    <div className="feature-card">
                        <h3 className="feature-title">Simplicidad en la creación</h3>
                        <p className="feature-description">
                            Crea tu backlog en forma de lista o tabla, con estilos predefinidos para textos y 
                            formatos correctos para un backlog profesional.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3 className="feature-title">Exportación a Kanban</h3>
                        <p className="feature-description">
                            Convierte tu backlog directamente a un cronograma Kanban con fechas 
                            modificables, ahorrando tiempo en configuración.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3 className="feature-title">Múltiples formatos de exportación</h3>
                        <p className="feature-description">
                            Exporta tanto el Backlog como el Kanban a PNG, JPG o PDF de forma 
                            gratuita y con un solo clic.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3 className="feature-title">Trabajo colaborativo</h3>
                        <p className="feature-description">
                            Invita a tu equipo mediante enlaces para que vean sus actividades
                            asignadas.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header;
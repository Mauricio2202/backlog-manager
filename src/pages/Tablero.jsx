import { useState } from 'react';
import '../styles/Tablero.css';

function Tablero() {

    const [open, setOpen] = useState(false);

    function toggleBoard() {
        setOpen(!open);
    }

    return (
        <div>
            <div className="tableroContainer">
                <h1 className='titleTablero'>Este es tu tablero</h1>
            <p className='subtitleTablero'>Aquí gestionarás tu backlog.</p>
            </div>

            <section className='sectionResources'>
                <button className='btnCreateBoard' onClick={toggleBoard}>
                    { open ? 'Cerrar Tablero' : 'Crear Tablero' }
                </button>
            </section>

            <section className='backlogDevelopment'>
                {open && (
                    <div className='panelCentro'>
                            <h2>Panel de Creación del Backlog</h2>
        <p>Aquí puedes empezar a añadir elementos.</p>
                    </div>
                )}
            </section>
        </div>
    );
}

export default Tablero;

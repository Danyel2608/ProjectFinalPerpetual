import './BodyGrid.css';
import Calendar from "../calendar/CalendarGrid";
import CardsCamisetas from "../cards/CardsCamisetas";
import lamina1 from "../../../assets/Proyectos/1.jpeg";
import lamina2 from "../../../assets/Proyectos/2.jpeg";
import lamina3 from "../../../assets/Proyectos/3.jpeg";
import lamina4 from "../../../assets/Proyectos/4.jpeg";
import lamina5 from "../../../assets/Proyectos/5.jpeg";
import lamina6 from "../../../assets/Proyectos/6.jpeg";
import gift from "../../../assets/Proyectos/gift.jpg";
import ReactDOM from 'react-dom';
import { useState } from 'react';
import ModalFormInfo from './ModalInformation/ModalFormInfo';

function BodyGrid() {
    const [modalInfo, setModalInfo] = useState({
        title: "",
        message: "",
        itsOk: false,
    });
    const [visible, setVisible] = useState(false);

    const OpenModalInfo = () => {
        setVisible(true);
        setModalInfo({ title: "Complete form, follow the steps to finish sending the inquiry to Perpetual.", message: "Perpetual has received your inquiry, we will contact you as soon as possible.", itsOk: true })
    }
    const handleCloseModal = () => {
        setVisible(false);
    };

    return (
        <div className="body">
            {
                ReactDOM.createPortal(
                    <ModalFormInfo visible={visible} data={modalInfo} onClose={handleCloseModal} />,
                    document.querySelector("#modal")
                )
            }
            {/* Laminas hechas por Perpetual Tattoo */}
            <div className="grid" id="laminas">
                <img src={lamina1} alt="1" />
                <img src={lamina2} alt="2" />
                <img src={lamina4} alt="4" />
                <img src={lamina3} alt="3" />
                <img src={lamina5} alt="5" />
                <img src={lamina6} alt="6" />
            </div>
            {/* Tarjetas regalo */}
            <div className="gift" id="giftsCards">
                <h3>Gift Cards</h3>
                <div className="imgGift">
                    <img src={gift} alt="gift" />
                </div>
            </div>
            {/* Calendarion de citas disponibles,que se obtienen de la base de datos */}
            <div className="calendar" id="citas">
                <Calendar />
            </div>
            {/* Camisetas y sus funciones al comprar */}
            <CardsCamisetas />
            {/* Formulario de dudas que se enviará a un correo Gmail */}
            <div className="help" id="help">
                <h2>DO YOU NEED ADDITIONAL INFORMATION?</h2>
                <form action="https://formsubmit.co/consultaskoke@gmail.com" method="POST" enctype="multipart/form-data" onSubmit={OpenModalInfo}>
                    <input type="text" name="userName" placeholder="Name" required />
                    <input type="text" name="lastName" placeholder="Last Name" />
                    <input type="email" name="email" id="emailForm" placeholder="Email" required />
                    <input type="text" name="text" placeholder="Write here..." className="textDescription" required />
                    <input type="file" name="fileImgage" id="fileImage" />
                    <div className="buttonForm">
                        <button type="submit">Send</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default BodyGrid;

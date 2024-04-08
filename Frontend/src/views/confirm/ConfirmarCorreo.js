import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ConfirmarCorreo.css";

function ConfirmarCorreo() {
    const navigate = useNavigate();
    const [confirmado, setConfirmado] = useState(false);

    useEffect(() => {
        // Obtener el correo electrónico de la URL
        const params = new URLSearchParams(window.location.search);
        const correo = params.get('email');

        // Realizar la solicitud al backend para verificar el estado de confirmación del correo electrónico
        fetch(`http://localhost:8001/emails/confirmar/${correo}`, { method: 'PUT' })
            .then(response => {
                // Verificar si la respuesta fue exitosa
                if (!response.ok) {
                    throw new Error('Error al verificar correo electrónico');
                    setConfirmado(false);
                }else{
                    setConfirmado(true);
                    setTimeout(() => {
                        navigate("/login")
                    }, 3000);
                }
                
            })
            .catch(error => {
                console.error('Error al verificar correo electrónico:', error);
                // Manejar el error aquí, como mostrar un mensaje de error al usuario
            });
    }, []);

    return (
        <div className='alert-confirm'>
            {confirmado ? (
                <p>Tu correo electrónico ha sido confirmado. Serás redirigido al inicio de sesión.</p>
            ) : (
                <p>Por favor, verifica tu correo electrónico para continuar.</p>
            )}
        </div>
    );
}

export default ConfirmarCorreo;

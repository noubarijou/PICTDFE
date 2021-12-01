import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Helmet} from 'helmet-react';

const NotFound = () => {
    const [timer, setTimer] = useState(5);
    const navigate = useNavigate();

    useEffect(() =>{
        const intervalId = setTimer(() =>{
            setTimer(timer => --timer)
            if (timer === 0) {
                navigate('/')
            }
        }, 1000);
        return () => clearInterval(intervalId)
    }, [navigate, timer])
    return (
        <>
        <h2>Essa página não existe ;~</h2>
        <h3>Redirecionando em {timer}</h3>
        </>
    )
}
export default NotFound;
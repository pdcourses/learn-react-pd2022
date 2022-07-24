import React , {useState, useEffect} from 'react'
import styles from './Test.module.sass';

export default function Test(props) {
    const [w, setW] = useState(window.innerWidth);
    const [h, setH] = useState(window.innerWidth);

    useEffect( () => {
        window.addEventListener('resize', () => {
            setW(window.innerWidth);
            setH(window.innerHeight);
        })
    })
    
    return (
        <>
            <p>Width {w}</p>
            <p>Heigth {h}</p>
        </>
    );  
}

import React, {useState, useEffect} from 'react'

export default function CountClick() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count+1);
    }

    useEffect(()=> {
        document.body.addEventListener('click', handleClick);
        console.log("Element was added ", count);
        return () => {
            document.body.removeEventListener('click', handleClick);
            console.log("Element was deleted ", count);
        }
    }, [count]);

    useEffect(() => {
        console.log('Effect is ', count);
        return () => {
            console.log('Clear effect ', count);
        }
    });
    return <div>{count}</div>;
}

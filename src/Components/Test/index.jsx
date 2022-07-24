import React , {useState, useEffect} from 'react'
import styles from './Test.module.scss';

export default function Test(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [inlineStyle, setInlineStyle] = useState(null);

  const widthHandler = (event) => {
    setWidth(event.target.value);
  }
  const heightHandler = (event) => {
    setHeight(event.target.value);
  }

  const rerenderBox = () => {
    setInlineStyle({ 
        width: `${width}px`,
        height: `${height}px`
    });
  }

  return (
    <>
    <input type="text" value={width} onChange={widthHandler} />
    <input type="text" value={height} onChange={heightHandler} />
    <button onClick={rerenderBox} >rerender </button>
    <div className={styles.box} style={inlineStyle}></div>
    </>
  );
}

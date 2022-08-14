import React, { useEffect, useState } from 'react';
import {useMouse} from './../../../hooks/';

export default function Cat() {
  const [x, y] = useMouse();
  return (
        <img src="https://w1.pngwing.com/pngs/442/829/png-transparent-cartoon-cat-whiskers-stray-cats-kitten-tshirt-gift-stray-cat-strut-cuteness.png"  
        style={{
          width: '200px',
          position: 'absolute',
          left: x,
          top: y,
        }}        
        />
    );
}

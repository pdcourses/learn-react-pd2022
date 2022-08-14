import React, { useEffect, useState } from 'react';
import {useMouse} from './useMouse';

export default function Mouse() {
  const [x, y] = useMouse();
  return (
        <img src="https://cdn.lifehacker.ru/wp-content/uploads/2020/03/Snimok-ekrana-2020-03-06-v-15.06.01_1583492810-e1583492831544.jpg" alt="mouse" />
    );
}

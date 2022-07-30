import React, {useState} from 'react'
import Range1 from '../Range1';
import Range2 from '../Range2';

export default function RangeParent() {
  const [value, setValue] = useState(0);
  return (
    <>
    <Range1 value={value} setValue={setValue}/>
    <Range2 value={value} setValue={setValue}/>
    </>
  )
}

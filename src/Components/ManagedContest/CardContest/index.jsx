import React, { useState } from 'react'

export default function CardContest() {
const [head, setHead] = useState("");
const [body, setBody] = useState("");
 return (
    <div>
        <h2>{head}</h2>
    </div>
  )
}

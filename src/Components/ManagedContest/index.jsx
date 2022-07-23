import React, { useEffect } from 'react'
import CardContest from './CardContest';

const db = [
    {
        head: 'Consultant led',
        body: 'Work one-on-one with a Squadhelp branding consultant',
        iconSrc: '#',
    },
    {
        head: 'Crowd powered',
        body: 'Work with our top rated Creatives and receive a huge breadth of ideas.',
        iconSrc: '#',
    },
    {
        head: 'Trademark Reports',
        body: 'Comprehensive trademark screening on your shortlisted names',
        iconSrc: '#',
    },
    {
        head: 'Audience testing',
        body: 'Get rapid feedback from real people on your shortlist of business names',
        iconSrc: '#',
    }
];

export default function ManagedContest() {
  cosnt [data, setData] = useState([]);

  useEffect(() => {
    return setData(db);
  }, data)

  const mapCards = (c, i) => {
    return <CardContest key={i} data={c} />
  }
  return (
    <ul>{data.map(mapCards)}</ul>
  );
}


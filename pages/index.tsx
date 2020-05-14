import { useState } from 'react';
import Head from 'next/head';

{
  /* create onclick fucntionality  */
}
const calculateTime = (start: string, end: string): number => {
  // turn start and end into only minuts
  const startHours = Number(start.slice(0, 2));
  const endHours = Number(end.slice(0, 2));

  const startMinutes = startHours * 60 + Number(start.slice(3));
  const endMinutes = endHours * 60 + Number(end.slice(3));
  // find the difference
  let diff: number;
  if (startHours > endHours) {
    diff = (24 * 60 - startMinutes + endMinutes) / 60;
  } else {
    diff = (endMinutes - startMinutes) / 60;
  }
  return diff;
};

const Index = () => {
  const [elapsed, setElapsed] = useState(0);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  return (
    <>
      <Head>
        <title>Frontend Exercise - Octopart</title>
      </Head>
      <form>
        <input
          id="start-time"
          type="text"
          onChange={(e) => {
            setStart(e.target.value);
          }}
          placeholder="00:00"
          value={start}
        ></input>
        <input
          id="end-time"
          type="text"
          onChange={(e) => {
            setEnd(e.target.value);
          }}
          placeholder="00:00"
          value={end}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();

            setElapsed(calculateTime(start, end));
          }}
        >
          Calculate
        </button>
      </form>
      {elapsed ? <p>{elapsed} hours</p> : null}
    </>
  );
};

export default Index;

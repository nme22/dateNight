import { useEffect } from 'react';

useEffect(() => {
  fetchDates();
}, []);

async function fetchDates() {
  const { data } = await supabase.from('dates').select();
  setDates(data);
  console.log('data:', data);
}
export const getStaticPaths = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  ); /* Get data of past dates from firebase*/
  const data = await res.json();

  const paths = data.map((dates) => {
    return {
      params: { id: dates.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users' + id);
  const data = await res.json();

  return {
    props: { dates: data },
  };
};

const Details = ({ dates }) => {
  return (
    <div>
      <h1> {dates.name}</h1>
      {/*
            Data thats needed from firebase
            <p>{dates.phone}</p>
            <p>{dates.location}</p>
            <p>{dates.calendar}</p>
            <p>{dates.time}</p>
            <p>{dates.note}</p> */}
    </div>
  );
};

export default Details;

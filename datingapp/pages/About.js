import Head from 'next/head';
const About = () => {
  return (
    <>
      <Head>
        <title>DateNight | About</title>
        <meta name="keywords" content="DateNight" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          This application is designed to help the user keep track of their
          romantic endevours by creating a personal dating profile to help you
          remember your romantic progress! This application uses the Yelp API to
          help browse potential date ideas, coordinate a date night properly,
          and record the date to prevent your romance from being dry!
        </p>
      </div>
    </>
  );
};

export default About;

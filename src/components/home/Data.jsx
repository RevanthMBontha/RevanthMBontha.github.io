import React from 'react';

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Revanth M. Bontha</h1>
      <h3 className="home__subtitle">Full Stack Developer</h3>
      <p className="home__description">
        I am a Full Stack Developer, and I use the MERN stack!
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello!
        <i
          className="uil uil-message"
          style={{ marginLeft: '.5rem', color: 'var(--container-color)' }}
        ></i>
      </a>
    </div>
  );
};

export default Data;

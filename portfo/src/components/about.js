import React from 'react';
import Data from './data';

function About() {
  return (
    <div className="content">
      <h2>About</h2>
      <p>Working As Software Engineer</p>
      <p>Enthusiastic towards Problem Solving And Learning new things</p>
      <p>
        I have been working as ETL developer in data integration with 1.9 Years
        of Experience
      </p>
      <p> Familiar with below technologies and tools </p>
      <div className='tools'>
      {
          Data.map((tool) => {
              const {src,alt,title} = tool;
              <img
                    alt={alt}
                    src={src}
                    title={title} />
          })
      }
        </div>
    </div>

  );
}


export default About;
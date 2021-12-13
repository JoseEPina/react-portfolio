import React from 'react';
import projectsArray from '../../assets/projectsArray';
import Project from '../Project';

function Portfolio({ portfolioData }) {
   const { name, description } = portfolioData;
   return (
      <section>
         <h1 data-testid='h1tag'>{name}</h1>
         <p>{description}</p>
         <Project title={portfolioData.name} />
      </section>
   );
}

export default Portfolio;

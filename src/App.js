import React, { useState } from 'react';

import Header from './components/Header';
// import Nav from './components/Nav';
// import About from './components/About';
// import Gallery from './components/Gallery';
// import ContactForm from './components/Contact';

function App() {
   const [contactSelected, setContactSelected] = useState(false);

   const [titles] = useState([
      {
         name: 'About Me',
         description: 'Let me show you what I can do for you!',
      },
      { name: 'Portfolio', description: 'Project examples.' },
      { name: 'Contact', description: 'Contact Me' },
      { name: 'Resume', description: 'Feel free to download a cop' },
   ]);

   const [currentTitle, setCurrentTitle] = useState(titles[0]);

   console.log('currentTitle', currentTitle);
   return (
      <div>
         <Header
            titles = {titles}
            setCurrentTitle = {setCurrentTitle}
            currentTitle = {currentTitle}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
         />
         <main>
            <p>Place holder for Main</p>
         </main>
         <footer>
            <p> Place holder for Footer</p>
         </footer>
      </div>
   );
}

export default App;

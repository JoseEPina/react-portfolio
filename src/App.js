import React, { useState } from 'react';

// import Nav from './components/Nav';
// import About from './components/About';
// import Gallery from './components/Gallery';
// import ContactForm from './components/Contact';

function App() {
   const [contactSelected, setContactSelected] = useState(false);

   const [categories] = useState([
      {
         name: 'commercial',
         description: 'Photos of grocery stores, food trucks, and other commercial projects',
      },
      { name: 'portraits', description: 'Portraits of peoplen in my life' },
      { name: 'food', description: 'Delicious delicacies' },
      { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
   ]);

   const [currentCategory, setCurrentCategory] = useState(categories[0]);

   console.log('currentCategory', currentCategory);
   return (
      <div>
         <header>
            {' '}
            <h1>My React Portfolio</h1>
         </header>
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

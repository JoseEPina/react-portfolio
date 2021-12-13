import React, { useEffect } from 'react';

function Navigation(props) {
   const {
      //
      titles = [],
      setCurrentTitle,
      currentTitle,
      contactSelected,
      setContactSelected,
   } = props;


   useEffect(() => {
      document.title = currentTitle.name;
   }, [currentTitle]);

   return (
      <nav>
         <ul className='flex-row'>
            {/* <li className='mx-2'>
                  <a data-testid='about' href='#about' onClick={() => setContactSelected(false)}>
                     About Me
                  </a>
               </li>
               <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                  <span onClick={() => setContactSelected(true)}>Contact</span>
               </li> */}
            {titles.map((title) => (
               <li
                  className={`mx-1 ${currentTitle.name === title.name && !contactSelected && 'navActive'}`}
                  key={title.name}
               >
                  <span
                     onClick={() => {
                        setCurrentTitle(title);
                        setContactSelected(false);
                     }}
                  >
                     {title.name}
                  </span>
               </li>
            ))}
         </ul>
      </nav>
   );
}

export default Navigation;

import React, {useEffect} from 'react';
import Navigation from '../Navigation';

function Header(props) {
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
      <header className='flex-row px-1'>
         <h2>
            <a data-testid='link' href='/'>
               <span role='img' aria-label='camera'></span>Jose E Pina
            </a>
         </h2>
         <Navigation
            titles={titles}
            setCurrentTitle={setCurrentTitle}
            currentTitle={currentTitle}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
         ></Navigation>
      </header>
   );
}

export default Header;

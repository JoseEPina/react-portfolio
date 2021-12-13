import React from 'react';
import myAvatar from '../../assets/images/my-avatar.jpg';

function About() {
   return (
      <section className='my-5'>
         <h1 id='about'>What I can bring to your business?</h1>
         <img src={myAvatar} className='my-2' style={{ width: '50%' }} alt='cover' />
         <> "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." </>
         <p></p>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel turpis gravida, venenatis sem dictum,
            venenatis orci. Mauris vel sapien nec lacus commodo mollis. Pellentesque lacus ante, facilisis eget bibendum
            et, rutrum vel est. Curabitur vulputate ipsum non rutrum molestie. Nulla eu euismod eros, rhoncus suscipit
            dui. Quisque malesuada vestibulum vulputate. Donec malesuada, odio quis facilisis tristique, nisl nibh
            rutrum velit, et interdum massa ante eu nisl. Aenean egestas non dolor at dignissim. Nam elementum dignissim
            placerat. Vivamus interdum sed metus sit amet mollis. Aliquam dignissim elit in risus faucibus molestie.
            Nunc in nibh id ante luctus consectetur. Aliquam a neque tellus. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae;
         </p>

         <p>
            Phasellus vehicula nibh eget consequat dapibus. Proin quam arcu, tincidunt eget tempor at, consequat sed
            nisi. In volutpat orci sed ligula rutrum rutrum. Nunc quis leo hendrerit, eleifend odio eu, posuere magna.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum rutrum nisi, non feugiat turpis
            rhoncus vestibulum. Aliquam eget pulvinar orci, pellentesque blandit ex. Vestibulum aliquam, nunc at semper
            efficitur, neque neque elementum orci, eget volutpat massa odio id orci. Donec rhoncus congue mi, in
            accumsan orci facilisis sed. Sed imperdiet tincidunt felis, ut lacinia nunc.
         </p>
      </section>
   );
}

export default About;

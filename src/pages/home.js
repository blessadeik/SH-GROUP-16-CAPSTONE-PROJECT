import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import BigButton from '../components/Buttons/BigButton';
import Footer from '../components/Footer/Footer'

function Home(){
    return(
        <body>
            <Navbar />

            <div className='content'>
               <div>
                  <img src='' alt='' classname='' />
               </div>
               <div className='fa content'>
                 <h2>Order for Tasty, Spicy and Fresh Food</h2>
                 <p>from the comfort of your home</p>
               </div>

               <BigButton props ={"Place Order"} />
            </div>

            <Footer/>
        </body>
            
           
    )
}

export default Home;
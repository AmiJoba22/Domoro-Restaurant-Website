import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
    /* Main div */
<div className='main-logo bg-domo-bg'>

    {/* header div for logos and icons */}
    <div className='flex items-center justify-between p-4'>
        {/* div for logos */}
        <div className='bg-domo-bg w-[100px] h-[100px]'>
            <img src='/assets/domoro.imgs/Dom_final_logo.png' alt="domoro logo">
               </img>
        </div> 
        <div className='tagline bg-domo-bg flex items-center justify-between p-4 ml-15'>
            <img src='/assets/domoro.imgs/Domoro2.png' alt="domoro tag logo">
               </img>
       </div>


        {/* div for icons */}
    <div className='flex items-center justify-between mr-45 icons bg-domo-bg w-[90px] h-[90px]'>
        <img src='/assets/domoro.imgs/cart.png' alt='add to cart'  >
           </img>
        <img src='/assets/domoro.imgs/call.png' alt='call us'  >
           </img>
        <img src='/assets/domoro.imgs/login.png' alt='login to account'  >
           </img>
   
    </div> 

    </div>
        {/* web menu nav */}  
        <nav className="bg-nav-domo">
          <Link to="/" className="color-nav-font-domo">Home</Link>
          <Link to="/menu" className="color-nav-font-domo">Menu</Link>
          <Link to="/order" className="color-nav-font-domo">Order</Link>
          <Link to="/about" className="color-nav-font-domo">About</Link>
        </nav>
</div> 
    );
}


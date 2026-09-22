function Menu() {
  return (
    <div>


   <div className="bg-nav-domo py-20 px-10 text-center border-b border-white sm:text-3xl">
    <h1 className="font-domo-head text-white"> View Our Menu</h1> 
   </div>

    <div>
    <h2 className="font-domo-head text-center py-15 text-white border-white/5 sm:text-2xl">Meals & Dishes</h2> 
   </div>

   <div> 

        <button 
          className="text-white font-domo-head bg-domo-bg rounded-xl p-2 px-5 cursor-pointer font-semibold shadow-md transition hover:opacity-90 active:scale-85"
        > Appetizers 
        </button>

        <button 
          className="text-white font-domo-head bg-domo-bg rounded-xl p-2 px-5 cursor-pointer font-semibold shadow-md transition hover:opacity-90 active:scale-85"
        > Meals
        </button>

         <button 
          className="text-white font-domo-head bg-domo-bg rounded-xl p-2 px-5 cursor-pointer font-semibold shadow-md transition hover:opacity-90 active:scale-85"
        > Drinks
        </button>

        <button 
          className="text-white font-domo-head bg-domo-bg rounded-xl p-2 px-5 cursor-pointer font-semibold shadow-md transition hover:opacity-90 active:scale-85"
        > Dessert
        </button>


   </div>


    </div>
  );
}


export default Menu; 
import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar-holder'>
        <div className="top-row">
           <div className="logo">
               <div className="logo-img">
                 <img src="./src/assets/YV logo2.PNG" alt=""  className='log-img' />
               </div>
               <h2>YVerse</h2>
           </div>
           <div className="menu-ham">
               <div className="menu-bar"></div>
               <div className="menu-bar"></div>
               <div className="menu-bar"></div>
           </div>
        </div>
        <nav>
          <div className="nav-tag">
            <span>Home</span>
          </div>
        </nav>
    </div>
  )
}

export default Sidebar

{/* <img src="./src/assets/YV logo2.PNG" alt="" /> */}
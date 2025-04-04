


// import avatar from "/avatar.png";
// import { FaProductHunt } from "react-icons/fa";
// import { RiHomeHeartFill } from "react-icons/ri";
// import { FaCartArrowDown } from "react-icons/fa";
// import { IoMdMenu } from "react-icons/io";
// import { useState } from "react";

// function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className='flex items-center justify-between py-4 px-5 lg:px-10 bg-gray-800'>
//       {/* Logo */}
//       <div>
//         <h1 className='text-2xl lg:text-3xl font-bold text-white'>FLEXFITZ</h1>
//       </div>

//       {/* Desktop Navigation */}
//       <nav className='hidden lg:flex items-center gap-8'>
//         <a className='text-white text-lg font-medium hover:text-pink-400' href="">
//           <RiHomeHeartFill />
//         </a>
//         <a className='text-white text-lg font-medium hover:text-pink-400' href="">
//           <FaProductHunt />
//         </a>
//         <a className='text-white text-lg font-medium hover:text-pink-400' href="">
//           <FaCartArrowDown />
//         </a>
//         <a className='text-white text-lg font-medium hover:text-pink-400' href="">Login</a>
//         <a className='text-white text-lg font-medium hover:text-pink-400' href="">Logout</a>
//         <a className='text-white text-lg font-medium hover:text-pink-400' href="">Signup</a>

//         {/* Avatar and Greeting */}
//         <div className="text-white flex items-center gap-2">
//           <img src={avatar} alt="User Avatar" className="h-8 w-8 rounded-full" />
//           <p>Hi Lade!</p>
//         </div>
//       </nav>

//       {/* Mobile Menu Button */}
//       <button onClick={() => setOpen(!open)} className="lg:hidden text-3xl text-white">
//         <IoMdMenu />
//       </button>

//       {/* Mobile Navigation */}
//       <div className={`fixed lg:hidden left-0 top-0 w-[250px] h-screen bg-gray-800 z-50 transition-all duration-300 ${open ? "translate-x-0" : "translate-x-[-100%]"}`}>
//         <nav className="flex flex-col items-center gap-8 pt-10">
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">
//             <RiHomeHeartFill />
//           </a>
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">
//             <FaProductHunt />
//           </a>
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">
//             <FaCartArrowDown />
//           </a>
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">Login</a>
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">Logout</a>
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">Signup</a>

//           {/* Avatar and Greeting */}
//           <div className="text-white flex items-center gap-2 mt-8">
//             <img src={avatar} alt="User Avatar" className="h-8 w-8 rounded-full" />
//             <p>Hi Lade!</p>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Header;



// import avatar from "/avatar.png";
// import { FaProductHunt } from "react-icons/fa";
// import { RiHomeHeartFill } from "react-icons/ri";
// import { FaCartArrowDown } from "react-icons/fa";
// import { IoMdMenu } from "react-icons/io";
// import { useState } from "react";

// function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className='flex items-center justify-between py-4 px-5 lg:px-10 bg-gray-800 sticky top-0 z-50'>
//       {/* Logo */}
//       <div className='flex-1'>
//         <h1 className='text-2xl lg:text-3xl font-bold text-white'>FLEXFITZ</h1>
//       </div>

//       {/* Desktop Navigation */}
//       <nav className='hidden lg:flex flex-1 justify-center items-center gap-8'>
//         <a className='text-white text-lg font-medium hover:text-pink-400' href="">
//           <RiHomeHeartFill />
//           <span className="ml-1">Home</span>
//         </a>
//         <a className='text-white text-lg font-medium hover:text-pink-400' href="">
//           <FaProductHunt />
//           <span className="ml-1">Shop</span>
//         </a>
//         <a className='text-white text-lg font-medium hover:text-pink-400' href="">
//           <FaCartArrowDown />
//           <span className="ml-1">Cart</span>
//         </a>
//         <a className='text-white text-lg font-medium hover:text-pink-400' href="">Login</a>
//         <a className='text-white text-lg font-medium hover:text-pink-400' href="">Logout</a>
//         <a className='text-white text-lg font-medium hover:text-pink-400' href="">Signup</a>

//         {/* Avatar and Greeting */}
//         <div className="text-white flex items-center gap-2 ml-8">
//           <img src={avatar} alt="User Avatar" className="h-8 w-8 rounded-full" />
//           <p>Hi Lade!</p>
//         </div>
//       </nav>

//       {/* Mobile Menu Button */}
//       <button onClick={() => setOpen(!open)} className="lg:hidden text-3xl text-white">
//         <IoMdMenu />
//       </button>

//       {/* Mobile Navigation */}
//       <div className={`fixed lg:hidden left-0 top-0 w-[250px] h-screen bg-gray-800 z-50 transition-all duration-300 ${open ? "translate-x-0" : "translate-x-[-100%]"}`}>
//         <nav className="flex flex-col items-center gap-8 pt-10">
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">
//             <RiHomeHeartFill />
//             <span className="ml-1">Home</span>
//           </a>
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">
//             <FaProductHunt />
//             <span className="ml-1">Shop</span>
//           </a>
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">
//             <FaCartArrowDown />
//             <span className="ml-1">Cart</span>
//           </a>
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">Login</a>
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">Logout</a>
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">Signup</a>

//           {/* Avatar and Greeting */}
//           <div className="text-white flex items-center gap-2 mt-8">
//             <img src={avatar} alt="User Avatar" className="h-8 w-8 rounded-full" />
//             <p>Hi Lade!</p>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Header;


// import avatar from "/avatar.png";
// import { FaProductHunt } from "react-icons/fa";
// import { RiHomeHeartFill } from "react-icons/ri";
// import { FaCartArrowDown } from "react-icons/fa";
// import { IoMdMenu } from "react-icons/io";
// import { useState } from "react";

// function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className='flex items-center justify-between py-4 px-5 lg:px-10 bg-gray-800 sticky top-0 z-50'>
//       {/* Logo */}
//       <div className='flex-1'>
//         <h1 className='text-2xl lg:text-3xl font-bold text-white'>FLEXFITZ</h1>
//       </div>

//       {/* Centered Navigation (Home, Shop, Cart) */}
//       <nav className='hidden lg:flex flex-1 justify-center items-center gap-8'>
//         <a className='text-white text-lg font-medium hover:text-pink-400' href="">
//           <RiHomeHeartFill />
//           <span className="ml-1">Home</span>
//         </a>
//         <a className='text-white text-lg font-medium hover:text-pink-400' href="">
//           <FaProductHunt />
//           <span className="ml-1">Shop</span>
//         </a>
//         <a className='text-white text-lg font-medium hover:text-pink-400' href="">
//           <FaCartArrowDown />
//           <span className="ml-1">Cart</span>
//         </a>
//       </nav>

//       {/* Profile/Avatar */}
//       <div className="text-white flex items-center gap-2 ml-8">
//         <img src={avatar} alt="User Avatar" className="h-8 w-8 rounded-full" />
//         <p>Hi Lade!</p>
//       </div>

//       {/* Mobile Menu Button */}
//       <button onClick={() => setOpen(!open)} className="lg:hidden text-3xl text-white">
//         <IoMdMenu />
//       </button>

//       {/* Mobile Navigation */}
//       <div className={`fixed lg:hidden left-0 top-0 w-[250px] h-screen bg-gray-800 z-50 transition-all duration-300 ${open ? "translate-x-0" : "translate-x-[-100%]"}`}>
//         <nav className="flex flex-col items-center gap-8 pt-10">
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">
//             <RiHomeHeartFill />
//             <span className="ml-1">Home</span>
//           </a>
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">
//             <FaProductHunt />
//             <span className="ml-1">Shop</span>
//           </a>
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">
//             <FaCartArrowDown />
//             <span className="ml-1">Cart</span>
//           </a>
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">Login</a>
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">Logout</a>
//           <a className='text-white text-2xl font-medium hover:text-pink-400' href="">Signup</a>

//           {/* Avatar and Greeting */}
//           <div className="text-white flex items-center gap-2 mt-8">
//             <img src={avatar} alt="User Avatar" className="h-8 w-8 rounded-full" />
//             <p>Hi Lade!</p>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Header;



import avatar from "/avatar.png";
import ladelogoM from "/ladelogoM-removebg-preview.png";
import { RiHomeHeartFill } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FaShopify } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex items-center justify-between py-4 px-5 lg:px-10 bg-gray-800 sticky top-0 z-50'>
      {/* Logo */}
      <div className='flex items-center justify-center'>
        <h1 className='text-2xl lg:text-3xl font-bold text-white'>FLEXFITZ</h1>
        <img src={ladelogoM} alt="FlexFitz Logo" className="w-[200px] h-[150px]" />
      </div>
      
      {/* Centered Navigation (Home, Shop, Cart) */}
      <nav className='hidden lg:flex flex-1 justify-center items-center gap-8'>
        <Link className='text-white text-lg font-medium hover:text-pink-400' to="/">
          <RiHomeHeartFill />
          <span className="ml-1">Home</span>
        </Link>
        <Link className='text-white text-lg font-medium hover:text-pink-400' to="/shop">
          <FaShopify />
          <span className="ml-1">Shop</span>
        </Link>
        <Link className='text-white text-lg font-medium hover:text-pink-400' href="">
          <FaCartArrowDown />
          <span className="ml-1">Cart</span>
        </Link>
      </nav>

      {/* Right Side: Login, Logout, Signup, Avatar */}
      <div className="hidden lg:flex items-center gap-6 ml-8">
        <Link className='text-white text-lg font-medium hover:text-pink-400' href="">Login</Link>
        <Link className='text-white text-lg font-medium hover:text-pink-400' href="">Logout</Link>
        <Link className='text-white text-lg font-medium hover:text-pink-400' href="">Signup</Link>
        <div className="text-white flex items-center gap-2">
          <img src={avatar} alt="User Avatar" className="h-8 w-8 rounded-full" />
          <p>Hi Lade!</p>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setOpen(!open)} className="lg:hidden text-3xl text-white">
        <IoMdMenu />
      </button>

      {/* Mobile Navigation */}
      <div className={`fixed lg:hidden left-0 top-0 w-[250px] h-screen bg-gray-800 z-50 transition-all duration-300 ${open ? "translate-x-0" : "translate-x-[-100%]"}`}>
        <nav className="flex flex-col items-center gap-8 pt-10">
          <a className='text-white text-2xl font-medium hover:text-pink-400' href="">
            <RiHomeHeartFill />
            <span className="ml-1">Home</span>
          </a>
          <a className='text-white text-2xl font-medium hover:text-pink-400' href="">
            <FaShopify />
            <span className="ml-1">Shop</span>
          </a>
          <a className='text-white text-2xl font-medium hover:text-pink-400' href="">
            <FaCartArrowDown />
            <span className="ml-1">Cart</span>
          </a>
          <a className='text-white text-2xl font-medium hover:text-pink-400' href="">Login</a>
          <a className='text-white text-2xl font-medium hover:text-pink-400' href="">Logout</a>
          <a className='text-white text-2xl font-medium hover:text-pink-400' href="">Signup</a>

          {/* Avatar and Greeting */}
          <div className="text-white flex items-center gap-2 mt-8">
            <img src={avatar} alt="User Avatar" className="h-8 w-8 rounded-full" />
            <p>Hi Lade!</p>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;






import React ,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav,setNav] = useState(false);
  const handleClick = () => setNav(!nav)
  return (
      <div className='fixed w-full h-[60px] flex  justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
        <img src ={Logo} alt='Logo ' style={{width : '100px'}}/>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
             <li>
          <Link to="home" smooth={true}  duration={500}>
            Home
          </Link></li>
        <li>
          <Link to="about" smooth={true} duration={500}>
          About
        </Link></li>
        <li>
          <Link to="Skills" smooth={true} duration={500}>
          Skills
        </Link>
        </li>
        
        <li><Link to="projects" smooth={true} duration={500}>
          Projects
        </Link></li>
        <li><Link to="contact" smooth={true} duration={500}>
          Contact
        </Link></li> 
      </ul>

{/* Hamburger */}
    <div onClick={handleClick} className = 'md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
    </div>
    {/*Mobile Menu*/}
      <ul className={
        !nav
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
      }
      >
            <li className = 'py-6 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link></li>
            <li className = 'py-6 text-4xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link></li>
              <li className = 'py-6 text-4xl'>
          <Link onClick={handleClick} to="Skills" smooth={true} duration={500}>
            Skills
          </Link></li>
              <li className = 'py-6 text-4xl'>
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Projects
          </Link></li>
              <li className = 'py-6 text-4xl'>
          <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>
            Contact
          </Link></li> 
        </ul>
  {/*Social icons */}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a  className = 'flex justify-between items-center w-full text-gray-300'
              href="https://www.linkedin.com/in/diwakar-6719b0213/" onClick = {handleClick}>
              LinkedIn <FaLinkedin size={38} />
            </a>
          </li>
          <li className='w-[160px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://github.com/SPIDY123456/" onClick = {handleClick}>
              Github <FaGithub size={38} />
            </a>
          </li>
          <li className='w-[160px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://drive.google.com/file/d/18ZJV86s8Dryuon0kowm5g2PLPNy35n3z/view?usp=sharing/" onClick ={handleClick}>
              Email <HiOutlineMail size={38} />
            </a>
          </li>
          <li className='w-[160px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://drive.google.com/file/d/1QiNynmsfdTn4jH5TW58tmhao3ig04oIH/view?usp=sharing/" onClick ={handleClick}>
              Resume <BsFillPersonLinesFill size={38} />
            </a>
          </li>
        </ul>
      </div>
    </div>


  );
};
 
export default Navbar;

import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"; 
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = ({ selectecPage , setSelectecPage }) => {
  const [ isMenuToggled, setIsMenuToggled ] = useState(false);  
   const isAboveSmallScreens = useMediaQuery("(min-width: 768px)"); 
  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>
    </nav>
  )
}

export default Navbar
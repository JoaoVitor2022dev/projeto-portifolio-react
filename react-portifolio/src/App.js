import Navbar from "../src/scenes/Navbar";
import { useState } from 'react'; 
import  useMediaQuery  from "../src/hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState('home'); 
   const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");  
  
  return (
    <div className="app bg-depp-blue">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;


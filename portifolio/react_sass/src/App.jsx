// module de compoenents 
import MainContent from "./components/MainContent";
import SideBar from "./components/sidebar";

// module de sass
import "./styles/components/app.sass";


function App() {
  return (
    <div id="portifolio">
        <h1>João Vitor Mocambite Lima</h1>
          <SideBar/>
           <MainContent/>         
    </div>
  )
}

export default App; 


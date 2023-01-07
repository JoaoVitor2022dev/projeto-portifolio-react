// compoenente da rede social 
import SocialNetworks from "./SocialNetworks";

// imagem de perfil
import Avatar from "../img/me.jpeg";

import "../styles/components/sidebar.sass";

const SideBar = () => {
  return (
        <aside id="sidebar">
          <img src={Avatar} alt="Joao Vitor"/>
          <p className="title">Desevolvedor Full-stack</p>
          <SocialNetworks/>
          <p>informaçoes de contato</p>
          <a href="" className="btn">Download Curriculo</a> 
        </aside>
  )
}

export default SideBar;

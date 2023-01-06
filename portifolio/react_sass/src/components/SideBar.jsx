// imagem de perfil
import Avatar from "../img/eu.jpeg";

import "../styles/components/sidebar.sass";

const SideBar = () => {
  return (
        <aside id="sidebar">
          <img src={Avatar} alt="Joao Vitor"/>
          <p className="title">Desevolvedor Full-stack</p>
          <p>redes sociais</p>
          <p>informaçoes de contato</p>
          <a href="" className="btn">Download Curriculo</a> 
        </aside>
  )
}

export default SideBar;

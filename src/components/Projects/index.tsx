import efoodimg from '../../assets/images/efood.png'
import { ProjectContainer, ProjectImage, ProjectText } from './styles'

export const Projects = () => {
  return (
    <div className="container">
      <h2>Projects</h2>
      <ProjectContainer>
        <ProjectImage src={efoodimg} alt="imagem da pagina eFood" />
        <ProjectText>
          <h3>Projeto Efood</h3>
          <p>
            Projeto de página de pedidos de comida online, listando restaurantes
            e seus respectivos menu através de requisição de API.
          </p>
        </ProjectText>
        <div>
          <nav>
            <ul>
              <li>
                <a href="#">Link do projeto</a>
              </li>
            </ul>
          </nav>
        </div>
      </ProjectContainer>
    </div>
  )
}

export default Projects
